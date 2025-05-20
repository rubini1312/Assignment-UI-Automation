import { AddToCartPage } from "../../pages/addToCartPage/addToCartPage";
import { Loginpage } from "../../pages/loginPage/loginPage";

const login = new Loginpage();
const addcart = new AddToCartPage();

describe('Checkout scenario', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Enter shipping details test', () => {
    login.validLogin("standard_user","secret_sauce");
    cy.url().should('include', '/inventory.html');
    addcart.addRandomItems();
    addcart.goToCart();
    
  });

});
  