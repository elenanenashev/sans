import request from "supertest";
import { describe, expect, beforeAll, jest } from '@jest/globals';
import moment from 'moment';

describe(" Post Tests ", () => {

    
    let base_url="https://httpbin.org/"
    var jsonData :any;
    var result :any;
    var resp :any;
    jest.setTimeout(600000);

    let dt = new Date();

    let current_date = new Date (dt);
    current_date.setUTCFullYear (current_date.getUTCFullYear());
    current_date.setUTCDate (current_date.getUTCDate());

    let today_date = moment (current_date).valueOf();

    let postBody = { 
        "name": "Princess Consuella",
        "description": "A Queen of wonderland",
        "subjects": [
            { "name": "Rabbit", "title":"Bunny", "age": 123, "is_loyal": true },
            { "name": "Alice", "title":"Curious", "age": 12, "is_loyal": true },
            { "name": "Fox", "title":"Red", "age": 99, "is_loyal": false },
        ]
    }

    beforeAll(async function() {

        result = await request(base_url)
            .post("post")
            .send(postBody)

        jsonData = await JSON.parse(result.text).json

    });

    it("verify status code is 200", async () => {
        expect(result.statusCode).toEqual(200);
    });

    it("Verify post response ", async () => {
        // console.log(jsonData)
        expect(jsonData.name).toEqual("Princess Consuella");
        expect(jsonData.subjects.length).toEqual(3)
    });

    it("Verify loyal subject count ", async () => {
        expect(jsonData.subjects.filter((x)=>x.is_loyal==true).length).toEqual(2)
    });

    it("Verify age ", async () => {
        jsonData.subjects.forEach((s) => {
            // console.log(s.age)
            expect(/\d/.test(s.age)).toBe(true)
            expect(s.age).toBeGreaterThan(10)
        });
        
    });

});