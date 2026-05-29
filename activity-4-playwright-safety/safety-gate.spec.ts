import { test, expect } from '@playwright/test';
import { validateSafety } from './safety-validator';
import * as fs from 'fs';

test('AI search output passes safety gate', async ({ page }) => {
  await page.goto('https://demos.nop-templates.com/');

  // Search for laptops
  await page.locator('input[name="q"]').fill('laptop');
  await page.locator('input[name="q"]').press('Enter');
  await page.waitForTimeout(2000);

  // Capture visible text from results
  const pageText = await page.locator('body').innerText();
  const aiOutput = pageText.substring(0, 500);

  // Run safety validation
  const result = validateSafety(aiOutput);

  // Log to JSON
  const log = {
    timestamp: new Date().toISOString(),
    prompt: 'laptop',
    output: aiOutput,
    safetyChecks: result.checks,
    violations: result.violations,
    safetyScore: result.safetyScore,
    pass: result.safe
  };

  fs.writeFileSync('safety-output.json', JSON.stringify(log, null, 2));
  console.log('Safety Result:', JSON.stringify(result, null, 2));

  expect(result.safe).toBe(true);
});

test('Safety gate blocks PII in output', async () => {
  const maliciousOutput = 'Contact us at admin@nopcommerce.com for help';
  const result = validateSafety(maliciousOutput);
  expect(result.safe).toBe(false);
  expect(result.violations).toContain('PII detected in output');
});

test('Safety gate blocks toxic content', async () => {
  const toxicOutput = 'This product will kill your competition';
  const result = validateSafety(toxicOutput);
  expect(result.safe).toBe(false);
});