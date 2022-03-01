const express = require('express');
const app = express();

app.use(express.static(`client`));

var bodyParser = require('body-parser');const res = require('express/lib/response');
 app.use(bodyParser.urlencoded({ extended: false }));


let articles = [
    {
        "id":1,
        "title": "Why are we vaccinating children against COVID-19?",
        "author": [
            {
            "name":"",
            "authorID":""
            }
        ],
        "publisher":"",
        "publishinfo":[

            {
                "Volume":"8",
                "Issue no":"n/a"
            }
        ],
        "date": "2021",
        "doi":"https://doi.org/10.1016/j.toxrep.2021.08.010",
        
        
        "image": "/pictures/covidarticle.jpg",
        "highlights":"<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities <Br> <Br>Per capita COVID-19 deaths are negligible in children.</p>",
        "abstract": "blahblahblah</p>",
        "comments": [
            {
                "name": "abcd12",
                "text": "das ist ganz gut"
            },
            
            {
                "Name": "plxy99",
                "Text": "doch!"
            }
        ]
    },
    {
        "id":2,
        "title": "Total coloring of recursive maximal planar graphs",
        "author": [
            {
            "name":"YangyangZhou",
            "authorID":1
            },
            {
                "name":"DongyangZhao",
                "authorID":2
            },
            {
                "name":"MingyuanMa",
                "authorID":3
            },
            {
                "name":"JinXu",
                "authorID":4
            }
            
            
               
        ],
        "publisher":"",
        "publishinfo":[

            {
                "Volume":"8",
                "Issue no":"n/a"
            }
        ],
        "date": "2021",
        "doi":"https://doi.org/10.1016/j.tcs.2022.01.024",
        
        
        "image": "/pictures/A-3-connected-maximal-planar-graph-with-d-5-First-suppose-that-d-T-5-In-this-case.png",
        "highlights":"<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities <Br> <Br>Per capita COVID-19 deaths are negligible in children.</p>",
        "abstract": "blahblahblah</p>",
        "comments": [
            {
                "name": "abcd12",
                "text": "das ist ganz gut"
            },
            
            {
                "name": "plxy99",
                "text": "doch!"
            }
        ]
    }
]

let reftype=["Harvard","Vancouver","IEEE"]
    
let references = []






app.get('/articles', function (req, resp){
    resp.json(articles);

});


//search for title by keyword, return the suitabble title
app.get('/searchpoint',function(req,resp){
    const search = req.query.search;
    let results = [];
    //let keyword = []
  
    for (let i = 0; i < articles.length;i++){
  
      let article = articles[i];
      if (article.title.includes(search)){
        //insert at the last postion of the array
        results.push(article.title);
      } 
    //   else {
    //     resp.send("no match, please try again later!")

    //   }
      
  
    }
    resp.format({
        "text.html":()=>{
            resp.send(`
                <h1 class="example" ></h1> 
                <h2 >The required Doi of  ${search} is ${results} </h2>  `);
            
            
        }
        
    })
    //resp.send(results);
  });

//create your own citation using app.post
app.post('/new', function (req,resp){



    console.log("got request");
    console.log(req.body);

    const ref_no = req.body.ref_no;
    const initial = req.body.initial;
    const surname = req.body.surname;
    const author ={
    

    
        "initial":initial,
        "surname":surname


    };
    const initials =[];
    initials.push(author);
    const title = req.body.title;


    const referencedata = {
    "reference number": ref_no,
    "initials":[{

    
        "initial":initials,
        "surname":surname

    }
    

    ],
    "title":title,
    // "type of publication":pub_type,
    // "date of publication":pub_date,
    // "doi":doi_href,
    // "url":href


    }

    references.push(referencedata);
    resp.json(references);



  
  


});










app.listen(8090);