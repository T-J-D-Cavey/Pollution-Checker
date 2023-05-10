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
            
    // Gets all elements by class name:
        cy.get('.buttonContainer');
        })

    it('confirm button appears', () => {
    // Gets all elements by class name:
        cy.get('.mainButton');
    // Gets all elements by tag name: 
        cy.get('button')
    })

    it('confirm footer appears', () => {
    // Gets all elements by specific attributes:
        cy.get("[target='_blank']");
    })
})