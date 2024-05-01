/// <reference types="cypress" />

import { homePage } from "../POM/homePage/homePage";
import { loginPage } from "../POM/loginPage/loginPage";
import { myAccount } from "../POM/myAccount/myAccount";

describe('My Accounts Test', () => {

    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    describe('My Account Tests', () => {
    // Test #4: Interaction between all created POMs
    it('should log out', () => {
        homePage.navigateToLoginPage();
        loginPage.setUsername(Cypress.env('login'));
        loginPage.setPassword(Cypress.env('password'));
        loginPage.clickLoginButton();
        myAccount.clickLogOut();
        loginPage.getTextFieldTitle().should('contain', 'Մուտք');
    });

    // Test #5: Interaction between all created POMs
    it('should navigate to home page', () => {
        homePage.navigateToLoginPage();
        loginPage.setUsername(Cypress.env('login'));
        loginPage.setPassword(Cypress.env('password'));
        loginPage.clickLoginButton();
        myAccount.clickHomePage();
        homePage.getCurrentURL().should('eq', 'https://istyle.am/');
    });

    // Test #6: Interaction between all created POMs
    it('should log out via ELQ Button', () => {
        homePage.navigateToLoginPage();
        loginPage.setUsername(Cypress.env('login'));
        loginPage.setPassword(Cypress.env('password'));
        loginPage.clickLoginButton();
        myAccount.clickElq();
        homePage.getCurrentURL().should('eq', 'https://istyle.am/');
    });
})
});
