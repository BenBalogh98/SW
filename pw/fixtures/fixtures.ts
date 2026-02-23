import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import PlanetPage from '../pages/planetPage';
import SWPage from '../pages/SWPage';
import CardPage from '../pages/cardPage';

type StarWarsFixture = {
    planetPage: PlanetPage;
    swPage: SWPage;
    cardPage: CardPage;
};

export const test = base.extend<StarWarsFixture>({
    planetPage: async ({ page }, use) => {
        const planetPage = new PlanetPage(page);
        await use(planetPage);
    },
    swPage: async ({ page }, use) => {
        const SW = new SWPage(page);
        await use(SW);
    },
    cardPage: async ({ page }, use) => {
        const cardPage = new CardPage(page);
        await use(cardPage);
    }
});

export { expect };