import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test.describe("SauceDemo", () => {
  test("can login and logout", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await ai("Enter username as standard_user", { page, test });
    await ai("Enter Password as secret_sauce", { page, test });
    await ai("Click on the login button", { page, test });
    await ai("Sort by price high to low", { page, test });
    const [priceOne, priceTwo] = await ai(
      [
        "Get the plain number price of the first item without $",
        "Get the plain number price of the second item without $",
      ],
      { page, test }
    );
    console.log("First product price", priceOne);
    console.log("Second product price", priceTwo);
    await ai("Add the first 2 items you can to the cart", { page, test });
    await ai("Click on the cart button", { page, test });
    await ai("Click on the checkout button", { page, test });
    await ai("Fill out the form with realistic values", { page, test });
    const [tax, total] = await ai(
      [
        "Get the plain number cost of tax without $",
        "Get the plain number total cost without $",
      ],
      { page, test }
    );

    const parsedPrice = parseFloat(
      (parseFloat(priceOne) + parseFloat(priceTwo) + parseFloat(tax)).toFixed(2)
    );

    console.log("Combine price", parsedPrice);

    const parsedTotal = parseFloat(parseFloat(total).toFixed(2)); //43.18

    console.log(`total=${parsedTotal}, computed=${parsedPrice}`);
    expect(parsedPrice).not.toBeNaN();
    expect(parsedPrice).toEqual(parsedTotal);

    await ai("Click on the finish link", { page, test });
    await ai("Click on the back home button", { page, test });
    await ai("Click the menu button", { page, test });
    await ai("Click on the link Logout", { page, test });

    //const noRecordsFound = await ai('Confirm there are no records found')
    //expect(noRecordsFound).toEqual(true)
  });
});
