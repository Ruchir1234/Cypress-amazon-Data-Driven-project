

export default class BookGenre {
    static fiction = ".sl-sobe-carousel-viewport-row-inner > #sobe_d_b_1_2 > a"
    static nonFiction = ".sl-sobe-carousel-viewport-row-inner > #sobe_d_b_1_4 > a"
    static children = ".sl-sobe-carousel-viewport-row-inner > #sobe_d_b_1_8 > a"
    static booksLength = ".s-card-container.s-overflow-hidden.aok-relative.puis-include-content-margin.puis.s-latency-cf-section.s-card-border"
    static pagestrip = ".s-pagination-strip > .s-pagination-item"


    static selectFiction() {
        cy.get(this.fiction).click({ force: true });
    }

    static selectNonFiction() {
        cy.get(this.nonFiction).click({ force: true });
    }

    static selectChildren() {
        cy.get(this.children).click({ force: true });
    }
    static checkBookPageLoaded() {
        cy.get(this.booksLength).should('have.length', 16);
    }

    static clickNextPage(key) {
        cy.get(this.pagestrip).contains(key).click({ force: true });
    }


    static checkAllBookContents(books) {
            cy.get(':nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal').each(element => {
                let link = element.attr('href');
                cy.visit(link);
                let key = element.text().replaceAll(' ', '')
                let nae =books[key]
                let q = JSON.stringify(nae)
                
                if (q !== undefined){
                   let details = JSON.parse(q)
                   cy.get('#productTitle').contains(details.name);
                   cy.get('#price').contains(details.price);
                   cy.get('#bookDescription_feature_div').contains(details.description);
                }
                cy.go('back');
                this.checkBookPageLoaded();
            })
    }
    
}