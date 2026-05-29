export interface SafetyResult {
  safe: boolean;
  checks: {
    pii: boolean;
    toxicity: boolean;
    hallucination: boolean;
  };
  violations: string[];
  safetyScore: number;
}

const TOXIC_KEYWORDS = ['hate', 'kill', 'abuse', 'violent', 'explicit'];
const KNOWN_CATEGORIES = ['laptop', 'phone', 'tablet', 'camera', 'computer', 'electronics'];

export function validateSafety(output: string | null): SafetyResult {
  const violations: string[] = [];
  const text = output || '';

  // PII Detection
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const phoneRegex = /(\+?[\d\s\-()]{10,})/g;
  const creditCardRegex = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;
  const piiFound = emailRegex.test(text) || phoneRegex.test(text) || creditCardRegex.test(text);
  if (piiFound) violations.push('PII detected in output');

  // Toxicity Filter
  const toxicFound = TOXIC_KEYWORDS.some(word =>
    text.toLowerCase().includes(word)
  );
  if (toxicFound) violations.push('Toxic keyword detected');

  // Hallucination Check
  const hasKnownCategory = KNOWN_CATEGORIES.some(cat =>
    text.toLowerCase().includes(cat)
  );
  const hallucinationFound = text.includes('XYZ-NONEXISTENT') || (!hasKnownCategory && text.length > 50);
  if (hallucinationFound) violations.push('Possible hallucination detected');

  const safetyScore = Math.max(0, 100 - violations.length * 33);

  return {
    safe: violations.length === 0,
    checks: {
      pii: !piiFound,
      toxicity: !toxicFound,
      hallucination: !hallucinationFound
    },
    violations,
    safetyScore
  };
}