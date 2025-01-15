import { test, expect } from "@playwright/test";

const { describe, step } = test;

describe("Given a user has logged in and is viewing the employee list. When the Benefits link for user Ramesh is clicked. Then the benefit details for Ramesh are displayed", () => {
  test("Viewing Benefit Details for Employee Ramesh", async ({ page }) => {
    await step(
      'Given the user navigates to the URL "http://eaapp.somee.com/Account/Login"',
      async () => {
        await step("Navigate to login page", async () => {
          await page.goto("http://eaapp.somee.com/Account/Login");
        });
      },
    );

    await step('And the user enters "admin" as the UserName', async () => {
      await step('Fill the UserName field with "admin"', async () => {
        await page.fill('input[name="UserName"]', "admin");
      });
    });

    await step('And the user enters "password" as the Password', async () => {
      await step('Fill the Password field with "password"', async () => {
        await page.fill('input[name="Password"]', "password");
      });
    });

    await step("And clicks on the login button", async () => {
      await step("Click the login button", async () => {
        await page.click("#loginIn");
      });
    });

    await step("And views the Employee List", async () => {
      await step("Navigate to the Employee List page", async () => {
        await page.click('a[href="/Employee"]');
      });
    });

    await step(
      'When the user clicks the Benefits link for "Ramesh" in the table',
      async () => {
        await step("Click the Benefits link for Ramesh", async () => {
          await page
            .locator("table")
            .getByRole("row", { name: "Ramesh" })
            .getByRole("link", { name: "Benefits" })
            .click();
        });
      },
    );

    await step(
      'Then the benefit details for "Ramesh" are displayed',
      async () => {
        await step(
          "Verify the page displays benefit details for Ramesh",
          async () => {
            await expect(page.locator("h2")).toHaveText(
              "Benefits Listed for Ramesh",
            );
          },
        );
      },
    );

    await step('And verify the Basic Benefits include "Hospital"', async () => {
      await step('Verify Basic Benefits include "Hospital"', async () => {
        await expect(page.getByRole("table").nth(0)).toContainText("Hospital");
      });
    });

    await step('And verify the Additional Benefits include "Car"', async () => {
      await step('Verify Additional Benefits include "Car"', async () => {
        await expect(page.getByRole("table").nth(2)).toContainText("Car");
      });
    });
  });
});
