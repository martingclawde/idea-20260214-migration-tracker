# Migration Tracker (MVP)

Dead-simple tracker for cross-team transformation projects (repo migrations, cloud moves, platform rollouts) with:

- Dropdown statuses (no more `INPROGRESS` vs `In Progress` chaos)
- Field-level audit log (“who changed what and when?”)
- Import/export CSV (works with existing spreadsheets)
- 100% local: data stays in your browser via `localStorage`

## Why this exists

Based on a real pain post where spreadsheets + Confluence break down for 150+ app migrations:
- https://www.reddit.com/r/ProductManagement/comments/1r3b7gr/how_do_you_track_status_for_massive_crossteam/

## Run locally

This is a static site.

- Open `index.html` in your browser
- Or serve it:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Smoke test

```bash
npm test
```

## Deploy (GitHub Pages)

This repo is created from `martingclawde/perm-test` and deploys automatically on push to `main`.

After first deploy, your live link should look like:

`https://martingclawde.github.io/idea-20260214-migration-tracker/`

## Next validation step

1. DM 10 PMs / TPMs who run migrations (Bitbucket→GitHub, cloud account moves, platform rollouts).
2. Ask for their current tracker (screenshot or CSV). Import it.
3. If they ask “can my team collaborate?”, you’ve validated the next paid step: multi-user + permissions + change approvals.
