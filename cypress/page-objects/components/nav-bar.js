

export default class NavBar {
    static books = '[data-csa-c-content-id="nav_cs_books"]'
    static mobiles = '[data-csa-c-content-id="nav_cs_mobiles"]'
    static sportsItems = '[data-csa-c-content-id="nav_cs_sports"]'

    static clickBooks(){
        cy.get(this.books).click({force:true});
    }

    static clickMobiles(){
        cy.get(this.mobiles).click({force:true});
    }
    static clickSports(){
        cy.get(this.sportsItems).click({force:true});
    }
}