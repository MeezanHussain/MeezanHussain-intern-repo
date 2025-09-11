# Unit Tests with Jest — Reflection

## Why automated testing matters
- Catches regressions before they hit users
- Documents expected behavior (tests double as living specs)
- Enables safe refactoring and faster iteration

## What I did (evidence)
- Utility: `learning-jest/add.js`
- Tests: `learning-jest/add.test.js` and existing `learning-jest/index.test.js`
- Run locally:
  - `cd learning-jest`
  - `npm ci`
  - `npm test`

## What was challenging
- Picking the right module format (CommonJS) so Jest can import without extra config
- Writing clear, minimal assertions that describe behavior (e.g., edge cases like negatives/zeros)

## Notes
- Jest script already in `learning-jest/package.json` ("test": "jest").
- Keep tests small, deterministic, and focused on a single behavior.
