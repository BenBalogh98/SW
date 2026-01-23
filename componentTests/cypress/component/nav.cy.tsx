import { mount } from "cypress/react";
import Navigation from "../../../SWFrontend/src/components/Navigation";

describe('Navigation Component', () => {
    beforeEach(() => {
        mount(<Navigation showSearch={true} onSearch={(term) => console.log(term)} searchPlaceholder="Test Search..." />);
    });
    it('should render navigation links', () => {
        cy.get('.nav-link').should('have.length', 3);
        cy.get('.nav-link').eq(0).should('contain.text', 'Planets');
        cy.get('.nav-link').eq(1).should('contain.text', 'Films');
        cy.get('.nav-link').eq(2).should('contain.text', 'Residents');
    });

    it('should render search input when showSearch is true', () => {
        cy.get('.search-input').should('exist');
        cy.get('.search-input').should('have.attr', 'placeholder', 'Test Search...');
    });
    it('should call onSearch when typing in the search input', () => {
        const spy = cy.spy().as('searchSpy');
        mount(<Navigation showSearch={true} onSearch={spy} searchPlaceholder="Test Search..." />);
        cy.get('.search-input').type('test');
        cy.get('@searchSpy').should('have.been.called');
    });
});