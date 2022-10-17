import BasePage from "../BasePage"

export default class ProductDetailsPage extends BasePage {
    
    static productName = '#productTitle'
    static addToCart = '#add-to-cart-button'
    static productPrice = '#corePrice_feature_div'

    static clickAddToCart() {
        cy.get(this.addToCart).click({force:true});
    }

    static invokeProductNameText() {
        cy.get(this.productName).invoke('text').as('expectedName');
    }

    static invokeProductPriceText() {
        cy.get(this.productPrice).invoke('text').as('expectedPrice');
    }
}