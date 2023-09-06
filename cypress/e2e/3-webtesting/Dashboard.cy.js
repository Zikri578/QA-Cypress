describe('Input Data Berhasil', () => {
    beforeEach(() => {
        // akses website katalon 
        cy.visit('/');
        cy.get('[id="btn-make-appointment"]').click();

        // direct ke halaman login
        cy.visit(Cypress.env('login_url'));

        // memanggil variabel yang ada di cypress > support > commands.js
        cy.login('John Doe', 'ThisIsNotAPassword');
        cy.get('h2').should('contain.text', 'Make Appointment');
    });

    it('Input Data Berhasil', () => {
        // memanggil variabel yang ada di cypress > support > commands.js
        cy.selectCombo().select('Seoul CURA Healthcare Center'); // Menggunakan perintah kustom
        cy.checkbox('[name="hospital_readmission"]');
        cy.radioButton('[id="radio_program_medicaid"]');
        cy.getDateInput().click(); // Buka datepicker
        cy.getDatePicker().contains('25').click(); // Pilih tanggal 25 dalam datepicker
        cy.comment().type('Pergi Berobat.');
        cy.getBookAppointmentButton().click();
    });
});