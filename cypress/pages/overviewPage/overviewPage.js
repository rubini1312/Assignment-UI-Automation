import { overviewLocators } from "./overviewPageLocators";

export class OverviewPage {

  verifyPaymentInfo() {
    cy.get(overviewLocators.paymentInfo).should('contain', 'SauceCard');
  }

  verifyShippingInfo() {
    cy.get(overviewLocators.shippingInfo).scrollIntoView().should('contain','Free Pony Express Delivery!');
  }

  verifyItemTotal(expectedTotal) {
    cy.get(overviewLocators.itemTotal).should('contain', `Item total: $${expectedTotal}`);
  }

  verifyTax(expectedTax) {
    cy.get(overviewLocators.tax).should('contain', `Tax: $${expectedTax}`);
  }

  verifyTotalAmount(expectedAmount) {
    cy.get(overviewLocators.total).should('contain', `Total: $${expectedAmount}`);
  }

  clickFinish() {
    cy.get(overviewLocators.finishButton).click();
  }

  verifyOrder() {
    cy.get(overviewLocators.checkoutComplete).should('have.text', 'Thank you for your order!');
  }
}

export default new OverviewPage();
