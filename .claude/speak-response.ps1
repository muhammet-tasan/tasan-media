param()

Add-Type -AssemblyName System.Speech

$input_json = $null
try {
    $raw = [Console]::In.ReadToEnd()
    if ($raw.Trim()) { $input_json = $raw | ConvertFrom-Json }
} catch {}

$session_id = $input_json?.session_id

$projects_dir = Join-Path $env:USERPROFILE ".claude\projects"
$transcript = $null

if ($session_id) {
    $transcript = Get-ChildItem $projects_dir -Recurse -Filter "$session_id.jsonl" -ErrorAction SilentlyContinue | Select-Object -First 1
}

if (-not $transcript) {
    $transcript = Get-ChildItem $projects_dir -Recurse -Filter "*.jsonl" -ErrorAction SilentlyContinue |
        Sort-Object LastWriteTime -Descending | Select-Object -First 1
}

$last_text = $null

if ($transcript) {
    $lines = Get-Content $transcript.FullName -ErrorAction SilentlyContinue
    foreach ($line in [Linq.Enumerable]::Reverse([string[]]$lines)) {
        try {
            $obj = $line | ConvertFrom-Json -ErrorAction SilentlyContinue
            if ($obj.type -eq "assistant") {
                $content = $obj.message.content
                if ($content -is [array]) {
                    foreach ($c in $content) {
                        if ($c.type -eq "text" -and $c.text.Trim()) {
                            $last_text = $c.text
                            break
                        }
                    }
                } elseif ($content -is [string] -and $content.Trim()) {
                    $last_text = $content
                }
                if ($last_text) { break }
            }
        } catch {}
    }
}

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice("Microsoft Zira Desktop")
$synth.Rate = 1

if ($last_text) {
    # Strip markdown: code blocks, inline code, headers, bullets, links
    $text = $last_text
    $text = $text -replace '```[\s\S]*?```', 'code block.'
    $text = $text -replace '`[^`]+`', ''
    $text = $text -replace '#{1,6}\s+', ''
    $text = $text -replace '\[([^\]]+)\]\([^\)]+\)', '$1'
    $text = $text -replace '\*{1,2}([^*]+)\*{1,2}', '$1'
    $text = $text -replace '^\s*[-*+]\s+', '' -split "`n" -join " "
    $text = $text.Trim()
    if ($text.Length -gt 600) { $text = $text.Substring(0, 600) + "... and more." }
    $synth.Speak($text)
} else {
    $synth.Speak("Claude is done.")
}
