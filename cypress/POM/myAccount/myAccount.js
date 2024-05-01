import { myAccountPageLocators } from "./myAccountLocators";

class MyAccount {
    elements = {
        gettingOffers: () => cy.get(myAccountPageLocators.gettingOffersButton),

        logOut: () => cy.get(myAccountPageLocators.logOutButton),

        toHomePage: () => cy.get(myAccountPageLocators.homePageN),

        alertMessageN: () => cy.get(myAccountPageLocators.alertMessage),

        logOutElq: () => cy.get(myAccountPageLocators.elqLogOutButton)
    }
    clickOffersButton() {
        this.elements.gettingOffers().click();
    }

    clickLogOut() {
        this.elements.logOut().click();
    }

    clickElq() {
        this.elements.logOutElq().click();
    }

    clickHomePage() {
       this.elements.toHomePage().click();
    }

    isAlertDisplayed() {
        return this.elements.alertMessageN().should('be.visible');
    }

    
}
export const myAccount = new MyAccount();
