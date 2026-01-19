import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on the planet card page', async ({ page }) => {
    await page.goto(process.env.baseURL || "http://localhost:5173/SW");
    await page.click('text=Planets');
});

When('I click on the {string} planet card', async ({ page, planetPage }, planetName: string) => {
    await page.locator(`div.${planetName}`).click();
});

Then('I should see detailed information about {string}', async ({ planetPage }, planetName: string) => {
    const details = await planetPage.getPlanetDetails(planetName);
    expect(details).toBeTruthy();
});

When('I navigate back using the leave button', async ({ page }) => {
    await page.click('.SWCard-leave-button');
});

Then('I should be back on the planets list page', async ({ page }) => {
    const url = page.url();
    expect(url).toContain('/SW/planets');
});
