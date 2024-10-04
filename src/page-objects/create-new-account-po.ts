import {  element, by, ElementFinder }  from 'protractor';
import { ActionsPage }                  from './actions-page';
 
export class CreateNewAccountPage extends ActionsPage { 


    create_info_header          : ElementFinder;
    create_account_info_header  : ElementFinder;
    first_name_label            : ElementFinder;
    last_name_label             : ElementFinder;
    email_label                 : ElementFinder;
    password_label              : ElementFinder;
    confirm_password_label      : ElementFinder;
    password_strength_label     : ElementFinder;
    create_an_account_button    : ElementFinder;

    first_name_inputbox         : ElementFinder;
    last_name_inputbox          : ElementFinder;
    email_inputbox              : ElementFinder;
    password_inputbox           : ElementFinder;
    confirm_password_inputbox   : ElementFinder;

    first_name_error            : ElementFinder;
    last_name_error             : ElementFinder;
    email_error                 : ElementFinder;
    password_error              : ElementFinder;
    password_confirmation_error : ElementFinder;

    constructor(){

        super()

        this.create_info_header         = element (by.xpath ('//span[text() = "Personal Information"]'));
        this.create_account_info_header = element (by.xpath ('//span[text() = "Sign-in Information"]'));
        this.first_name_label           = element (by.xpath ('//label[@for= "firstname"]'));
        this.last_name_label            = element (by.xpath ('//label[@for= "lastname"]'));
        this.email_label                = element (by.xpath ('//label[@for= "email_address"]'));
        this.password_label             = element (by.xpath ('//label[@for= "password"]'));
        this.confirm_password_label     = element (by.xpath ('//label[@for= "password-confirmation"]'));
        this.password_strength_label    = element (by.xpath ('//div[@id= "password-strength-meter"]'));
        this.create_an_account_button   = element (by.xpath ('//button[@title= "Create an Account"]'));
        this.first_name_inputbox        = element (by.xpath ('//input[@id= "firstname"]'));
        this.last_name_inputbox         = element (by.xpath ('//input[@id= "lastname"]'));
        this.email_inputbox             = element (by.xpath ('//input[@id= "email_address"]'));
        this.password_inputbox          = element (by.xpath ('//input[@id= "password"]'));
        this.confirm_password_inputbox  = element (by.xpath ('//input[@id= "password-confirmation"]'));
        this.first_name_error           = element (by.xpath ('//div[@id= "firstname-error"]'));
        this.last_name_error            = element (by.xpath ('//div[@id= "lastname-error"]'));
        this.email_error                = element (by.xpath ('//div[@id= "email_address-error"]'));
        this.password_error             = element (by.xpath ('//div[@id= "password-error"]'));
        this.password_confirmation_error= element (by.xpath ('//div[@id= "password-confirmation-error"]'));
    }

    async verify_page_title () : Promise<string> {
        return await super.getText(element(by.xpath ('//span[@data-ui-id="page-title-wrapper"]')));
    }


}