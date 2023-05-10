/// <reference types='cypress'/>

describe('Results page', () => {
    before(() => {
        // visits landing page:
        cy.visit('/')
        // and clicks on the button to get to results page:
        // cy.get('button').find('[alt="Earth in fumes"]').click;
        // cy.wait(2);

    })

    it('confirms that back button appears', () => {
        cy.wait(2000)
        // cy.get('button').find('.backButton');
        cy.get('.mainButton').find('button').click
        // cy.visit('/results');
        // cy.url().should('include', '/results');
    })
})