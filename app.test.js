//beware of coverage    all get,post
//post: send params    expect(200)
'use strict';


const request = require("supertest");
const { response } = require("./app");

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
    test('GET the body of specific articles based with a wrong id', async () => {
        const response = await request(app)
            .get('/reqarticle?id=11')
        expect(response.statusCode).toBe(404)
        expect(response.text).toBe("\"Article 11 is out of range. Not found!\"")


    });
    describe('Test for the programme', () => {
        test('Post citation form returns Json body', async () => {
            const response = await request(app)
                .post('/newcite?id=2').send({
                    'referencenumber': "1",

                    'title': "Some Title",
                    'vol': "9",
                    'issue': "14",
                    'pp': "25-30",
                    'month': "Decomber",
                    'day': "15",
                    'year': "2021",
                    'doi': "https://doi.org/10.1016/j.ijdrr.2022.102795",
                    'authors': [{
                        'initial': "Peter",
                        'surname': "Launs"
                    }]

                })
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.status).toBe(200)
            expect(response.text).toBe("\"\\n        P, Launs\\n        \\n        . (2021), Some Title, 9(14), 25-30. doi:\\nhttps://doi.org/10.1016/j.ijdrr.2022.102795\\n\"")





        });
        test('Post citation with wrong id form returns error', async () => {
            const response = await request(app)
                .post('/newcite?id=4').send({
                    'referencenumber': "1",

                    'title': "Some Title",
                    'vol': "9",
                    'issue': "14",
                    'pp': "25-30",
                    'month': "Decomber",
                    'day': "15",
                    'year': "2021",
                    'doi': "https://doi.org/10.1016/j.ijdrr.2022.102795",
                    'authors': [{
                        'initial': "Peter",
                        'surname': "Launs"
                    }]

                })
            expect(response.statusCode).toBe(404);



        });
    });
});
describe('test for adding comments using post method', () => {


    test('response is json', async () => {
        const response = await request(app)
            .post('/comments/addcomment?id=6').send({
                'name': 'somemathmatician123',
                'test': 'Overall, this is a clear, concise, and well-written manuscript'

            })
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));


    })
    test('response is 200', async () => {
        const response = await request(app)
            .post('/comments/addcomment?id=6').send({
                'name': 'somemathmatician123',
                'test': 'Overall, this is a clear, concise, and well-written manuscript'

            })
        expect(response.statusCode).toBe(200);


    })




});




