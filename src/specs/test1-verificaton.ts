
import { HomePage }                 from '../page-objects/home-po';
import { CreateNewAccountPage }     from '../page-objects/create-new-account-po';
import { ExpectedConditions as EC } from 'protractor';
import { browser}   from 'protractor';

describe(' test1: verify create new customer account form fields > if required fields are not entered user can not be created ', async () => {

    let home_page                           : HomePage;
    let create_new_customer_account_page    : CreateNewAccountPage;
    
    let sign_in_link              = "Sign In";
    let create_an_account_link    = "Create an Account";

    let create_account_page_title = "Create New Customer Account";
    let personal_info_label       = "Personal Information";
    let first_name_label          = "First Name";
    let last_name_label           = "Last Name";
    let sign_in_info_label        = "Sign-in Information";
    let email_label               = "Email";
    let password_label            = "Password";
    let confirm_password_label    = "Confirm Password";
    let password_strength_label   = "Password Strength: No Password";
    let create_account_button     = "Create an Account";

    let first_name        = "Janet";
    let last_name         = 'Ortiz'
    let password          = "Test2024$";
    let confirm_password  = "Test2024$";
    let email : string

    let error_message             = "This is a required field.";
    let confirm_password_error    = "Please enter the same value again.";

    beforeAll(async () => {
        await browser.get(browser.baseUrl);

        home_page                           = new HomePage();
        create_new_customer_account_page    = new CreateNewAccountPage();

        email = "DeleteMe-" + new Date().getTime() + "@test.com" ;
    });

    it(' home page: verify logo, verify buttons Sign In and Create an Account ', async () => {
                
        await expect(home_page.home_logo.isDisplayed()).toBe(true);
        await expect(home_page.sign_in_link.isDisplayed()).toBe(true);
        await expect(home_page.create_an_account_link.isDisplayed()).toBe(true);
    
        await expect (home_page.getText(home_page.sign_in_link)).toEqual(sign_in_link);
        await expect (home_page.getText(home_page.create_an_account_link)).toEqual(create_an_account_link);
    });

    it(' Create New Customer Account: click Create an Account > verify user directed to the Create New Customer Account page > verify form\'s labels', async () => {
                
        await home_page.click (home_page.create_an_account_link);
        await browser.wait(EC.urlContains('/customer/account/create/'), 10000);

        await expect (create_new_customer_account_page.verify_page_title()).toEqual (create_account_page_title);

        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.create_info_header)).toEqual(personal_info_label);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.first_name_label)).toEqual(first_name_label);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.last_name_label)).toEqual(last_name_label);

        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.create_account_info_header)).toEqual(sign_in_info_label);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.email_label)).toEqual(email_label);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_label)).toEqual(password_label);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.confirm_password_label)).toEqual(confirm_password_label);

        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_strength_label)).toEqual(password_strength_label);

        await expect(create_new_customer_account_page.create_an_account_button.isDisplayed()).toBe(true);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.create_an_account_button)).toEqual(create_account_button);
    });

    it(' Create New Customer Account: verify if First Name is not entered, and all other required fields entered > account is not created > verify error message', async () => {

        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.last_name_inputbox, last_name);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.email_inputbox, email);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.password_inputbox, password);
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.confirm_password_inputbox, confirm_password);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.first_name_error)).toEqual(error_message);
    });

    it(' Create New Customer Account: verify if Last Name is not entered, and all other required fields entered > account is not created > verify error message', async () => {

        await create_new_customer_account_page.last_name_inputbox.clear();        
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.first_name_inputbox, first_name);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.last_name_error)).toEqual(error_message);
    });

    it(' Create New Customer Account: verify if Email is not entered, and all other required fields entered > account is not created > verify error message', async () => {

        await create_new_customer_account_page.email_inputbox.clear();        
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.last_name_inputbox, last_name);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.email_error)).toEqual(error_message);
    });

    it(' Create New Customer Account: verify if Password is not entered, and all other required fields entered > account is not created > verify error message', async () => {

        await create_new_customer_account_page.password_inputbox.clear();        
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.email_inputbox, email);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_error)).toEqual(error_message);
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_confirmation_error)).toEqual(confirm_password_error);
    });

    it(' Create New Customer Account: verify if Confirm Password is not entered, and all other required fields entered > account is not created > verify error message', async () => {

        await create_new_customer_account_page.confirm_password_inputbox.clear();        
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.password_inputbox, password);

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_confirmation_error)).toEqual(error_message);
    });

    it(' Create New Customer Account: verify if Password and Confirm Password do NOT match > account is not created > verify error message', async () => {
 
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.confirm_password_inputbox, password+"1");

        await create_new_customer_account_page.click (create_new_customer_account_page.create_an_account_button)
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_confirmation_error)).toEqual(confirm_password_error);
    });

    it(' Create New Customer Account: verify if Password does NOT match the requirement > account is not created > verify error message', async () => {
 
        await create_new_customer_account_page.password_inputbox.clear();   
        await create_new_customer_account_page.confirm_password_inputbox.clear();

        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.password_inputbox, "1");
        await create_new_customer_account_page.sendKeys (create_new_customer_account_page.confirm_password_inputbox, "1");
        await expect (create_new_customer_account_page.getText(create_new_customer_account_page.password_error)).toEqual("Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
    });

});