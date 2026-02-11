import { AppRoutes } from '../../../SWFrontend/src/AppRoutes';
import Logic from '../../../SWFrontend/src/logic';
import { mount } from 'cypress/react';
import { Data } from '../../../SWFrontend/src/interfaces/appState';
import { IFilm, IPeople, IPlanet } from '../../../SWFrontend/src/interfaces/SWApiResponse';
import { MemoryRouter } from 'react-router-dom';
import Planet from '../../../SWFrontend/src/items/planet';
import Film from '../../../SWFrontend/src/items/film';
import People from '../../../SWFrontend/src/items/resident';
import { mockPeople, mockFilms, mockPlanets } from '../testData/DTOMocks';

describe('AppRoutes Component', () => {
    it('should render navigation buttons', () => {
        const planets: Planet[] = [new Planet(mockPlanets[0])];
        const films: Film[] = [new Film(mockFilms[0])];
        const residents: People[] = [new People(mockPeople[0])];

        mount(
            <MemoryRouter initialEntries={["/SW"]}>
                <AppRoutes planets={planets} films={films} residents={residents} onSearch={() => { }} />
            </MemoryRouter>
        );

        cy.get('nav a').contains('Planets');
        cy.get('nav a').contains('Films');
        cy.get('nav a').contains('Residents');
    })
})