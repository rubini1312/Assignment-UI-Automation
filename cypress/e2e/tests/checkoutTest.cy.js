import { Checkoutpage } from "../../pages/checkoutPage/checkoutPage";
import { Loginpage } from "../../pages/loginPage/loginPage";
import { AddToCartPage } from "../../pages/addToCartPage/addToCartPage";

const login = new Loginpage();
const checkout = new Checkoutpage();
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
    checkout.clickCheckout();
    checkout.enterShippingDetails();
    
  });

});
  