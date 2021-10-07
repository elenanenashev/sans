
import { VideoPage } from '../page-objects/video-po';
import { browser} from 'protractor';

describe(' #Test ', async () => {

    let video_page : VideoPage;
    
    const title_message     = "Title should be less than 200 chars long";
    const release_message   = "Release Date should be greater than 2015-10-01";
    const rating_message    = "Rating should be between 1 and 5 inclusive";

    beforeAll(async () => {
        //await browser.get('http://localhost:8080');
        await browser.get(browser.baseUrl);
        video_page  = new VideoPage();
    });

    it(' verify title and release day entered correctly, but rating is empty => rating message displays and "Add Movie" button disabled ', async () => {
        
        await video_page.set_title("Some Like It Hot");
        await video_page.set_date("07172017"); // MM-DD-YEAR
        await video_page.click_header();

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and release day entered correctly, but rating is set to "6" => rating message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Top Gun");
        await video_page.set_date("09092019"); // MM-DD-YEAR
        await video_page.set_rating("6");

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and release day entered correctly, but rating is set to "0" => rating message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Baby Boom");
        await video_page.set_date("12122027"); // MM-DD-YEAR
        await video_page.set_rating("0");

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and release day entered correctly, but rating is set to "-5" => rating message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Only Lovers Left Alive");
        await video_page.set_date("05052020"); // MM-DD-YEAR
        await video_page.set_rating("-5");

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and release day entered correctly, but rating is set to letter "Z" => rating message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Green Mile");
        await video_page.set_date("04042016"); // MM-DD-YEAR
        await video_page.set_rating("Z");

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and release day entered correctly, but rating is set to special character "$" => rating message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Zombie");
        await video_page.set_date("08082018"); // MM-DD-YEAR
        await video_page.set_rating("$");

        expect(await video_page.rating_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.rating_message)).toEqual(rating_message);

        expect(await video_page.title_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify release day and rating entered correctly, but title is empty => title message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_date("05052020"); // MM-DD-YEAR
        await video_page.set_rating("5");
        await video_page.click_header();

        expect(await video_page.title_message.isDisplayed()).toBe(true);
        await expect (video_page.getElemText(video_page.title_message)).toEqual(title_message);

        expect(await video_page.rating_message.isDisplayed()).toBe(false);
        expect(await video_page.release_message.isDisplayed()).toBe(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and rating entered correctly, but release day is empty => release message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Sunset Boulevard");
        await video_page.set_rating("4");
        await video_page.click_header();

        expect(await video_page.release_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.release_message)).toEqual(release_message);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and rating entered correctly, but release day is less than "2015-10-01" => release message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("Dirty Dancing");
        await video_page.set_rating("3");
        await video_page.set_date("09302015"); // MM-DD-YEAR

        expect(await video_page.release_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.release_message)).toEqual(release_message);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and rating entered correctly, but release day is less than "2015-10-01" => release message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("The Man Who Shot Liberty Valance");
        await video_page.set_rating("1");
        await video_page.set_date("10012014"); // MM-DD-YEAR

        expect(await video_page.release_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.release_message)).toEqual(release_message);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and rating entered correctly, but release day is incorrect format (YEAR-MM-DD) => release message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("All the Colors of the Dark");
        await video_page.set_rating("2");
        await video_page.set_date("20210110"); // MM-DD-YEAR

        expect(await video_page.release_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.release_message)).toEqual(release_message);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify title and rating entered correctly, but release day is incorrect format (DD-MM-YEAR) => release message displays and "Add Movie" button disabled ', async () => {
        
        await browser.refresh();
        await video_page.set_title("The Good, the Bad, and the Ugly");
        await video_page.set_rating("1");
        await video_page.set_date("30092020"); // MM-DD-YEAR

        expect(await video_page.release_message.isDisplayed()).toEqual(true);
        await expect (video_page.getElemText(video_page.release_message)).toEqual(release_message);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        await expect (video_page.submit_button.isEnabled()).toBe(false);
        await browser.sleep(2000);
    });

    it(' verify "Title" input box can not accept more than 200 characters => if more than 200 characters entered the string will be adjusted to 200 ', async () => {

        await browser.refresh();

        let put_str = new Array(201).join("a")
        await video_page.set_title(put_str);
        await browser.sleep(2000);

        let get_str = await video_page.get_title();

        expect(get_str.length).toEqual(200);
        expect(get_str).toEqual(put_str.substring(0,200));

        await video_page.set_date("11282022"); // MM-DD-YEAR
        await video_page.set_rating("1");
        await video_page.click_header();

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        expect(await video_page.release_message.isDisplayed()).toEqual(false);

        await expect (video_page.submit_button.isEnabled()).toBe(true);
        video_page.click_submit();
        await browser.sleep(2000);
    });

    it(' verify title can accept 1 character, release and rating entred correctly => movie record added successfully ', async () => {
    
        browser.navigate().back();
        await browser.refresh();
        await video_page.set_title("Y");
        await video_page.set_date("04252016"); // MM-DD-YEAR
        await video_page.set_rating("1");
        await video_page.click_header();
        await browser.sleep(2000);

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        expect(await video_page.release_message.isDisplayed()).toEqual(false);

        await expect (video_page.submit_button.isEnabled()).toBe(true);
        video_page.click_submit();
        await browser.sleep(2000);
    });

    it(' verify title with 200 characters, release and rating entered correctly => movie record added successfully ', async () => {
        
        browser.navigate().back();
        await browser.refresh();

        let put_str = new Array(26).join("Die Hard")
        await video_page.set_title(put_str);
        await browser.sleep(2000);

        let get_str = await video_page.get_title();

        expect(get_str.length).toEqual(200);
        expect(get_str).toEqual(put_str.substring(0,200));

        await video_page.set_date("03232023"); // MM-DD-YEAR
        await video_page.set_rating("5");
        await video_page.click_header();

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        expect(await video_page.release_message.isDisplayed()).toEqual(false);

        await expect (video_page.submit_button.isEnabled()).toBe(true);
        video_page.click_submit();
        await browser.sleep(2000);
    });

    it(' verify all fields entered correctly => movie record added successfully ', async () => {
        
        browser.navigate().back();
        await browser.refresh();

        await video_page.set_title("Back to the Future");
        await video_page.set_date("11232025"); // MM-DD-YEAR
        await video_page.set_rating("5");
        await video_page.click_header();

        expect(await video_page.rating_message.isDisplayed()).toEqual(false);
        expect(await video_page.title_message.isDisplayed()).toEqual(false);
        expect(await video_page.release_message.isDisplayed()).toEqual(false);

        await expect (video_page.submit_button.isEnabled()).toBe(true);
        video_page.click_submit();
        await browser.sleep(2000);
    });

});