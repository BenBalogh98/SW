import { Page as BasePage } from '@playwright/test';

export default class PlanetPage {
    private page: BasePage;

    constructor(page: BasePage) {
        this.page = page;
    }
    // Page object for the planet details page
}
