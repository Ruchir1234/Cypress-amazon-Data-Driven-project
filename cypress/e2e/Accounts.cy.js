/// <reference types="cypress"/>

import AccountPage from "../page-objects/pages/AccountPage"
import HomePage from "../page-objects/pages/HomePage"

describe("User Create and Sign In Test Suite",()=>{
    let userData
    before(()=>{
        HomePage.load();
        cy.fixture('user-info').then((data)=>{
            userData = data
            return userData
        })
    })
    it("Create Account in Amazon",()=>{
        AccountPage.clickCreateAccount();
        AccountPage.addName(userData.Name);
        AccountPage.addMobileNumber(userData.MobileNo);
        AccountPage.addEmail(userData.Email);
        AccountPage.addPassword(userData.Password);
        AccountPage.clickContinue();
        AccountPage.clickSolvePuzzle();
    })
    it("Sign In in Amazon",()=>{
        AccountPage.enterSignInPage();
        AccountPage.addEmail(userData.Name);
        AccountPage.clickContinue();
        AccountPage.addPassword(userData.Password);
        AccountPage.clickSignIn();
    })
})