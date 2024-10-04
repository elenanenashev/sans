import { element, by, ElementFinder }  from 'protractor';
import { ActionsPage }                 from './actions-page';
 
export class CustomerLoginPage extends ActionsPage { 

    email_inputbox              : ElementFinder;
    password_inputbox           : ElementFinder;
    sign_in_button              : ElementFinder;
    new_customers_header        : ElementFinder;
    registered_customers_header : ElementFinder;
    create_an_account_button    : ElementFinder;

    constructor(){

        super()

        this.email_inputbox     = element (by.xpath ('//input[@id="email"]'));
        this.password_inputbox  = element (by.xpath ('(//input[@id="pass"])[1]'));
        this.sign_in_button     = element (by.xpath ('//button[@class = "action login primary"]'));
        this.new_customers_header   = element (by.xpath ('//strong[text() = "New Customers"]'));
        this.registered_customers_header    = element (by.xpath ('//strong[text() = "Registered Customers"]'));
        this.create_an_account_button    = element (by.xpath ('//strong[text() = "New Customers"]/following::a[1]'));
    }

async verify_page_title () : Promise<string> {
    return await super.getText(element(by.xpath ('//h1[@class = "page-title"]/span')));
}

}