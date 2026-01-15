import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import Card from '../pages/planetPage';

type StarWarsFixture = {
    planetPage: Card;
};

export const test = base.extend<StarWarsFixture>({
    planetPage: async ({ page }, use) => {
        const planetPage = new Card(page);
        await use(planetPage);
    }
});

export { expect };