import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

// test("Drop down", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
//   );
//   await ai("Click on Country drop down", { page, test });
//   await ai("Select Country India from drop down", { page, test });
// });

// test("Date Picker", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
//   );
//   await ai("Open the calendar", { page, test });
//   await ai("Select today data", { page, test });
// });

test("Radio Button", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  //await ai("Select Radio button Female near text Click on button to get the selected value.", { page, test });
  await ai('Select checkbox "Option 1","Option 3" from Disabled Checkbox Demo', { page, test });
  //await ai("Select last 2 check box from Multiple Checkbox Demo", { page, test });
});
