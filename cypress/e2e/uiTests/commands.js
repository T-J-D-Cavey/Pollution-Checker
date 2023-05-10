// An example of a commands to be uesd in multiple Cypress tests:

Cypress.Commands.add("getButtonWithClass", (classParam) => {
    cy.get(`button.${classParam}`)
})