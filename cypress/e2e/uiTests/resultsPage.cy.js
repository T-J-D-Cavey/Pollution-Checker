/// <reference types='cypress'/>

describe('Results page', () => {
    beforeEach(() => {
        cy.visit('/results')
    })

    it('confirms that back button appears', () => {
        cy.get('img[src="http://localhost:3000/static/media/backIcon.5ea92a2529a029fd0bf2d62d70dccdb4.svg"]')
    })
})