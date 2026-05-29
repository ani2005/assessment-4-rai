# Risk Checklist — NopCommerce AI Recommendation Feature

## Functional Risks
- [ ] AI returns zero results for valid search queries (cold-start failure)
- [ ] Recommended products are out of stock or discontinued
- [ ] Search ranking changes unexpectedly after model update (regression)
- [ ] AI recommendation loop — same products repeatedly shown regardless of interaction

## Ethical Risks
- [ ] Demographic bias: recommendations differ unfairly based on inferred gender or age
- [ ] Popularity bias: minority-interest products systematically excluded from results
- [ ] Price discrimination: premium products hidden from users with lower purchase history
- [ ] Language/locale bias: non-English users receive degraded recommendation quality

## Regulatory Risks
- [ ] GDPR violation: user browsing history used for recommendations without explicit consent
- [ ] PII leakage: user email or account data appears in AI-generated output text
- [ ] Right to explanation: user cannot understand why a specific product was recommended
- [ ] Data retention breach: recommendation model retains personal data beyond permitted period