# /daily-project-closeout

**Purpose:** Standardize end-of-session project checkpoints to preserve architectural reasoning and project continuity.

**When to use:** End of focused work session, before extended breaks, before delegating to another AI/developer.

## Workflow

This command performs a comprehensive session closeout:

1. **Update PROJECT_STATUS.md** with operational snapshot
   - Current implementation state
   - Completed milestones
   - Architecture decisions made
   - Active blockers
   - Next recommended steps
   - Limitations and compromises

2. **Create session summary** at `docs/sessions/YYYY-MM-DD-session-summary.md`
   - Major work completed
   - Architecture decisions
   - Standards established/updated
   - Deprecated systems
   - Workflow changes
   - Discovered anti-patterns
   - Open issues
   - Recommended next tasks
   - Lessons learned

3. **Extract and document standards**
   - Successful patterns
   - Anti-patterns to avoid
   - Design system updates
   - Workflow standards

4. **Validate project structure**
   - No duplicate assets
   - Assets in correct final-assets/ location
   - No temporary files in git
   - Deprecated folders archived
   - Folder structure matches documentation
   - Design system consistency

5. **Prepare git workflow**
   - Review changed files
   - Prepare meaningful commit
   - Stage and commit changes
   - (Does NOT auto-push)

6. **Preserve continuity**
   - Ensure future AI/human sessions can resume
   - Clear architectural memory
   - Document gotchas and edge cases
   - List recommended next steps

## Output

After running this command, you will receive:

- ✓ Operational state summary (current phase, stability, readiness)
- ✓ Session summary location and content
- ✓ Standards extracted and documented
- ✓ Project structure validation results
- ✓ Git status and commit readiness
- ✓ Project maturity assessment
- ✓ Recommended next session tasks (prioritized)
- ✓ Key context for future sessions

## Example Usage

```
/daily-project-closeout
```

The command will analyze today's work, update documentation, and prepare a clean checkpoint without pushing to remote (manual approval required).

## Philosophy

This command treats the repository as **architectural memory** independent of chat history. It enables:

- Seamless handoff to future AI sessions
- Continuity across extended breaks
- Easy delegation to human developers
- Long-term project scalability
- Reusable standards and patterns

**Goal:** Sustainable, scalable project evolution, not isolated experiments.
