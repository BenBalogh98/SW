import { Page as BasePage, Locator } from '@playwright/test';
import NavigatorComponent from '../components/navigationComponent';
import { CardType } from '../interfaces/types';
import BreadCrumbComponent from '../components/breadcrumbComponent';

// Currently, this is the swpage, which happen to be the homepage.
export default class HomePage {
    private page: BasePage;
    public navigator: NavigatorComponent;
    public breadCrumbs: BreadCrumbComponent;

    constructor(page: BasePage) {
        this.page = page;
        this.navigator = new NavigatorComponent(page);
        this.breadCrumbs = new BreadCrumbComponent(page);
    }

    public async openCardPage(cardType: CardType) {
        await (await this.navigator.getLinkByName(cardType)).click();
    }

}
