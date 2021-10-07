import { browser, ElementFinder} from 'protractor';
import { ExpectedConditions as EC } from 'protractor';
 
export class ActionsPage { 

    page_header_string  : String;
    page_header_elem    : ElementFinder;

    show_markers_string : String;
    show_markers_elem   : ElementFinder;

    saved_locations_string : String;
    saved_locations_elem   : ElementFinder;

    saved_fences_string : String;
    saved_fences_elem   : ElementFinder;

    device_names_string : String;
    device_names_elem   : ElementFinder;

    saved_ips_string    : String;
    saved_ips_elem      : ElementFinder;

    new_device_elem     : ElementFinder;

    // =================== METHODS ===================

    async waitLoadSavedLocationsButton (wait_time = 30000) : Promise<void> {
        await browser.wait(EC.visibilityOf(this.saved_locations_elem), wait_time)
    }

    async waitLoadSavedDevicesButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.device_names_elem), wait_time)
    }

    async waitLoadSavedIpsButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.saved_ips_elem), wait_time)
    }

    async waitNewDeviceButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.new_device_elem), wait_time)
    }

    async waitShowMarkersToggle (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.show_markers_elem), wait_time)
    }

    async checkHeader (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.page_header_elem), wait_time)
        await expect (this.getElemText(this.page_header_elem)).toEqual(this.page_header_string);
    }

    async checkShowMarkersLabel (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.show_markers_elem), wait_time)
        await expect (this.getElemText(this.show_markers_elem)).toEqual(this.show_markers_string);
    }

    async checkLoadSavedLocationsButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.saved_locations_elem), wait_time)
        await expect (this.getElemText(this.saved_locations_elem)).toEqual(this.saved_locations_string);
    }

    async checkLoadSavedGeoFencesButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.saved_fences_elem), wait_time)
        await expect (this.getElemText(this.saved_fences_elem)).toEqual(this.saved_fences_string);
    }

    async checkLoadSavedDevicesButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.device_names_elem), wait_time)
        await expect (this.getElemText(this.device_names_elem)).toEqual(this.device_names_string);
    }

    async checkLoadSavedIPsButton (wait_time = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(this.saved_ips_elem), wait_time)
        await expect (this.getElemText(this.saved_ips_elem)).toEqual(this.saved_ips_string);
    }
   
    async click(elem: ElementFinder, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.elementToBeClickable(elem), wait_time, "Element not visible timing out");
        await elem.click();
        await browser.sleep(200);
    }

    async getElemText(elem: ElementFinder, wait_time : number = 30000): Promise<string> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        return elem.getText();
    }

    async clear(elem: ElementFinder, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        await elem.clear();
        await browser.sleep(200);
    }

    async sendKeys(elem: ElementFinder, keys: string, times: Number = 1, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        for (let i = 0; i< times;i++){
            await elem.sendKeys(keys);
        } 
        await browser.sleep(200);
    }

}

