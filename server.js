const express = require('express');
const app = express();

app.use(express.static(`client`));

let articles = {
    "Title": "Why are we vaccinating children against COVID-19?",
    "Author": [
        {
        "Name":"",
        "AuthorID":""
        }
    ],
    "publisher":"",
    "publishinfo":[

        {
            "Volume":"8",
            "Issue no":"n/a"
        }
    ],
    "Date": "2021",
    
    
    
    "Image": "",
    "Highlights":"",
    "Abstract": "blahblahblah</p>",
    "Comments": [
        {
            "Name": "abcd12",
            "Text": ""
        },
        
        {
            "Name": "plxy99",
            "Text": ""
        }
    ]
}

let reftype={
    "Harvard":"",
    "Vancouver":"",
    "IEEE":""

}

let referencedata = {
    "reference number":"[9]",
    "Initials":[{

    
        "Initial":"",
        "Surname":""

    }
    

    ],
    "Type of publication":"",
    "Date of publication":"",
    "DOI":"",
    "URL":""


}


app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);