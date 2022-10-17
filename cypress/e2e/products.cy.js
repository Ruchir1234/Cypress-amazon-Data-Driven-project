/// <reference types="cypress"/>

import HomePage from "../page-objects/pages/HomePage"
import Navbar from "../page-objects/components/nav-bar"
import BookGenre from "../page-objects/categories/books"
import MobileCategory from "../page-objects/categories/mobiles"
import SportsCategory from "../page-objects/categories/sports"

describe("Verifying Products",()=>{
    let booksData
    let mobileData
    let sportsItemsDataPage1
    let sportsItemsDataPage2
    before(()=>{
        HomePage.load();
        cy.fixture('books-info').then((data)=>{
            booksData = data
            return booksData
        })
        cy.fixture('mobile-items').then((data)=>{
            mobileData = data
            return mobileData
        })
        cy.fixture('sports-items-data-page1').then((data)=>{
            sportsItemsDataPage1 = data
           return sportsItemsDataPage1
        })
        cy.fixture('sports-items-data-page2').then((data)=>{
            sportsItemsDataPage2 = data
           return sportsItemsDataPage2
        })
    })

    it('Visiting and verifying Book data using fixtures', () => {
        Navbar.clickBooks();
        BookGenre.selectFiction();
        BookGenre.checkBookPageLoaded();
        BookGenre.checkAllBookContents(booksData);
        BookGenre.clickNextPage("2");
        BookGenre.checkAllBookContents(booksData);
    })

    it.only('Visiting and verifying mobile data using fixtures', () => {
        Navbar.clickMobiles();
        MobileCategory.selectAllResults();
        MobileCategory.checkMobilePageLoaded();
        MobileCategory.checkAllMobileContents(mobileData);
        MobileCategory.clickNextPage("2");
        MobileCategory.checkAllMobileContents(mobileData);
    })

    it('Visiting and verifying shopping items data using fixtures', () => {
        Navbar.clickSports();
        SportsCategory.selectbadminton();
        SportsCategory.checkMobilcheckBadmintonPageLoadedePageLoaded();
        SportsCategory.checkBadmintonFirstPageContents(sportsItemsDataPage1);
        SportsCategory.clickNextBadmintonPageLoaded("2");
        SportsCategory.checkBadmintonSecondPageContents(sportsItemsDataPage2);
    })

    
})