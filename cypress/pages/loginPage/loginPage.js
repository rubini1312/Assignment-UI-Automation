import { locators } from "./loginPageLocators";

export class Loginpage {
  
    validLogin(username, password) {
      cy.get(locators.userName).type(username);
      cy.get(locators.password).type(password);
      cy.get(locators.logInbutton).click();
      }
}

export default new Loginpage();