import { browser, ElementFinder }   from 'protractor';
import { ExpectedConditions as EC } from 'protractor';
 
export class ActionsPage { 

    // =================== METHODS ===================


    async click (elem: ElementFinder, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.elementToBeClickable(elem), wait_time, "Element not visible timing out");
        await elem.click();
        await browser.sleep(200);
    }

    async getText (elem: ElementFinder, wait_time : number = 30000): Promise<string> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        return elem.getText();
    }

    async clear (elem: ElementFinder, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        await elem.clear();
        await browser.sleep(200);
    }

    async sendKeys (elem: ElementFinder, keys: string, times: number = 1, wait_time : number = 30000): Promise<void> {
        await browser.wait(EC.visibilityOf(elem), wait_time, "Element not visible timing out");
        await browser.sleep(200);
        for (let i = 0; i < times; i++){
            await elem.sendKeys(keys);
            await browser.sleep(200);
        } 
        await browser.sleep(200);
    }

    getRandomString(length):String {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() *  charactersLength));
       }
       return result;
      }

}

