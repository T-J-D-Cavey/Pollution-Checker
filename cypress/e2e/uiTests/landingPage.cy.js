/// <reference types="cypress" />
// above tells cypress that this is a test file.

describe('Landing page', () => {
    // Visits given URL apended to base URL before each test:
    beforeEach(() => {
        cy.visit('/')
    })
    it('confirm H1 appears', () => {
    // Gets all elements by tag name:
        cy.get('h1');

    // Selects the only element that Contains the content:
        cy.get('h1').contains('How clean is the air today?');

    // Selects the only element of that tag that Contains the content
        cy.contains('h1', 'How clean is the air today?');

    // Gets all elements by class name:
        cy.get('.buttonContainer');
    // Finds the only element that's a descendant of an element with the given className:
        cy.get('.buttonContainer').find('h1');
        })

    it('confirm button appears', () => {
    // Gets all elements by class name:
        cy.get('.mainButton');
    // Gets all elements by tag name: 
        cy.get('button');
    // Gets a button tag that by alt tag:
        cy.get('[alt="Earth in fumes"]');
    // Finds the only element that's a descendant of an element with the given className (chained):
        cy.get('.mainButton').find('button').find('img');
    })

    it('confirm footer appears', () => {
    // Gets all elements by specific attributes:
        cy.get("[target='_blank']");
    // Gets the element with that attribute, removes the 'open in new tab' setting and clicks it:
        // cy.get("[target='_blank']").invoke('removeAttr', 'target').click()
        
    // Selects the one element / descendant based on it's content, and tag name:
        cy.contains('footer', 'See the');
        cy.contains('footer', "creator's Github page here")
    })
})