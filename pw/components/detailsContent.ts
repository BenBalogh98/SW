import { expect, Locator, Page } from "@playwright/test";

export default class DetailsContent {
    protected page: Page;
    public readonly base: Locator;
    public readonly detailsRow: Locator;
    public readonly itemLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.base = page.locator(".SWCard-details-container");
        this.detailsRow = this.base.locator(".SWCard-display-row");
        this.itemLink = this.detailsRow.locator(".SWCard-value-container.item-link");
    }

    public async getLinksByProperty(displayName: string): Promise<Locator> {
        await expect(this.detailsRow.filter({ hasText: displayName })).toBeVisible();
        return this.base.locator(`.SWCard-display-row.${displayName.replace(/\s/g, "-").toLowerCase()} .SWCard-value-container.item-link`);
    }
}