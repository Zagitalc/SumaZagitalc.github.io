const express = require('express');
const app = express();

app.use(express.static(`client`));
app.use(express.json());

var bodyParser = require('body-parser'); const res = require('express/lib/response');
const { init } = require('express/lib/application');
app.use(bodyParser.urlencoded({ extended: false }));


const articles = [
    {
        "id": 1,
        "title": "Why are we vaccinating children against COVID-19 ?",
        "authors": [
            {
                "name": "Ronald N.Kostoff",
                "authorID": ""
            },
            {
                "name": "Daniel Calina",
                "authorID": ""
            }
        ],
        "publisher": "",
        "publishinfo": [

            {
                "Volume": "8",
                "Issue no": "n/a"
            }
        ],
        "date": "2021",
        "doi": "https://doi.org/10.1016/j.toxrep.2021.08.010",


        "image": "/pictures/covidarticle.jpg",
        "highlights": "<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities <Br> <Br>Per capita COVID-19 deaths are negligible in children.</p>",
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
        "id": 2,
        "title": "Total coloring of recursive maximal planar graphs ",
        "authors": [
            {
                "name": "YangyangZhou",
                "authorID": 1
            },
            {
                "name": "DongyangZhao",
                "authorID": 2
            },
            {
                "name": "MingyuanMa",
                "authorID": 3
            },
            {
                "name": "JinXu",
                "authorID": 4
            }



        ],
        "publisher": "",
        "publishinfo": [

            {
                "Volume": "8",
                "Issue no": "n/a"
            }
        ],
        "date": "2021",
        "doi": "https://doi.org/10.1016/j.tcs.2022.01.024",


        "image": "/pictures/A-3-connected-maximal-planar-graph-with-d-5-First-suppose-that-d-T-5-In-this-case.png",
        "highlights": "<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities <Br> <Br>Per capita COVID-19 deaths are negligible in children.</p>",
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
        "id": 3,
        "title": "A Real Time Processing system for big data in astronomy: Applications to HERA",
        "authors": [
            {
                "name": "P.La Plante ",
                "authorID": ""
            },
            {
                "name": "P.K.G.Williams",
                "authorID": ""
            },
            {
                "name": "M.Kolopanis",
                "authorID": ""
            }
        ],
        "publisher": "",
        "publishinfo": [

            {
                "Volume": "8",
                "Issue no": "n/a"
            }
        ],
        "date": "2021",
        "doi": "https://doi.org/10.1016/j.ascom.2021.100489",


        "image": "/pictures/escape-paper-astornomy.jpg",
        "highlights": "MethodsData analysis — Physical sciences and engineeringAstronomy — SoftwareData analysis — SoftwareDevelopment</p>",
        "abstract": `"<p>As current- and next-generation astronomical instruments come online, they will generate an unprecedented deluge of data. Analyzing these data in real time presents unique conceptual and computational challenges, and their long-term storage and archiving is scientifically essential for generating reliable, reproducible results. We present here the real-time processing (RTP) system for the Hydrogen Epoch of Reionization Array (HERA), a radio interferometer endeavoring to provide the first detection of the highly redshifted 21 cm signal from Cosmic Dawn and the Epoch of Reionization by an interferometer. The RTP system consists of analysis routines run on raw data shortly after they are acquired, such as calibration and detection of radio-frequency interference (RFI) events. RTP works closely with the Librarian, the HERA data storage and transfer manager which automatically ingests data and transfers copies to other clusters for post-processing analysis. Both the RTP system and the Librarian are public and open source software, which allows for them to be modified for use in other scientific collaborations. When fully constructed, HERA is projected to generate over 50 terabytes (TB) of data each night, and the RTP system enables the successful scientific analysis of these data.</p>"`,
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
        "id": 4,
        "title": "Identifying the influence of disaster education on the risk perception of rural residents in geohazard-prone areas: A propensity score-matched study",
        "authors": [
            {
                "name": "Xiaohui Wang",
                "authorID": ""
            },
            {
                "name": "Li Peng  Wei Dengab",
                "authorID": ""
            },
            {
                "name": "Kexin Huang ",
                "authorID": ""
            },
            {
                "name": " Wei Dengab",
                "authorID": ""
            }
        ],
        "publisher": "",
        "publishinfo": [

            {
                "Volume": "71",
                "Issue no": "n/a"
            }
        ],
        "date": "March 2021",
        "doi": "https://doi.org/10.1016/j.ijdrr.2022.102795",


        "image": "/pictures/riskreduction.jpg",
        "highlights": `"Focus on informal education of local residents rather than formal education in schools. PSM is used to eliminate the bias in the estimation results caused by sample selection Different dimensions of risk perception are considered.Policy suggestions on disaster education methods were put forward to guide scientific risk perception."`,
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
    }

]

let reftype = ["Harvard", "Vancouver", "IEEE"];
let references = ["This message is to remind you to make a validate form function "];






//database for all articles
app.get('/articles', function (req, resp) {
    resp.json(articles);

});



//search for title by keyword, return the suitabble title
app.get('/searchpoint', function (req, res) {
    const search = req.query.search;
    let results = [];

    if (search == '') {
        res.send(results)
        return

    }
    for (let i = 0; i < articles.length; i++) {

        let article = articles[i];
        if (article.title.includes(search)) {
            //insert at the last postion of the array
            results.push(article);
        }

    };
    res.json(results)

});

//load specified articles based on id
app.get('/reqarticle', function (req, res) {

    for (let i = 0; i < articles.length; i++) {

        let article = articles[i];
        if (article.title.includes(search)) {
            //insert at the last postion of the array
            results.push(article);
        }

    };
    res.json();


});









//create your own citation using app.post
app.post('/newcite', function (req, res) {

    console.log("got request");

    console.log("req body is", req.body);



    const referencenumber = req.body.referencenumber;

    const authors = req.body.authors

    const title = req.body.title;
    const volume = req.body.vol;
    const issue = req.body.issue;
    const pageno = req.body.pp;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const doi = req.body.doi;

    function mapauthor(authors) {
        return `
        ${authors.map(function (author) {
            return `${[author.initial.slice(0, 1).toUpperCase(), author.surname.slice(0, 1).toUpperCase()].filter(Boolean).join(', ')}
        `
        }).filter(Boolean).join('. ')}
        `
    };

    //initial + ", " + surname
    //+ '. "' +

    referencedata = "[" + referencenumber + "] " + mapauthor(authors) + '. ' + title + '", vol. ' + volume + ", no. " + issue + ", pp. " + pageno
        + month + ". " + day + ". " + year + ". doi:\n" + doi
    // const author = {
    console.log("reference data is", referencedata);




    references.push(referencedata);
    console.log("ref data is", referencedata);
    console.log("n server .js", references);
    res.json(references);
});


module.exports = app;


