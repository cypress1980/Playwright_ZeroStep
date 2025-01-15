import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";
test.describe("SauceDemo", () => {
  test("can login and logout", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await ai("Enter username as standard_user", { page, test });
    await ai("Enter Password as secret_sauce", { page, test });
    await ai("Click on the login button", { page, test });
    await ai("Click in product drop down and sort product by price high to low", { page, test });
    const [priceOne, priceTwo] = await ai(["Get the plain number price of the first item without $","Get the plain number price of the second item without $"],{ page, test });
    console.log("First product price", priceOne);
    console.log("Second product price", priceTwo);
    await ai("Add the first 2 items you can to the cart", { page, test });
    await ai("Click on the cart button", { page, test });
    await ai("Click on the checkout button", { page, test });
    await ai("Fill out the form with realistic values", { page, test });
    await ai("Click on the continue button", { page, test });
    await page.waitForTimeout(5000);
    const [tax, total] = await ai(["Get the number against Tax: $","Get the number against Item total: $"],{ page, test });
    console.log("Get the value against field Tax", tax);
    console.log("Get the value against Item total ", total);
    const parsedPrice = parseFloat((parseFloat(priceOne) + parseFloat(priceTwo) + parseFloat(tax)).toFixed(2));
    console.log("Combine price", parsedPrice);
    const parsedTotal = parseFloat(parseFloat(total).toFixed(2)); //79.98
    console.log(`total=${parsedTotal}, computed=${parsedPrice}`);
    await ai("Click on the finish link", { page, test });
    await ai("Click on the Back Home button", { page, test });
    await ai("Click on Open Menu link", { page, test });
    await ai("Click on the link Logout", { page, test });
  });
});
