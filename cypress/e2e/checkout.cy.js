/// <reference types="cypress"/>

import CheckoutsPage from "../page-objects/pages/CheckoutsPage"
import HomePage from "../page-objects/pages/HomePage"
import SignIn from "../page-objects/Automate/Signin"
import BookGenre from "../page-objects/categories/books"
import ProductsPage from "../page-objects/pages/Products"
import Navbar from "../page-objects/components/nav-bar"
import MobileCategory from "../page-objects/categories/mobiles"

describe("Checkout Action Suite",()=>{
    let userData
    before(()=>{
        cy.fixture('user-info').then((data)=>{
            userData = data
            return userData
        })
        HomePage.load();
    })

    it("traversing to Checkout Page",()=>{
        SignIn.load(userData);
        Navbar.clickBooks();
        BookGenre.selectFiction();
        BookGenre.checkBookPageLoaded();
        ProductsPage.clickOnProduct("1");
        ProductsPage.clickAddToCart();
        ProductsPage.checkItemsInBasket('1');
        Navbar.clickMobiles();
        MobileCategory.selectAllResults();
        MobileCategory.checkMobilePageLoaded();
        ProductsPage.clickOnProduct("1");
        ProductsPage.clickAddToCart();
        ProductsPage.checkItemsInBasket('2');
        ProductsPage.openCart();
        ProductsPage.proceedToCheckout();
        CheckoutsPage.addDeliveryAddressDetails(userData);
        CheckoutsPage.payOnDeliverypaymentMethod();
        CheckoutsPage.reviewOrder();
    })
})