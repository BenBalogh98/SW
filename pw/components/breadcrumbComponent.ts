import { expect, Locator, Page } from "@playwright/test";
import { BreadcrumbType } from "../interfaces/types";

export default class BreadCrumbComponent {
    private page: Page;
    public breadcrumbLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.breadcrumbLinks = page.locator('ol li.MuiBreadcrumbs-li');
    }

    public async clickLinkByName(linkName: BreadcrumbType) {
        return await this.breadcrumbLinks.filter({ hasText: linkName }).click();
    }

    public async verifyBreadcrumbLinkActive(linkName: BreadcrumbType) {
        debugger;
        const activeLink = this.breadcrumbLinks.filter({ hasText: linkName }).locator("p");
        debugger;
        await expect(activeLink).toContainClass("active");
    }

}