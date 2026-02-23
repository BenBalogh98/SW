import { Page as BasePage } from '@playwright/test';
import NavigatorComponent from '../components/navigationComponent';

export default class SWPage {
    private page: BasePage;
    public navigator: NavigatorComponent;


    constructor(page: BasePage) {
        this.page = page;
        this.navigator = new NavigatorComponent(page);
    }
}
