import { Loginpage } from "../../pages/loginPage/loginPage";

const login = new Loginpage();

describe('Login test scenario', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Valid user login', () => {
    login.validLogin("standard_user","secret_sauce");
    // Assert user is redirected to the inventory page
    cy.url().should('include', '/inventory.html');
    // Assert that the products page is loaded by checking for product title
    cy.get('.title').should('contain.text', 'Products');
    // Assert that product list is visible
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

});
