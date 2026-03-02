import { Page as BasePage } from '@playwright/test';
import NavigatorComponent from '../components/navigationComponent';
import { CardType } from '../interfaces/cardInterfaces';

// Currently, this is the swpage, which happen to be the homepage.
export default class HomePage {
    private page: BasePage;
    public navigator: NavigatorComponent;

    constructor(page: BasePage) {
        this.page = page;
        this.navigator = new NavigatorComponent(page);
    }

    public async openCardPage(cardType: CardType) {
        await (await this.navigator.getLinkByName(cardType)).click();
    }

}
