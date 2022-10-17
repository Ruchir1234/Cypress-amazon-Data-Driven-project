import { concat } from "lodash";

export default class MobileCategory {
    static seeAllResults = ".a-link-normal"
    static mobileLength = ".sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal"
    static pagestrip = ".s-pagination-strip > .s-pagination-item"


    static selectAllResults(){
        cy.get(this.seeAllResults).contains('See all results').click({force:true});
    }

    static checkMobilePageLoaded(){
        cy.get(this.mobileLength).should('have.length',24);
    }
    
    static clickNextPage(key){
        cy.get(this.pagestrip).contains(key).click({force:true});
    }

    static checkAllMobileContents(mobiles){
            cy.get('.sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal').each((el,index,list) =>{
                let link = el.attr('href');
                cy.visit(link);
                let key = el.text().replaceAll(' ', '')
                let nae =mobiles[key]
                let q = JSON.stringify(nae)
                
                if (q !== undefined){
                    let details = JSON.parse(q)
                    cy.get('#productTitle').contains(details.product_name);
                    cy.get('.a-section > .a-price').contains(details.price);
                    cy.get('#productTitle').contains(details.description);
                }
                cy.go('back');
                this.checkMobilePageLoaded();
            })
    }
}      
 