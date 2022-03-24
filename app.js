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
        "highlights": `<p>Bulk of COVID-19 per capita deaths occur in elderly
         with high comorbidities 
         <Br> 
         <Br>Per capita COVID-19 deaths are negligible in children.
         </p>
         
         `,
        "abstract": `
        
        This article examines issues related to COVID-19 inoculations for children. 
        The bulk of the official COVID-19-attributed deaths per capita occur in the 
        elderly with high comorbidities, and the COVID-19 attributed deaths per capita 
        are negligible in children. The bulk of the normalized post-inoculation deaths 
        also occur in the elderly with high comorbidities, while the normalized post-inoculation 
        deaths are small, but not negligible, in children. Clinical trials for these inoculations
        were very short-term (a few months), had samples not representative of the total 
        population, and for adolescents/children, had poor predictive power because of their
        small size. Further, the clinical trials did not address changes in biomarkers that 
        could serve as early warning indicators of elevated predisposition to serious diseases. 
        Most importantly, the clinical trials did not address long-term effects that, if serious,
        would be borne by children/adolescents for potentially decades.

        A novel best-case scenario cost-benefit analysis showed very conservatively that there are five times the number of deaths attributable to each inoculation vs those attributable to COVID-19 in the most vulnerable 65+ demographic. The risk of death from COVID-19 decreases drastically as age decreases, and the longer-term effects of the inoculations on lower age groups will increase their risk-benefit ratio, perhaps substantially.


        `,
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
        "highlights": `</p>Total Coloring Conjecture holds for recursive maximal planar graphs.
        <br>
        <br>
        (2,2)-recursive maximal planar graphs are totally (Δ + 1)-colorable.
        <br>
        <br>
        Linear time algorithms are given for total coloring of recursive maximal planar graphs 
        and (2,2)-recursive maximal planar graphs, respectively
        </p>
        `,
        "abstract": `
        
        The recursive maximal planar graphs can be obtained from , by embedding a 3-vertex 
        in a triangular face continuously. A total k-coloring of a graph G is a coloring of 
        its vertices and edges such that no two adjacent or incident elements receive the same 
        color. The Total Coloring Conjecture, in short, TCC, states that every simple graph G 
        is totally -colorable, where Δ is the maximum degree of G. In this paper, we prove that
        TCC holds for recursive maximal planar graphs, especially, a main class of recursive
        maximal planar graphs, named (2,2)-recursive maximal planar graphs, are totally 
        -colorable. Moreover, we give linear time algorithms for total coloring of recursive
        maximal planar graphs and (2,2)-recursive maximal planar graphs, respectively.
        `,
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
        "highlights": `MethodsData analysis — Physical sciences and engineeringAstronomy — 
        SoftwareData analysis — SoftwareDevelopment</p>
        </p>
        `,
        "abstract": `<p>As current- and next-generation astronomical instruments come online, 
        they will generate an unprecedented deluge of data. Analyzing these data in real time 
        presents unique conceptual and computational challenges, and their long-term storage 
        and archiving is scientifically essential for generating reliable, reproducible results.
         We present here the real-time processing (RTP) system for the Hydrogen Epoch of 
         Reionization Array (HERA), a radio interferometer endeavoring to provide the first 
         detection of the highly redshifted 21 cm signal from Cosmic Dawn and the Epoch of 
         \Reionization by an interferometer. The RTP system consists of analysis routines run
          on raw data shortly after they are acquired, such as calibration and detection of 
          radio-frequency interference (RFI) events. RTP works closely with the Librarian, the
           HERA data storage and transfer manager which automatically ingests data and transfers
            copies to other clusters for post-processing analysis. Both the RTP system and the 
            Librarian are public and open source software, which allows for them to be modified 
            for use in other scientific collaborations. When fully constructed, HERA is projected
             to generate over 50 terabytes (TB) of data each night, and the RTP system enables the
              successful scientific analysis of these data.</p>`,
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
        "highlights": `Focus on informal education of local residents rather than formal 
        education in schools. PSM is used to eliminate the bias in the estimation results 
        caused by sample selection Different dimensions of risk perception are considered.
        Policy suggestions on disaster education methods were put forward to guide scientific 
        risk perception.
        </p>
        
        
        `,
        "abstract": `
        Abstract
        Improving the risk perception of rural residents is an important factor in disaster 
        risk reduction (DRR) activities. For residents in geohazard-prone areas, disaster 
        education may affect the formation of risk perception. To verify this hypothesis, 
        residents' disaster risk perception is measured in four dimensions using data from 516
         rural households in four typical geohazard-prone areas. Then, propensity score matching 
         (PSM) is used to explore the influence relationship. Disaster education is divided into
          three forms: emergency brochures, classroom training and evacuation drills. There are 
          five main findings. (1) In the four dimensions of risk perception, rural residents 
          have higher perception scores regarding fear and the unknown and lower perception 
          scores regarding possibility and control. (2) Different types of disaster education 
          have a positive impact on risk perception. (3) Among the three disaster education 
          methods of emergency brochures, classroom training and evacuation drills, classroom 
          training has the greatest effect on risk perception. (4) Different types of disaster 
          education have different effects on different dimensions of risk perception. (5) On 
          the whole, the combination of disaster education methods has a greater impact on rural
           residents' risk perception than a single form of disaster education. One of the main 
           groups for whom disaster resilience is relevant is rural residents in geohazard-prone
            areas. These findings will provide a basis for promoting people's participation in 
            disaster risk reduction, help local governments develop effective risk communication 
            strategies and improve community resilience in mountainous areas.
        
        `,
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
    console.log('got req');
    const id = req.query.id

    for (let i = 0; i < articles.length; i++) {

        console.log('id ist', id)
        let article = articles[i];
        console.log(article.id)
        if (articles[i].id == id) {
            //insert at the last postion of the array
            console.log('article ist', article)
            res.json(article)
        }

    };
    //res.json();


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

    console.log("n server .js", references);
    res.json(references.at(-1));
});


module.exports = app;


