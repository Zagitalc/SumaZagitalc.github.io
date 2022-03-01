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
                "name":"Ronald N.Kostoff",
                "authorID":""
            },
            {
                "name":"Daniel Calina",
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
    },
    {
        "id":3,
        "title": "A Real Time Processing system for big data in astronomy: Applications to HERA",
        "author": [
            {
                "name":"Ronald N.Kostoff",
                "authorID":""
            },
            {
                "name":"Daniel Calina",
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
        "doi":"https://doi.org/10.1016/j.ascom.2021.100489",
        
        
        "image": "/pictures/escape-paper-astornomy.jpg",
        "highlights":"<p>MethodsData analysis — Physical sciences and engineeringAstronomy — SoftwareData analysis — SoftwareDevelopment</p>",
        "abstract": "<p>As current- and next-generation astronomical instruments come online, they will generate an unprecedented deluge of data. Analyzing these data in real time presents unique conceptual and computational challenges, and their long-term storage and archiving is scientifically essential for generating reliable, reproducible results. We present here the real-time processing (RTP) system for the Hydrogen Epoch of Reionization Array (HERA), a radio interferometer endeavoring to provide the first detection of the highly redshifted 21 cm signal from Cosmic Dawn and the Epoch of Reionization by an interferometer. The RTP system consists of analysis routines run on raw data shortly after they are acquired, such as calibration and detection of radio-frequency interference (RFI) events. RTP works closely with the Librarian, the HERA data storage and transfer manager which automatically ingests data and transfers copies to other clusters for post-processing analysis. Both the RTP system and the Librarian are public and open source software, which allows for them to be modified for use in other scientific collaborations. When fully constructed, HERA is projected to generate over 50 terabytes (TB) of data each night, and the RTP system enables the successful scientific analysis of these data.</p>",
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