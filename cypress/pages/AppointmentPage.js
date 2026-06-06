class AppointmentPage {
  selectFacility(facility) {
    cy.get('#combo_facility').select(facility);
  }

  checkReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }

  selectMedicaid() {
    cy.get('#radio_program_medicaid').check();
  }

  setDate(date) {
    cy.get('#txt_visit_date').type(date);
  }

  setComment(comment) {
    cy.get('#txt_comment').click({force: true}).type(comment, {force: true});
  }

  clickBookAppointment() {
    cy.get('#btn-book-appointment').click();
  }

  validateFacility(facility) {
    cy.get('#facility').should('contain.text', facility);
  }

  validateReadmission() {
    cy.get('#hospital_readmission').should('contain.text', 'Yes');
  }

  validateProgram() {
    cy.get('#program').should('contain.text', 'Medicaid');
  }

  validateDate(date) {
    cy.get('#visit_date').should('contain.text', date);
  }

  validateComment(comment) {
    cy.get('#comment').should('contain.text', comment);
  }
}

export default AppointmentPage;