import { locators } from "./checkoutPageLocators";

export class Checkoutpage {

  clickCheckout() {
    cy.get(locators.checkOut).click();
  }

  enterShippingDetails() {
    const random = Math.floor(Math.random() * 1000);
    cy.get(locators.firstName).type(`First${random}`);
    cy.get(locators.lastName).type(`Last${random}`);
    cy.get(locators.postalCode).type(`${10000 + random}`);
    cy.get(locators.continue).click();
  }
}
export default new Checkoutpage();
