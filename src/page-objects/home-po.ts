import { element, by, ElementFinder }  from 'protractor';
import { ActionsPage }                 from './actions-page';
 
export class HomePage extends ActionsPage { 
    
    elemDict : Record<string, ElementFinder>;

    home_logo               : ElementFinder;
    sign_in_link            : ElementFinder;
    create_an_account_link  : ElementFinder;
    welcome_dropdown        : ElementFinder;
    logged_in_info          : ElementFinder;
    my_account_link         : ElementFinder;
    sign_out_link           : ElementFinder;

    constructor(){

        super()

        this.home_logo              = element (by.xpath ('//a[@class="logo"]'));
        this.sign_in_link           = element (by.xpath ('(//ul[@class= "header links"])[1]/li[2]'));
        this.create_an_account_link = element (by.xpath ('(//ul[@class= "header links"])[1]/li[3]'));
        this.welcome_dropdown       = element (by.xpath ('(//button[@data-action= "customer-menu-toggle"])[1]'));
        this.logged_in_info         = element (by.xpath ('(//span[@class= "logged-in"])[1]')); 
        this.my_account_link        = element (by.xpath ('(//a[text() = "My Account"])[1]'));
        this.sign_out_link          = element (by.xpath ('(//li[@class= "authorization-link"]/a)[1]'));
    }

}