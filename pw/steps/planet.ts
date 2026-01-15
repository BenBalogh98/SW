import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on the planet card page', async ({ page }) => {
    await page.goto(process.env.baseURL || "http://localhost:5173/SW/planets");
});

When('I click on the {string} planet card', async ({ page, planetPage }, planetName: string) => {
    await page.locator(`div.${planetName}`).click();
});

Then('I should see detailed information about {string}', async ({ planetPage }, planetName: string) => {
    const details = await planetPage.getPlanetDetails(planetName);
    expect(details).toBeTruthy();
});
