//beware of coverage    all get,post
//post: send params    expect(200)
'use strict';


const request = require("supertest");

//const request = require(supertest)
const app = require('./app');

describe('Test for the programme', () => {

    test('GET the list of articles returns JSON', () => {
        return request(app)
            .get('/articles')
            .expect('content-type', /json/);



    });
    test('GET the list of articles includes author Xiaohui Wang', () => {
        return request(app)
            .get('/articles')
            .expect(/Xiaohui Wang/);
    });


});





//app.listen(8090);