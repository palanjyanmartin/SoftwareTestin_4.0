/// <reference types="cypress" />

import { loginPage } from "../POM/loginPage/loginPage";
import { homePage } from "../POM/homePage/homePage";
import { myAccount } from "../POM/myAccount/myAccount";
import { loginPageAssertionMessages } from "../POM/loginPage/loginPageAssertionMessages";

describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    describe('Login Test', () => {
        // Test #1: Successful login
        it('should login successfully', () => {
            homePage.navigateToLoginPage();
            loginPage.setUsername(Cypress.env('login'));
            loginPage.setPassword(Cypress.env('password'));
            loginPage.clickLoginButton();
            myAccount.elements.gettingOffers().should('be.visible');
        });
    
        // Test #2: Invalid login with invalid username
        it('should display alert for invalid username', () => {
            homePage.navigateToLoginPage();
            loginPage.setUsername('1@@@dfjdfifji$$$$...');
            loginPage.setPassword(Cypress.env('password'));
            loginPage.clickLoginButton();
            loginPage.getAlert().then(alertText => {
                expect(alertText).to.contain(loginPageAssertionMessages.alertMessageText);
            });
        });
    
        // Test #3: Invalid login with invalid password
        // I am failing this test on purpose just to check the functionality :)
        it('should display alert for invalid password', () => {
            homePage.navigateToLoginPage();
            loginPage.setUsername(Cypress.env('login'));
            loginPage.setPassword("someinvalidpassword");
            loginPage.clickLoginButton();
            loginPage.getAlert().then(alertText => {
                expect(alertText).to.contain(loginPageAssertionMessages.alertMessagePasswordText);
        });
    });
})
})
