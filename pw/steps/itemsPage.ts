import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, expect } from '../fixtures/fixtures';
import CardPage from '../pages/cardPage';
import { CardType } from '../interfaces/cardInterfaces';

const { Given, When, Then } = createBdd(test);

// Fix these kind of steps. The navigator, other elemets and actions should not be exposed in the stepDefinition file. Make a function for these and call those functions.
Given('I am on the {string} card page', async ({ page, homePage }, cardType: CardType) => {
    await page.goto(process.env.baseURL || "http://localhost:5173/SW");
    await homePage.openCardPage(cardType);
});

When('I click on the {string} planet card', async ({ planetPage }, planetName: string) => {
    await (await planetPage.getPlanetCardByName(planetName)).click();
});

Then('I should be back on the planets list page', async ({ planetPage }) => {
    planetPage.verifyPlanetListPage();
});