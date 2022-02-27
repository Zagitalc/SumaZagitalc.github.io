const express = require('express');
const app = express();

app.use(express.static(`client`));

let articles = {
    "Title": "Why are we vaccinating children against COVID-19?",
    "AuthorID": 1,
    "Date": "2021",
    
    "Volume":"8",
    "Issue no":"",
    "Image": "",
    "Abstract": "blahblahblah</p>",
    "Comments": [
        {
            "Name": "abc",
            "Text": ""
        },
        
        {
            "Name": "YouMadBroda",
            "Text": ""
        }
    ]
}
app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);