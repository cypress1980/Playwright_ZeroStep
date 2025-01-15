import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";
test.describe("Green Kart Application For Testing Differemt Scenario", () => {
  test("Green Kart Application - With ZeroStep Library", async ({ page }) => {
    await page.goto("http://www.rahulshettyacademy.com/seleniumPractise/#/offers");
    const diffrence_price = await ai("What is value difference between Price of Wheat and Tomato  ", { page, test });
    console.log('Price Difference Using ZeroStep Library:', diffrence_price);
    expect(diffrence_price).toEqual("30");
  });
  test("Green Kart Application -Traditional Approch ", async ({ page }) => {
    await page.goto('http://www.rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.waitForSelector('table');
    const wheatPrice = await page.locator('//tr[contains(., "Wheat")]/td[2]').textContent()
      .then(text => parseInt(text));
    const tomatoPrice = await page.locator('//tr[contains(., "Tomato")]/td[2]').textContent()
      .then(text => parseInt(text));
    const priceDifference = Math.abs(wheatPrice - tomatoPrice);
    console.log('Price Difference Using Traditonal approch', priceDifference);
    expect(priceDifference).toBe(30);
  });
});
