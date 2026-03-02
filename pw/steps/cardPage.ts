import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, expect } from '../fixtures/fixtures';
import CardPage from '../pages/cardPage';
import { CardType } from '../interfaces/cardInterfaces';

const { Given, When, Then } = createBdd(test);

Then('I should see detailed information of {string}', async ({ cardPage }, entityType: CardType, table: DataTable) => {
    const expectedDisplayNames = table.raw().map(([displayName]) => displayName).filter(Boolean);
    await cardPage.verifyDetailsContent(expectedDisplayNames);
});

When('I navigate back using the leave button', async ({ cardPage }) => {
    await cardPage.card.leaveButton.click();
});

Then('I should see a list of films related to {string}', async ({ cardPage }, planetName: string) => {
    // I need to improve the verification here.
    cardPage.verifyDetailsContent(["Films"]);
});

When('I click on the {string} film link in the details', async ({ cardPage }, filmName: string) => {
    const filmLinks = await cardPage.card.details.getLinksByProperty("Films");
    filmLinks.filter({ hasText: filmName }).first().click();
});