import { homePageLocators } from "../homePage/homePageLocators";

class HomePage {
    elements = {
        signIn: () => cy.get(homePageLocators.signInButton) 
    }

    navigateToLoginPage() {
        this.elements.signIn().click();
    }
    getCurrentURL() {
        return cy.url();
    }
}

export const homePage = new HomePage();
