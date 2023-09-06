describe('Example Website Katalon', () => {
    // supaya mengunjungi websitenya sekali aja di it maka menggunakan before each
    beforeEach(() => {
        // akses website katalon 
        cy.visit('/');
        cy.get('[id="btn-make-appointment"]').click();

        // memanggil variabel yang ada di cypress.config.js dan direct ke halaman login 
        cy.visit(Cypress.env('login_url'));
    });

    it('Login Success - Valid Username And Password', () => {
        // mengambil element html menggunakan id, Cypress.env berada di cypress.config.js
        cy.get('[name="username"]').type(Cypress.env('nikname'));
        cy.get('[name="password"]').type(Cypress.env('katasandi'));
        cy.get('[id="btn-login"]').click();
        cy.get('h2').should('contain.text', 'Make Appointment');
    });

    it('Login Failed - Wrong Password', () => {
        // mengambil element html menggunakan id, env berada di cypress.config.js
        cy.get('[name="username"]').type(Cypress.env('nikname'));
        cy.get('[name="password"]').type(Cypress.env('katasandiSalah'));
        cy.get('[id="btn-login"]').click();
    });

    it('Login Failed - Wrong Username', () => {
        // mengambil element html menggunakan id, env berada di cypress.config.js
        cy.get('[name="username"]').type(Cypress.env('nikname_salah'));
        cy.get('[name="password"]').type(Cypress.env('katasandi'));
        cy.get('[id="btn-login"]').click();
    });

    it('Login Failed - Empty Username', () => {
        // mengambil element html menggunakan id, env berada di cypress.config.js
        cy.get('[name="password"]').type(Cypress.env('katasandi'));
        cy.get('[id="btn-login"]').click();
    });

    it('Login Failed - Empty Password', () => {
        // mengambil element html menggunakan id, env berada di cypress.config.js
        cy.get('[name="username"]').type(Cypress.env('nikname'));
        cy.get('[id="btn-login"]').click();
    });

    it.skip('Login Failed - Empty Username and Password', () => {
        // mengambil element html menggunakan id
        cy.get('[id="btn-login"]').click();
    });
})