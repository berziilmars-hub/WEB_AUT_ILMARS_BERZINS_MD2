import LoginPage from '../pages/LoginPage';
import AppointmentPage from '../pages/AppointmentPage';

const loginPage = new LoginPage();
const appointmentPage = new AppointmentPage();

describe('CURA Healthcare', () => {
  it('Scenario 1 - Make an Appointment', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.login('John Doe', 'ThisIsNotAPassword');

    appointmentPage.selectFacility('Seoul CURA Healthcare Center');
    appointmentPage.checkReadmission();
    appointmentPage.selectMedicaid();
    appointmentPage.setDate('01/06/2026');
    appointmentPage.setComment('CURA Healthcare Service');
    appointmentPage.clickBookAppointment();

    appointmentPage.validateFacility('Seoul CURA Healthcare Center');
    appointmentPage.validateReadmission();
    appointmentPage.validateProgram();
    appointmentPage.validateDate('01/06/2026');
    appointmentPage.validateComment('CURA Healthcare Service');
  });

  it('Scenario 2 - Appointment history empty', () => {
    loginPage.visit();
    loginPage.clickMakeAppointment();
    loginPage.login('John Doe', 'ThisIsNotAPassword');

    cy.get('#menu-toggle').click();
    cy.get('#sidebar-wrapper').should('have.class', 'active');
    cy.contains('History').click();
    cy.contains('No appointment.').should('be.visible');
  });
});