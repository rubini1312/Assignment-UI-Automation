import { locators } from "./addToCartPageLocators";

export class AddToCartPage {
    
    addRandomItems(count = 3) {
        cy.get(locators.item).then((items) => {
          const itemIndexes = Cypress._.sampleSize([...Array(items.length).keys()], count);
          itemIndexes.forEach((i) => {
            cy.wrap(items[i]).find('button').click();
          });
        });
      }

    goToCart() {
        cy.get(locators.shoppingCartLink).click();
      }
}
export default new AddToCartPage();