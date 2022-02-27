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
    "Highlights":"<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities <Br> <Br>Per capita COVID-19 deaths are negligible in children.</p>",
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
    "DOI":"https://doi.org/10.1016/j.toxrep.2021.08.010",
    "URL":""


}


app.get('/articles', function (req, resp){
    resp.json(articles);
});

app.listen(8090);