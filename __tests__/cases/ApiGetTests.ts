import request from "supertest";
import { describe, expect, beforeAll, jest } from '@jest/globals';
// import moment from 'moment';

function ValidateIPaddress(ipaddresses) {
    // could be csv string of ips
    // console.log(ipaddresses)
    ipaddresses.split(',').forEach(ip => {
        if ( ! /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(ip.trim()) ) {  
            return (false)  
          }  
    });

    return (true)  
  }  

describe(" Get Tests ", () => {

    
    let base_url="https://httpbin.org/"
    var jsonData :any;
    var result :any;
    var resp :any;
    jest.setTimeout(600000);

    beforeAll(async function() {

        result = await request(base_url)
            .get("/ip")

        jsonData = await JSON.parse(result.text)

    });

    it("verify status code is 200", async () => {
        expect(result.statusCode).toEqual(200);
    });

    it("Verify ip format ", async () => {
        // console.log(jsonData)
        expect(ValidateIPaddress(jsonData.origin)).toBe(true);
    });

});