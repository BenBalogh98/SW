import { Page as BasePage } from '@playwright/test';
import NavigationComponent from '../components/navigationComponent';
import CardPage from './cardPage';
import SearchBarComponent from '../components/searchBarComponent';

export default class PlanetPage {
    public page: BasePage;
    public navigator: NavigationComponent;
    public cards: CardPage;
    public searchBar: SearchBarComponent;


    constructor(page: BasePage) {
        this.page = page;
        this.navigator = new NavigationComponent(page);
        this.cards = new CardPage(page);
        this.searchBar = new SearchBarComponent(page);
    }

    public async getPlanetCardByName(planetName: string) {
        return this.page.locator(`.SWCard .title`).filter({ hasText: planetName });
    }
}
