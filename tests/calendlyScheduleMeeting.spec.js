import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Calendly Testing ', () => {
    test('book the next available timeslot', async ({ page }) => {
      await page.goto('https://calendly.com/zerostep-test/test-calendly')
  
      await page.waitForSelector('[data-testid="calendar"]')
      await ai('Dismiss the privacy modal', { page, test })
      await ai('Click on the today date from the calendar', { page, test })
      await ai('Click on first available time from right side of the list', { page, test })
      await ai('Click the Next button', { page, test })
      await ai('Fill out the form with realistic values', { page, test })
      await page.getByText('Schedule Event').click()
      const element = await page.getByText('You are scheduled')
    expect(element).toBeDefined()
    })
  })