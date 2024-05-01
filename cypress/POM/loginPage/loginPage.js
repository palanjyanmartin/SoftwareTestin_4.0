import { loginPageLocators } from "./loginPageLocators";
import { loginPageAssertionMessages } from "./loginPageAssertionMessages";

class LoginPage {
    elements = {
        usernameInput: () => cy.get(loginPageLocators.usernameInput),

        password: () => cy.get(loginPageLocators.passwordInput),

        signInButton: () => cy.get(loginPageLocators.signInButton),

        alertMessage: () => cy.get(loginPageLocators.alertMessageS),


        textFieldHeading: () => cy.get(loginPageLocators.textFieldHeading),

        assertionMessage: () => cy.get(loginPageAssertionMessages.alertMessageText),
        
        assertionMessagePassword: () => cy.get(loginPageAssertionMessages.alertMessagePasswordText)
    }

    setUsername(username) {
        this.elements.usernameInput().type(username); 
    }

    setPassword(password) {
        this.elements.password().type(password); 
    }

    clickLoginButton() {
        this.elements.signInButton().click();
    }

    getAlert() {
        return this.elements.alertMessage().invoke('text'); 
    }
    
    

    getTextFieldTitle() {
        return this.elements.textFieldHeading().invoke('text'); 
    }
}

export const loginPage = new LoginPage();
