import { Page as BasePage } from '@playwright/test';

export default class SWPage {
    private page: BasePage;

    constructor(page: BasePage) {
        this.page = page;
    }
}
