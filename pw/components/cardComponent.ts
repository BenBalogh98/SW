import { Locator, Page } from "@playwright/test";
import DetailsContent from "./detailsContent";

export default class CardComponent {
    title: Locator;
    leaveButton: Locator;
    details: DetailsContent;

    constructor(page: Page) {
        this.title = page.locator(".SWCard .title");
        this.leaveButton = page.locator(".SWCard .SWCard-leaveButton");
        this.details = new DetailsContent(page);
    }
}