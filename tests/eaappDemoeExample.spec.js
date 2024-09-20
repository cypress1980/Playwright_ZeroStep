import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Playwright with ZeroSteps', () => {
  test('verify the number of labels in a repo', async ({ page }) => {
    await page.goto('http://eaapp.somee.com/Account/Login')
    await ai('Enter UserName as admin', { page, test })
    await ai('Enter Password as password', { page, test })
    await ai('Click on the login button', { page, test })
    await ai('Click the Employee List link', { page, test })
    await ai('Click Benefits link for user Ramesh on the table', { page, test })
    var benfit = await ai('Get all the Basic Benefits')
    var additionalBenfit = await ai('Get all the Basic Additional Benefits')
    expect(benfit).toContainText('Dental')
    expect(additionalBenfit).toContainText('Car')
  })
})
