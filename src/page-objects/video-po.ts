import { browser, element, by, ElementFinder} from 'protractor';
import { ExpectedConditions as EC } from 'protractor';
import { ActionsPage } from './actions-page';
 
export class VideoPage extends ActionsPage { 
    
    elemDict : Record<string, ElementFinder>;

    title_text_box  : ElementFinder;
    date_text_box   : ElementFinder;
    rating_text_box : ElementFinder;
    header_field    : ElementFinder;
    submit_button   : ElementFinder;
    title_message   : ElementFinder;
    release_message : ElementFinder;
    rating_message  : ElementFinder;


    // application_menu_bttn           : ElementFinder;
    // dashboard_bttn                  : ElementFinder;
    // search_bar_input                : ElementFinder;

    constructor(){

        super()

        // this.page_header_string  = 'My Dashboard';

        this.title_text_box = element(by.id("title"));
        this.date_text_box = element(by.id("rel_date"));
        this.rating_text_box = element(by.id("rating"));
        this.header_field = element(by.id("hdr"));
        this.submit_button = element(by.id("sb"));
        this.title_message = element(by.id("msg_title"));
        this.release_message = element(by.id("msg_rdate"));
        this.rating_message = element(by.id("msg_rating"));
    }

    async click_header(){
        await browser.wait(EC.visibilityOf(this.header_field), 30000,"Element not visible timing out");   
        this.header_field.click(); 
    }

    async set_title(title: string){
        this.title_text_box.sendKeys(title);
    }

    async get_title() : Promise<string> {
        return this.title_text_box.getAttribute("value");
    }

    async set_date(date: string){
        this.date_text_box.sendKeys(date);
    }

    async set_rating(rating: string){
        this.rating_text_box.sendKeys(rating);
    }

    async click_submit(){
        await browser.wait(EC.elementToBeClickable(this.submit_button), 30000,"Element not visible timing out");
        this.submit_button.click();
    }



    // async getText_rating_message() {
    //     const elem = element(by.id("msg_rating"));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }


    // // message center: info records
    // async getText_message_center_info(i: number) : Promise<string> {
    //     const elem = element(by.xpath ('//mat-icon[text()="info"]//following::span['+i+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }
    
    // // dashboard tabs: Projects, Queries, GeoFences, Devices, Locaitons, IPs
    // async getText_dashboard_tabs(i: number) : Promise<string> {
    //     const elem = element(by.xpath ('//*[@id="tid-big-tab-nav-container"]/button['+i+']/span//span'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // subtabs: Last Five, Favorite, Show All; //first div starts from 2
    // async getText_dashboard_subtabs(j:number, i: number) : Promise<string> {
    //     const elem = element(by.xpath ('//big-tab-nav/div['+j+']/mat-tab-group/mat-tab-header/div[2]/div/div/div['+i+']/div'));
    //     await browser.wait(EC.visibilityOf(elem), 30000,"Element not visible timing out");
    //     return elem.getText();
    // }

    // async getText_sortable_actions_columns(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//big-tab-nav/div['+i+']/mat-tab-group/mat-tab-header/div[2]/div/div/div[3]/div//following::mat-header-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000,"Element not visible timing out");
    //     return elem.getText();
    // }

    // async click_dashboardTab(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//div[@id="tid-big-tab-nav-container"]/button['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000,"Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_items_per_page_menu() : Promise<void> {
    //     const elem = element(by.xpath ('//*[@role="combobox"]'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000,"Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_items_per_page(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//*[@role="listbox"]/mat-option['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000,"Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_subTabs(j:number, i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div['+j+']/mat-tab-group/mat-tab-header/div[2]/div/div/div['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000,"Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_record_by_name(name: string) : Promise<void> {
    //     const elem = element(by.xpath ('//mat-row//span[text() =\" '+name+' \"]'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_delete_record_by_name(name: string) : Promise<void> {
    //     const elem = element(by.xpath ('//span[text() =\" '+name+' \"]//following::button[1]'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_launch_record_by_name(name: string) : Promise<void> {
    //     const elem = element(by.xpath ('//span[text() =\" '+name+' \"]//following::button[4]'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_favorite_record_by_name(name: string) : Promise<void> {
    //     const elem = element(by.xpath ('//span[text() =\" '+name+' \"]//following::button[3]'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_share_record_by_name(name: string) : Promise<void>  {
    //     const elem = element(by.xpath ('//span[text() =\" '+name+' \"]//following::button[2]'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    // }

    // // Projects tab > click on record > details displayed
    // async getText_project_record_details_tab(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-project-summary-component"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // Queries tab > click on record > details tab > details displayed
    // async getText_query_record_details_tab(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//div[@id="tid-query-summary-component-fenced-type"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // Queries tab > click on record > details displayed
    // async getText_query_record_summary_details(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-query-summary-component-pattern-type"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // GeoFences tab > click on record > details tab > details displayed
    // async getText_geofence_record_details_tab(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-fence-summary-component"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // Devices tab > click on record > details tab > details displayed
    // async getText_device_record_details_tab(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-device-summary-component"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // Locations tab > click on record > details tab > details displayed
    // async getText_location_record_details_tab(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-poi-summary-component"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // // IPs tab > click on record > details displayed
    // async getText_ip_record_summary_details(i: number, j: number) : Promise<string> {
    //     const elem = element(by.xpath('//*[@id="tid-ip-summary-component"]//mat-row['+i+']//mat-cell['+j+']'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // async getText_device_record_last_10_ip_tab_columns(i: number) : Promise<string> {
    //     const elem = element(by.xpath('//div[text()="Last 10 IP Addresses"]//following::mat-header-cell['+i+']/div'));
    //     await browser.wait(EC.visibilityOf(elem), 30000, "Element not visible timing out");
    //     return elem.getText();
    // }

    // async click_device_record_last_10_ip_tab_ip_link(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//*[@id="tid-device-summary-component"]//mat-row['+i+']//a'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }
    
    // async click_project_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[2]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }
    // async click_query_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[3]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_geofence_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[4]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_device_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[5]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_location_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[6]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // // button: launch [4]; delete [1]
    // async click_launch_delete_location_record(i: number, j: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[6]//mat-table/mat-row['+i+']//button['+j+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async click_ip_record(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('//big-tab-nav/div[7]//mat-table/mat-row['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000, "Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(500);
    //     //return this;
    // }

    // async share_click_select_member_to_share(i: number) : Promise<void> {
    //     const elem = element(by.xpath ('(//h1[text() = "Share "]//following::mat-list-option//div[text() = " Elena Nenashev "])['+i+']'));
    //     await browser.wait(EC.elementToBeClickable(elem), 30000,"Element not visible timing out");
    //     await elem.click();
    //     await browser.sleep(200);
    // }

    // // ============== LOAD SPINNER ==============
    // async waitForProgressBarSpinner(wait_time = 120000) : Promise<void> {
    //     //await browser.wait(EC.visibilityOf(this.load_spinner),wait_time)
    //     await browser.wait(EC.invisibilityOf(this.progress_bar_spinner),wait_time)
    // }

}