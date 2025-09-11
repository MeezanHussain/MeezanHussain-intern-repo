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

---

## Testing React Components with React Testing Library

- Component: `learning-jest/Hello.jsx`
- Tests: `learning-jest/Hello.test.jsx`
- Config: `learning-jest/jest.config.js`, `learning-jest/jest.setup.js`
- Commit: `7ce6aff` — learning-jest: add React Testing Library setup and tests (Hello component)
- Screenshots: `screenshots/Learning-Jest_1.png`, `screenshots/Learning-Jest_2.png`

### Why use React Testing Library?
- Tests behavior from the user’s perspective (accessible roles/names), not implementation details.
- More resilient to refactors: changing internals doesn’t break tests if the UI behavior stays the same.

### Challenge when simulating interaction
- Using the right query. I switched from matching button text to an accessible name (via `aria-label`) and then asserted the text change. Also ensured `jsdom` environment and `@testing-library/jest-dom` were set up.

---

## Mocking API Calls in Jest

- Component: `learning-jest/FetchUser.jsx`
- Tests: `learning-jest/FetchUser.test.jsx`
- Approach: Mocked `globalThis.fetch` with `jest.fn()` to control responses and test loading/success/error states.

### Why mock API calls?
- Keeps tests fast and deterministic (no real network).
- Allows testing edge cases (errors, timeouts, specific payloads) reliably.
- Decouples component behavior from external services.

### Common pitfalls with async tests
- Not awaiting async UI updates; prefer `await waitFor(...)` or `findBy...` queries.
- Forgetting to reset mocks between tests (`jest.restoreAllMocks()` / reassigning globals).
- Over-mocking implementation details; focus assertions on user-visible behavior (text, roles, aria states).
