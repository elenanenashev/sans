
import { HomePage }             from '../page-objects/home-po';
import { CreateNewAccountPage } from '../page-objects/create-new-account-po';
import { MyAccountPage }        from '../page-objects/my-account-po';
import { CustomerLoginPage }    from '../page-objects/customer_login-po';
import { ExpectedConditions as EC } from 'protractor';
import { browser}   from 'protractor';

describe(' test3: verify that existing user can successfully log in ', async () => {

    let home_page                           : HomePage;
    let create_new_customer_account_page    : CreateNewAccountPage;
    let my_account_page                     : MyAccountPage;
    let customer_login_page                 : CustomerLoginPage;
    
    let sign_in_link                = "Sign In";
    let create_an_account_link      = "Create an Account";
    let my_account_page_title       = "My Account";
    let customer_login_page_title   = "Customer Login";

    let first_name        = "Terri H";
    let last_name         = 'Preston';
    let email             = "zzz10042024@test.com"
    let password          = "PasswordValue$7";

    beforeAll(async () => {
        await browser.get(browser.baseUrl);

        home_page                           = new HomePage();
        create_new_customer_account_page    = new CreateNewAccountPage();
        my_account_page                     = new MyAccountPage();
        customer_login_page                 = new CustomerLoginPage();
    });

    it(' home page: verify logo, verify buttons Sign In and Create an Account ', async () => {
                
        await expect (await browser.getTitle()).toEqual("Home Page");
        await expect (home_page.home_logo.isDisplayed()).toBe(true);
        await expect (home_page.sign_in_link.isDisplayed()).toBe(true);
        await expect (home_page.create_an_account_link.isDisplayed()).toBe(true);
    
        await expect (home_page.getText(home_page.sign_in_link)).toEqual(sign_in_link);
        await expect (home_page.getText(home_page.create_an_account_link)).toEqual(create_an_account_link);
    });

    it(' click Sign In link > verify user is on Customer Login Page > enter existing valid email and password > click Sign In button > verify user logged in successfully ', async () => {
                
        await home_page.click (home_page.sign_in_link);

        await browser.wait(EC.urlContains('/customer/account/login/referer/'), 10000);
        await expect(await browser.getTitle()).toEqual("Customer Login");
        await expect (customer_login_page.verify_page_title()).toEqual (customer_login_page_title);

        await expect (customer_login_page.getText(customer_login_page.registered_customers_header)).toEqual ("Registered Customers");

        await customer_login_page.sendKeys (customer_login_page.email_inputbox, email);
        await customer_login_page.sendKeys (customer_login_page.password_inputbox, password);
        await customer_login_page.click (customer_login_page.sign_in_button)

        await browser.wait (EC.visibilityOf(home_page.home_logo), 10000);
        await expect (home_page.getText(home_page.logged_in_info)).toEqual ("Welcome, "+first_name+ " "+last_name+"!");
    });

    it(' click Welcome Dropdown: click My Account Link > verify user directed to My Account page and customer contact information is correct', async () => {
                
        await home_page.click (home_page.welcome_dropdown);
        await home_page.click (home_page.my_account_link);

        await browser.wait(EC.urlContains('/customer/account/'), 10000);
        await expect(await browser.getTitle()).toEqual("My Account");
        await expect (my_account_page.verify_page_title()).toEqual (my_account_page_title);

        await expect (my_account_page.getText(my_account_page.contact_info_values)).toEqual (""+first_name+" "+last_name+"\n"+email+"");
    });

});