# Activity 5 — RAI CI/CD Gate

This folder contains the RAI governance workflow integrated into CI/CD.

The full RAI gate workflow is located at: `.github/workflows/rai-auto-grader.yml`

## Gate Checks
- Prompt injection tests via Promptfoo
- Playwright safety gate
- Document schema validation
- Claude API rubric grading