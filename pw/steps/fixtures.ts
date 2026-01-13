import { test as base, expect } from '@playwright/test';
import "./planet";
import PlanetPage from '../pages/planetPage';

type StarWarsFixture = {
    planetPage: PlanetPage;
};

export const test = base.extend<StarWarsFixture>({
    planetPage: async ({ page }, use) => {
        const planetPage = new PlanetPage(page);
        await use(planetPage);
    }
});

export { expect };