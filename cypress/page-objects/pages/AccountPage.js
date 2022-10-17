import BasePage from "../BasePage"

export default class AccountPage extends BasePage {
    static signIn = '#nav-link-accountList'
    static createAccount = '#createAccountSubmit'
    static userName = '#ap_customer_name'
    static mobileNumer = '#ap_phone_number'
    static password = '#ap_password'
    static emailBox = '#ap_email'
    static continueButton = '.a-button-inner > #continue'
    static solvePuzzleButton = '#home_children_button'
    static FinalSignInButton = '#signInSubmit'

    static clickSolvePuzzle(){
    cy.get(this.solvePuzzleButton).click({force:true});
    }

    static enterSignInPage(){
        cy.get(this.signIn).click({force:true});
    }

    static clickSignIn(){
        cy.get(this.FinalSignInButton).click({force:true});
    }

    static clickCreateAccount(){
        cy.get(this.signIn).click({force:true});
        cy.get(this.createAccount).click({force:true});
    }
    static addName(name){
        cy.get(this.userName).type(name);
    }
    static addMobileNumber(mobileNo){
        cy.get(this.mobileNumer).type(mobileNo);
    }
    static addPassword(pass){
        cy.get(this.password).type(pass);
    }
    static addEmail(emailId){
        cy.get(this.emailBox).type(emailId);
    }
    static clickContinue(){
        cy.get(this.continueButton).click({force:true});
    }
}