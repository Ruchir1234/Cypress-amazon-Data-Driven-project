import BasePage from "../BasePage"

export default class ProductsPage extends BasePage {
    
    static productName = '#productTitle'
    static addToCart = '#add-to-cart-button'
    static productPrice = '#corePrice_feature_div'
    static confirmAdded = '#NATC_SMART_WAGON_CONF_MSG_SUCCESS >span'
    static cartCount = '#nav-cart-count'
    static clickCart = '#nav-cart'
    static clickCheckout = '#sc-buy-box-ptc-button'
    static firstProduct = ':nth-child(1) > .s-widget-container > .s-card-container'


    static clickAddToCart() {
        cy.get(this.addToCart).click({force:true});
        cy.get(this.confirmAdded).should('contain.text','Added to Cart');
        cy.get(".a-price.sw-subtotal-amount > span").invoke('text')
    }

    static proceedToCheckout(){
        cy.get(this.clickCheckout).click({force:true});
    }

    static openCart(){
        cy.get(this.clickCart).click({force:true});
    }

    static checkItemsInBasket(count){

        cy.get(this.cartCount).should('contain.text',count);
    }

    static clickOnProduct() {
        cy.get(this.firstProduct).click('left',{force:true});
    }

    static invokeProductNameText() {
        cy.get(this.productName).invoke('text').as('expectedName');
    }

    static invokeProductPriceText() {
        cy.get(this.productPrice).invoke('text').as('expectedPrice');
    }
}