import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../SWFrontend/src/App';
import Logic from '../../../SWFrontend/src/logic';
import { mockPeople, mockFilms, mockPlanets } from '../testData/DTOMocks';

describe("App component", () => {
    it('should use stubbed getData return value', () => {
        cy.stub(Logic.prototype, 'loadAllData').resolves([mockPeople, mockFilms, mockPlanets]);

        const TestRouter = ({ children }: { children: React.ReactNode }) => (
            <MemoryRouter initialEntries={['/SW/planets']}>{children}</MemoryRouter>
        );

        mount(<App Router={TestRouter} />);

        cy.contains('Tatooine').should('exist');
    });
});
