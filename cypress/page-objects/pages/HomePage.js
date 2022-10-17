import BasePage from "../BasePage";


export default class HomePage extends BasePage {
    static load(){
        cy.visit("/").viewport(1250, 720);
    }
}

