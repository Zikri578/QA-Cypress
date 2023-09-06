// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a login command --
Cypress.Commands.add('login', (username, password) => {
    // mengambil element html menggunakan id, Cypress.env berada di cypress.config.js
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[id="btn-login"]').click();
});

// -- This is a dropDown command --
Cypress.Commands.add('selectCombo', () => {
    cy.get('select#combo_facility');
});

// -- This is a checkbox command --
Cypress.Commands.add('checkbox', (locator) => {
    cy.get(locator)
        .should('be.visible')
        .click()
});

// -- This is a radiobutton command --
Cypress.Commands.add('radioButton', (locator) => {
    cy.get(locator)
        .should('be.visible')
        .click()
});

// -- This is a date picker command --
Cypress.Commands.add('getDateInput', () => {
    return cy.get('input#txt_visit_date');
});
Cypress.Commands.add('getDatePicker', () => {
    return cy.get('table.table-condensed');
});

// -- This is a comment command --
Cypress.Commands.add('comment', () => {
    cy.get('textarea#txt_comment');
});

// -- This is a button command --
Cypress.Commands.add('getBookAppointmentButton', () => {
    return cy.get('button#btn-book-appointment');
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })