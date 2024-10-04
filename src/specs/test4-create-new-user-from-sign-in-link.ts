
import { HomePage }                 from '../page-objects/home-po';
import { CreateNewAccountPage }     from '../page-objects/create-new-account-po';
import { MyAccountPage }            from '../page-objects/my-account-po';
import { CustomerLoginPage }        from '../page-objects/customer_login-po';
import { ExpectedConditions as EC } from 'protractor';
import { browser}                   from 'protractor';

describe(' test4: verify user account can be created if user first click Sign In link on home page', async () => {

    let home_page                           : HomePage;
    let create_new_customer_account_page    : CreateNewAccountPage;
    let my_account_page                     : MyAccountPage;
    let customer_login_page                 : CustomerLoginPage;
    
    let sign_in_link              = "Sign In";
    let create_an_account_link    = "Create an Account";
    let create_account_page_title = "Create New Customer Account";
    let my_account_page_title     = "My Account";
    let customer_login_page_title = "Customer Login";
    let first_name        = "Esperanza R";
    let last_name         = 'Corral'
    let password          = "DC$1641Oct4";
    let confirm_password  = "DC$1641Oct4";
    let email : string

    beforeAll(async () => {
        await browser.get(browser.baseUrl);

        home_page                           = new HomePage();
        create_new_customer_account_page    = new CreateNewAccountPage();
        my_account_page                     = new MyAccountPage();
        customer_login_page                 = new CustomerLoginPage();

        email = "DeleteMe-" + new Date().getTime() + "@test.com" ;
    });

    it(' home page: verify logo, verify buttons Sign In and Create an Account ', async () => {
                
        await expect (await browser.getTitle()).toEqual("Home Page");
        await expect (home_page.home_logo.isDisplayed()).toBe(true);
        await expect (home_page.sign_in_link.isDisplayed()).toBe(true);
        await expect (home_page.create_an_account_link.isDisplayed()).toBe(true);
    
        await expect (home_page.getText(home_page.sign_in_link)).toEqual(sign_in_link);
        await expect (home_page.getText(home_page.create_an_account_link)).toEqual(create_an_account_link);
    });

    it(' click Sign In link: under New Customers click Create an Account ', async () => {
                
        await home_page.click (home_page.sign_in_link);

        await browser.wait(EC.urlContains('/customer/account/login/referer/'), 10000);
        await expect (await browser.getTitle()).toEqual("Customer Login");
        await expect (customer_login_page.verify_page_title()).toEqual (customer_login_page_title);

        await expect (customer_login_page.getText(customer_login_page.new_customers_header)).toEqual ("New Customers");
        await customer_login_page.click (customer_login_page.create_an_account_button);
    });

    it(' Create New Customer Account: enter all required fields > click Create an Account button > verify account created successfully  ', async () => {
      
        await browser.wait(EC.urlContains('/customer/account/create/'), 10000);
        await expect (await browser.getTitle()).toEqual("Create New Customer Account");
        await expect (create_new_customer_account_page.verify_page_title()).toEqual (create_account_page_title);

        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.first_name_inputbox, first_name);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.last_name_inputbox, last_name);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.email_inputbox, email);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.password_inputbox, password);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.confirm_password_inputbox, confirm_password);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
    });

    it(' My Account: verify user is on My Account Page > verify Welcome Dropdown shows correct First Name, Last Name', async () => {
 
        await browser.wait(EC.urlContains('/customer/account/'), 10000);
        await expect (await browser.getTitle()).toEqual("My Account");
        await expect (my_account_page.verify_page_title()).toEqual (my_account_page_title);

        await expect (my_account_page.getText(my_account_page.success_message)).toEqual ("Thank you for registering with Main Website Store.");
        
        await expect (home_page.getText(home_page.logged_in_info)).toEqual ("Welcome, "+first_name+ " "+last_name+"!");

        await expect (my_account_page.getText(my_account_page.account_info_label)).toEqual ("Account Information");
        await expect (my_account_page.getText(my_account_page.contact_info_label)).toEqual ("Contact Information");
        await expect (my_account_page.getText(my_account_page.address_book_label)).toEqual ("Address Book");
        await expect (my_account_page.getText(my_account_page.default_billing_address_label)).toEqual ("Default Billing Address");
        await expect (my_account_page.getText(my_account_page.default_shipping_address_label)).toEqual ("Default Shipping Address");
    });

    it(' My Account: verify Contact Information section shows correct first name, last and email > verify buttons Edit and Change Password', async () => {
 
        await expect (my_account_page.getText(my_account_page.contact_info_values)).toEqual (""+first_name+" "+last_name+"\n"+email+"");

        await expect (my_account_page.contact_info_edit_button.isDisplayed()).toBe(true);
        await expect (my_account_page.contact_info_change_password_button.isDisplayed()).toBe(true);
        await expect (my_account_page.getText(my_account_page.contact_info_edit_button)).toEqual ("Edit");
        await expect (my_account_page.getText(my_account_page.contact_info_change_password_button)).toEqual ("Change Password");
    });

    it(' My Account: click Welcome dropdown > click Sign Out > verify user is signed out and home page displayed', async () => {
 
        await home_page.click (home_page.welcome_dropdown);
        await browser.sleep (1000);
        await home_page.click (home_page.sign_out_link);
        await browser.wait(EC.urlContains('/customer/account/logoutSuccess'), 10000);
        await browser.sleep (7000);

        await expect (await browser.getTitle()).toEqual("Home Page");
        await expect (home_page.home_logo.isDisplayed()).toBe(true);
        await expect (home_page.sign_in_link.isDisplayed()).toBe(true);
        await expect (home_page.create_an_account_link.isDisplayed()).toBe(true);
    });



});