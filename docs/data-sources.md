# Data Sources

Planned and prioritized data sources for the Trend Scout and downstream agents.

The principle: **prefer official APIs over scraping.** Stable, legal, maintainable.

---

## Phase 1 — Core Sources

### Google Trends

- **Purpose:** Discover what people are searching for *right now*, by region.
- **Type of data:** Daily trending search terms, related queries, interest-over-time.
- **API key needed:** No official public API. Community libraries (e.g. `pytrends`) wrap the public endpoints.
- **Implementation difficulty:** Low — Python library exists.
- **Reliability:** Medium. Unofficial endpoints can change without notice.
- **Notes:** Strong regional signal (CH/DE/AT). Good entry point for trend discovery.

### YouTube Data API (v3)

- **Purpose:** Trending videos, channel/video search, view-count signals.
- **Type of data:** Video metadata, trending lists per region, search results.
- **API key needed:** Yes — Google Cloud project + API key (free quota available).
- **Implementation difficulty:** Low–Medium. Well-documented REST API.
- **Reliability:** High. Official Google API.
- **Notes:** Quota limits matter — design queries to be efficient. Use region codes for CH/DE/AT.

---

## Phase 2 — Optional / Future Sources

### Reddit API

- **Purpose:** Community-driven trends, hot/rising threads in topic-specific subreddits.
- **Type of data:** Posts, comments, subreddit activity, sort by hot/top/rising.
- **API key needed:** Yes — Reddit app credentials (OAuth).
- **Implementation difficulty:** Medium. `praw` library is excellent.
- **Reliability:** High, but recent API pricing changes warrant caution for heavy use.
- **Notes:** Excellent for niche AI/tech communities (r/MachineLearning, r/LocalLLaMA, r/technology).

### Hacker News API

- **Purpose:** Tech industry pulse — front page, top stories, discussions.
- **Type of data:** Stories, comments, scores, timestamps.
- **API key needed:** No.
- **Implementation difficulty:** Very low. Plain HTTP/JSON.
- **Reliability:** Very high. Firebase-hosted, stable.
- **Notes:** Great signal for AI/dev/tech topics. US-skewed audience.

### Product Hunt API

- **Purpose:** Daily product/tool launches — useful for "new tools" content.
- **Type of data:** Product launches, makers, votes, categories.
- **API key needed:** Yes — OAuth.
- **Implementation difficulty:** Medium. GraphQL API.
- **Reliability:** High.
- **Notes:** Best for AI tools / SaaS content angles.

---

## Source Selection Heuristics

- **Regional fit:** Google Trends > YouTube > Reddit > HN/PH for CH/DE/AT.
- **Topical depth:** Reddit + HN > Google Trends for AI/tech specificity.
- **Speed of signal:** Google Trends + YouTube for fresh; Reddit for emerging discussion.
- **Legal/ToS clarity:** All sources above are usable via official APIs or documented public endpoints.

---

## Not Planned

- Web scraping of news sites (legal/ToS risk, brittle, unnecessary)
- Twitter/X API (cost, instability)
- TikTok scraping (ToS violation)
