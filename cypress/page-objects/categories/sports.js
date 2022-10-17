

export default class SportsCategory {
    
    static badminton = "#sobe_d_b_1_4 > a"
    static cardio = "#sobe_d_b_1_3 > a"
    static cricket = "#sobe_d_b_1_5 > a"
    static sportsLength = ".a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base"
    static pagestrip = ".s-pagination-strip > .s-pagination-item"
    static badmintonPage = ".a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base"
    static seeAllResults = ".a-link-normal"

    static selectAllResults() {
        cy.get(this.seeAllResults).contains('See all results').click({ force: true });
    }

    static selectbadminton() {
        cy.get(this.badminton).click({ force: true });
    }

    static selectcardio() {
        cy.get(this.cardio).click({ force: true });
    }

    static selectcricket() {
        cy.get(this.cricket).click({ force: true });
    }
    static checkSportsPageLoaded() {
        cy.get(this.sportsLength).should('have.length', 24);
    }

    static checkBadmintonPageLoaded() {
        cy.get(this.badmintonPage).should('have.length', 30);
    }

    static clickNextPage(key) {
        cy.get(this.pagestrip).contains(key).click({ force: true });
    }

    static clickNextBadmintonPageLoaded(key) {
        cy.get('.a-pagination > *').contains(key).click({ force: true });
    }

    static checkAllSportsContents(sports) {
       
        cy.get('.sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal').each(($element, index, list) =>{
            let link = $element.attr('href');
        cy.visit(link);
        let key = JSON.stringify($element.text()).replaceAll(' ', '');
        let nae =sports[key]
        let q = JSON.stringify(nae)


        if (q !== undefined){
            let details = JSON.parse(q)
            cy.get('#productTitle').contains(details["product_name"]);
            cy.get('.a-section > .a-price').contains(details["price"]);
            cy.get('#productTitle').contains(details["product_name"]);
        }
 
        cy.go('back');
        this.checkSportsPageLoaded();
    })
    }
    static checkBadmintonFirstPageContents(sportsItemsDataPage1) {
        cy.get('.a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base').each((element, index, $list) => {
            let link = element.attr('href');
            cy.visit(link);
            let key = JSON.stringify(element.text()).replaceAll(' ', '');
            let nae =sportsItemsDataPage1[key]
            let q = JSON.stringify(nae)
            if (q !== undefined){
                let details = JSON.parse(q)
                cy.get('#productTitle').contains((details["product_name"]));
                cy.get('#corePrice_feature_div').contains(details["price"]);
                cy.get('#feature-bullets > ul > li').foreach((point, pointsindex, points) => {
                    cy.wrap(point).contains(details.description[pointsindex])
                })
            }
            cy.go('back');
            this.checkBadmintonPageLoaded();
        })
    }
    static checkBadmintonSecondPageContents(sportsItemsDataPage2) {
        cy.get('.a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base').each((element, index, $list) => {
            let link = element.attr('href');
            cy.visit(link);
            let key = JSON.stringify(element.text()).replaceAll(' ', '');
            let nae =sportsItemsDataPage2[key]
            let q = JSON.stringify(nae)
            if (q !== undefined){
                let details = JSON.parse(q)
                cy.get('#productTitle').contains(details["product_name"]);
                cy.get('.a-section > .a-price').contains(details["price"]);
                cy.get('#productTitle').contains(details["description"]);
            }

            cy.go('back');
            this.checkBadmintonPageLoaded();
        })
    }

}