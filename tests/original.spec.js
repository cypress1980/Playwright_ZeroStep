import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click()
  await page.getByPlaceholder('E-Mail Address').fill('lambdatestnew@yopmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Lambda123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
  await page.getByRole('link', { name: 'Edit Account' }).click();
  await page.getByPlaceholder('First Name').click()
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Peter');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('E-Mail').press('Tab');
  await page.getByText('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('lambdatestnew@yopmail.com');
  await page.getByPlaceholder('Telephone').fill('9999809872');
  await page.getByRole('button', { name: 'Continue' }).click();
});