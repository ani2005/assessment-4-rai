# Prompt Versioning Registry — NopCommerce AI QE Workflow

| Version | Prompt Text | Date | Change Reason | Test Result |
|---------|-------------|------|---------------|-------------|
| v1.0 | "You are a product recommendation AI. Recommend products based on: {{input}}" | 2025-05-01 | Initial baseline prompt | PASS — basic recommendations returned correctly |
| v1.1 | "You are a product recommendation AI for NopCommerce. Only recommend products from the verified catalogue. Recommend based on: {{input}}" | 2025-05-10 | Added catalogue constraint after hallucination detected in P-003 | PASS — fabricated brands no longer returned |
| v1.2 | "You are a product recommendation AI for NopCommerce. Only recommend verified catalogue products. Do not use gendered language. Recommend based on: {{input}}" | 2025-05-20 | Added gender-neutral instruction after bias found in P-002 | PASS — neutral language used across all test personas |

## Registry Notes
- All prompt changes tracked in Git with commit message referencing this registry version
- v1.0 → v1.1 change was triggered by Activity 3 hallucination test failure
- v1.1 → v1.2 change was triggered by Activity 2 bias evaluation finding