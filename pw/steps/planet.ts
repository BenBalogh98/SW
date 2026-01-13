import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


Given('I am on the planet card page', async ({ page }) => {
    await page.goto(process.env.baseURL || "http://localhost:5173/SW/planets");
});

When('I click on the {string} planet card', async (planetName: string, { planetPage, page }) => {
    await page.locator(`div.${planetName}`).click();
});

Then('I should see detailed information about {string}', async (planetName: string, { planetPage }) => {
    /*const details = await planetPage.getPlanetDetails(planetName);
    expect(details).toBeTruthy();*/
});
