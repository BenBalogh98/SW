import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import PlanetPage from '../pages/planetPage';
import HomePage from '../pages/homePage';
import CardPage from '../pages/cardPage';

type StarWarsFixture = {
    planetPage: PlanetPage;
    homePage: HomePage;
    cardPage: CardPage;
};

export const test = base.extend<StarWarsFixture>({
    planetPage: async ({ page }, use) => {
        const planetPage = new PlanetPage(page);
        await use(planetPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    cardPage: async ({ page }, use) => {
        const cardPage = new CardPage(page);
        await use(cardPage);
    }
});

export { expect };