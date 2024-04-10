import request from "supertest";
import { describe, expect, beforeAll, jest } from '@jest/globals';
import moment from 'moment';

function ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    return (false)  
  }  

describe(" Get Tests ", () => {

    
    let base_url="https://httpbin.org/"
    var jsonData :any;
    var result :any;
    var resp :any;
    jest.setTimeout(600000);

    // let dt = new Date();
    // let current_date = new Date (dt);
    // current_date.setUTCFullYear (current_date.getUTCFullYear());
    // current_date.setUTCDate (current_date.getUTCDate());
    // let today_date = moment (current_date).valueOf();


    beforeAll(async function() {

        result = await request(base_url)
            .get("/ip")


        jsonData = await JSON.parse(result.text)

        console.log(jsonData)
        

    });

    it("verify status code is 200", async () => {
        expect(result.statusCode).toEqual(200);
    });

    it("Verify ip format ", async () => {
        console.log(jsonData)
        expect(ValidateIPaddress(jsonData.origin)).toBe(true);
    });

});