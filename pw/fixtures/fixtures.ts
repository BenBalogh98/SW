import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import PlanetPage from '../pages/planetPage';
import SWPage from '../pages/SWPage';

type StarWarsFixture = {
    planetPage: PlanetPage;
    SWPage: SWPage;
};

export const test = base.extend<StarWarsFixture>({
    planetPage: async ({ page }, use) => {
        const planetPage = new PlanetPage(page);
        await use(planetPage);
    },
    SWPage: async ({ page }, use) => {
        const SW = new SWPage(page);
        await use(SW);
    }
});

export { expect };