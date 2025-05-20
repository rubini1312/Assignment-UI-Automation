import { OverviewPage } from '../../pages/overviewPage/overviewPage';
import { Checkoutpage } from "../../pages/checkoutPage/checkoutPage";
import { Loginpage } from "../../pages/loginPage/loginPage";
import { AddToCartPage } from "../../pages/addToCartPage/addToCartPage";

const login = new Loginpage();
const checkout = new Checkoutpage();
const addcart = new AddToCartPage();
const overviewPage = new OverviewPage();


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
      overviewPage.verifyPaymentInfo();
      overviewPage.verifyShippingInfo();
      //Can not verify Tax since it is changing dynamically for random items selection
      //overviewPage.verifyItemTotal('59.97'); // Adjust based on item price x quantity
      //overviewPage.verifyTax('4.80');         // Adjust based on your logic
      //overviewPage.verifyTotalAmount('64.77'); // Item Total + Tax
      overviewPage.clickFinish();
      overviewPage.verifyOrder();
    });
  
  });
