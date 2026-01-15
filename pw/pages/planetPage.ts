import { Page as BasePage } from '@playwright/test';

export default class Card {
    private page: BasePage;
    private dDetailsContainer: string = ".SWCard-details-container";

    constructor(page: BasePage) {
        this.page = page;
    }

    async getPlanetDetails(planetName: string): Promise<string | null> {
        const detailsLocator = this.page.locator(this.dDetailsContainer);
        return detailsLocator.textContent();
    }
}
