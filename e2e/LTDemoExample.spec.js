import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Playwright with ZeroSteps', () => {
  test('verify the number of labels in a repo', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    await ai('Enter E-Mail Address as johnandrew@yopmail.com', { page, test })
    await ai('Enter Password as Lambda123', { page, test })
    await ai('Click on the login button', { page, test })
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    await ai('Click on the Edit Account link', { page, test })
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit')
    await ai('Fill out the form with realistic values', { page, test })
    await ai('Click on the continue button', { page, test })
  })
})