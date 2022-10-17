import BasePage from "../BasePage"

export default class CheckoutsPage extends BasePage {
    
    static deliveryNameField = '#address-ui-widgets-enterAddressFullName'
    static deliveryPhoneField = '#address-ui-widgets-enterAddressPhoneNumber'
    static deliveryPincodeField = '#address-ui-widgets-enterAddressPostalCode'
    static deliveryAddress1Field = '#address-ui-widgets-enterAddressLine1'
    static deliveryAddress2Field ='#address-ui-widgets-enterAddressLine2'
    static deliveryLandMarkField = '#address-ui-widgets-landmark'
    static deliveryCityField = '#address-ui-widgets-enterAddressCity'
    static deliveryStateDropDownMenu = '#a-popover-1 > .a-popover-wrapper > .a-popover-inner > ul'
    static deliveryAddressType = '#a-popover-3 > .a-popover-wrapper > .a-popover-inner > ul'
    static deliveryFormSubmit = '#address-ui-widgets-form-submit-button'
    static payOnDelivery = '#pp-oA2Wjy-121'
    static OtherUPIApps = '#pp-oA2Wjy-111'
    static netBanking = '#pp-oA2Wjy-94'
    static payWithCard = '#pp-oA2Wjy-88'
    static submitPay = '#pp-oA2Wjy-124'
    static reviewOrderTitle = '.a-row > .spc-left > *'

    static addDeliveryAddressDetails(userData) {
        cy.get(this.deliveryNameField).type(userData.Name);
        cy.get(this.deliveryPhoneField).type(userData.MobileNo);
        cy.get(this.deliveryPincodeField).type(userData.pinCode);
        cy.get(this.deliveryAddress1Field).type(userData.address1);
        cy.get(this.deliveryAddress2Field).type(userData.address2);
        cy.get(this.deliveryLandMarkField).type(userData.landMark);
        cy.get(this.deliveryCityField).type(userData.city);
        cy.get(this.deliveryStateDropDownMenu).select(userData.state);
        cy.get(this.deliveryAddressType).select(userData.addressType);
        cy.get(this.deliveryFormSubmit).click({force:true});
    }
    
    static payOnDeliverypaymentMethod(){
        cy.get(this.payOnDelivery).check().should('be.checked')
    }
    static OtherUPIAppspaymentMethod(){
        cy.get(this.OtherUPIApps).check().should('be.checked')
    }
    static netBankingpaymentMethod(){
        cy.get(this.netBanking).check().should('be.checked')
    }
    static payWithCardpaymentMethod(){
        cy.get(this.payWithCard).check().should('be.checked')
    }

    static clickPaySubmit(){
        cy.get(this.submitPay).click({force:true})
    }

    static reviewOrder(){
        cy.get(this.reviewOrderTitle).contains('Review your Order')
    }
}