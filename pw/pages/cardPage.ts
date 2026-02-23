import { expect, Page as BasePage } from '@playwright/test';
import NavigationComponent from '../components/navigationComponent';
import CardComponent from '../components/cardComponent';

export default class CardPage {
    private page: BasePage;
    public navigator: NavigationComponent;
    public card: CardComponent;

    constructor(page: BasePage) {
        this.page = page;
        this.navigator = new NavigationComponent(page);
        this.card = new CardComponent(page);
    }

    public async verifyDetailsContent(expectedDisplayNames: string[]) {
        for (const displayName of expectedDisplayNames) {
            const rowClass = displayName.replace(/\s/g, "-").toLowerCase();
            const row = this.card.details.base.locator(`.SWCard-display-row.${rowClass}`);
            await expect(row, `Missing details row for: ${displayName}`).toBeVisible();
        }
    }
}