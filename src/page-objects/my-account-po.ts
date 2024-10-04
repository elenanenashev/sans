import { element, by, ElementFinder }  from 'protractor';
import { ActionsPage }                 from './actions-page';
 
export class MyAccountPage extends ActionsPage { 

    success_message                     : ElementFinder;

    account_info_label                  : ElementFinder;
    contact_info_label                  : ElementFinder;
    
    contact_info_values                 : ElementFinder;
    contact_info_edit_button            : ElementFinder;
    contact_info_change_password_button : ElementFinder;

    address_book_label                  : ElementFinder;
    default_billing_address_label       : ElementFinder;
    default_shipping_address_label      : ElementFinder;

    constructor(){

        super()

        this.success_message                        = element (by.xpath ('//div[@data-ui-id= "message-success"]/div'));
        this.account_info_label                     = element (by.xpath ('//div[@class = "block block-dashboard-info"]/div[1]'));
        this.contact_info_label                     = element (by.xpath ('//div[@class = "box box-information"]/strong[@class = "box-title"]/span'));
        
        this.contact_info_values                    = element (by.xpath ('//span[text() = "Contact Information"]/following::p[1]'));
        this.contact_info_edit_button               = element (by.xpath ('//div[@class= "block block-dashboard-info"]//a[@class= "action edit"]'));
        this.contact_info_change_password_button    = element (by.xpath ('//div[@class= "block block-dashboard-info"]//a[@class= "action change-password"]'));
        
        this.address_book_label                     = element (by.xpath ('//div[@class = "block block-dashboard-addresses"]/div[1]/strong'));
        this.default_billing_address_label          = element (by.xpath ('//div[@class = "box box-billing-address"]/strong[@class = "box-title"]/span'));
        this.default_shipping_address_label         = element (by.xpath ('//div[@class = "box box-shipping-address"]/strong[@class = "box-title"]/span'));
    }

    async verify_page_title () : Promise<string> {
        return await super.getText(element(by.xpath ('//h1[@class = "page-title"]')));
    }


}