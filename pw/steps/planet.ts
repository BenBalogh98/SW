import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, expect } from '../fixtures/fixtures';
import CardPage from '../pages/cardPage';

const { Given, When, Then } = createBdd(test);

Given('I am on the planet card page', async ({ page, swPage }) => {
    await page.goto(process.env.baseURL || "http://localhost:5173/SW");
    await (await swPage.navigator.getLinkByName("Planets")).click();
});

When('I click on the {string} planet card', async ({ planetPage }, planetName: string) => {
    await (await planetPage.getPlanetCardByName(planetName)).click();
});

Then('I should see detailed information of {string}', async ({ cardPage }, entityType: string, table: DataTable) => {
    const expectedDisplayNames = table.raw().map(([displayName]) => displayName).filter(Boolean);
    await cardPage.verifyDetailsContent(expectedDisplayNames);
});

When('I navigate back using the leave button', async ({ cardPage }) => {
    await cardPage.card.leaveButton.click();
});

Then('I should be back on the planets list page', async ({ planetPage }) => {
    const url = planetPage.page.url();
    expect(url).toContain('/SW/planets');
});

// Not yet done, need to finish
Then('I should see a list of films related to {string}', async ({ page, planetPage, cardPage }, planetName: string) => {
    const filmLinks = await cardPage.card.details.getLinksByProperty("Films");
    const linkCount = await filmLinks.count();
    expect(linkCount).toBeGreaterThan(0);
});

When('I click on the {string} film link in the details', async ({ cardPage }, filmName: string) => {
    const filmLinks = await cardPage.card.details.getLinksByProperty("Films");
    filmLinks.filter({ hasText: filmName }).first().click();
});