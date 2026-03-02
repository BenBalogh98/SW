import { Locator, Page } from "@playwright/test";
import { CardType } from "../interfaces/cardInterfaces";

export default class NavigatorComponent {
    protected page: Page;
    public base: Locator;
    public linksParent: Locator;
    public links: Locator;

    constructor(page: Page) {
        this.page = page;
        this.base = page.locator(".navigation");
        this.linksParent = this.base.locator(".nav-links");
        this.links = this.linksParent.locator(".nav-link");

    }

    public async getLinkByName(linkName: CardType): Promise<Locator> {
        return this.links.filter({ hasText: linkName });
    }
}