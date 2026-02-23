import { Locator, Page } from "@playwright/test";

export default class SearchBarComponent {
    private page: Page;
    public searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator(".search-container .search-input");
    }
}