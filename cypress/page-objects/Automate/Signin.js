import BasePage from "../BasePage";
import AccountPage from "../pages/AccountPage";

export default class SignIn extends BasePage {

    static load(userData){
        AccountPage.enterSignInPage();
        AccountPage.addEmail(userData.Email);
        AccountPage.clickContinue();
        AccountPage.addPassword(userData.Password);
        AccountPage.clickSignIn();
    }
}

