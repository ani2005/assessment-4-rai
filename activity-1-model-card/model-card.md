# Model Card — NopCommerce AI Product Recommendation Feature

## 1. Purpose
This AI feature provides personalised product recommendations to shoppers on the NopCommerce e-commerce platform. It serves end consumers browsing products, helping them discover relevant items based on search history, purchase behaviour, and product metadata.

## 2. Inputs
- User search terms and query text
- Browsing and purchase history (session-based)
- Product metadata (category, price, tags, ratings)
- User demographic signals (where consent is given)

## 3. Outputs
- Ranked list of recommended products (top 5–10 items)
- AI-generated search result summaries
- "You may also like" product carousels

## 4. Known Limitations
- Recommendations degrade significantly for new users with no history (cold-start problem)
- Model may over-recommend high-margin items if training data reflects sales bias
- Does not handle ambiguous or misspelled queries reliably
- Performance drops for niche product categories with sparse training data

## 5. Bias Risks
- **Purchase-history bias**: Users from lower-income demographics may receive fewer premium recommendations due to historical purchase patterns
- **Popularity bias**: Obscure but relevant products are under-recommended in favour of bestsellers
- **Gender/age bias**: If product categories are historically gendered in training data, recommendations may reinforce stereotypes (e.g. recommending tools to male-identified users only)
- **Language bias**: Non-English search queries receive lower-quality recommendations due to underrepresentation in training data

## 6. Use-Case Restrictions
This AI feature must NOT be used for:
- Medical product recommendations where clinical guidance is required
- Financial product advice (loans, insurance, credit)
- Age-restricted product recommendations without verified age checks
- Any context where the output is treated as authoritative without human review