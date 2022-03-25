const express = require('express');
const app = express();

app.use(express.static(`client`));
app.use(express.json());

var bodyParser = require('body-parser');
const res = require('express/lib/response');
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
        "highlights": `<p>Bulk of COVID-19 per capita deaths occur in elderly with high comorbidities.</p>

        
        <p>• Per capita COVID-19 deaths are negligible in children.</p>
        
        
        <p>• Clinical trials for these inoculations were very short-term.</p>
        
        
        <p>• Clinical trials did not address long-term effects most relevant to children.</p>
        
        
        <p>• High post-inoculation deaths reported in VAERS (very short-term).</p>
         
         
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
                "authorID": 1
            },
            {
                "name": "P.K.G.Williams",
                "authorID": 2
            },
            {
                "name": "M.Kolopanis",
                "authorID": 3
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
    },
    {
        "id": 5,
        "title": `Reducing deforestation and improving livestock productivity: greenhouse gas 
        mitigation potential of silvopastoral systems in Caquetá`,
        "authors": [
            {
                "name": "David M Landholm ",
                "authorID": 1
            },
            {
                "name": "Prajal Pradhan",
                "authorID": 2
            },
            {
                "name": "Peter Wegmann",
                "authorID": 3
            }
        ],
        "publisher": "Environmental Research Letters",
        "publishinfo": [

            {
                "Volume": "14",
                "Issue no": "11"
            }
        ],
        "date": "2019",
        "doi": "https://doi.org/10.1088/1748-9326/ab3db6",


        "image": "/pictures/article5.jpg",
        "highlights": `<p>The agriculture, forestry and other land use (AFOLU) sector accounts
        for 23% of net global anthropogenic greenhouse gas (GHG) emissions [1]. In order to 
        achieve global climate targets, land use (LU) GHG emissions must decrease along a nonlinear 
        trajectory and reach carbon neutrality by 2050 [2]. Although commercial agriculture expansion 
        [3] is now considered the main driver of deforestation, subsistence agriculture still plays a 
        major role in deforestation dynamics in many regions [4].
        </p>
        
        `,
        "abstract": `<p>Abstract
        Colombia's agriculture, forestry and other land use sector accounts for nearly half
         of its total greenhouse gas (GHG) emissions. The importance of smallholder deforestation
        is comparatively high in relation to its regional counterparts, and livestock agriculture 
        represents the largest driver of primary forest depletion. Silvopastoral systems (SPSs) 
        are presented as agroecological solutions that synergistically enhance livestock productivity,
        improve local farmers' livelihoods and hold the potential to reduce pressure on forest conversion.
        The department of Caquetá represents Colombia's most important deforestation hotspot. Targeting
        smallholder livestock farms through survey data, in this work we investigate the GHG mitigation
        potential of implementing SPSs for smallholder farms in this region. Specifically, we assess 
        whether the carbon sequestration taking place in the soil and biomass of SPSs is sufficient to
        offset the per-hectare increase in livestock GHG emissions resulting from higher stocking rates.
        To address these questions we use data on livestock population characteristics and historic land 
        cover changes reported from a survey covering 158 farms and model the carbon sequestration occurring
        in three different scenarios of progressively-increased SPS complexity using the CO2 fix model. We 
        find that, even with moderate tree planting densities, the implementation of SPSs can reduce GHG 
        emissions by 2.6 Mg CO2e ha 1 yr 1 in relation to current practices, while increasing agriculture 
        productivity and contributing to the restoration of severely degraded landscapes.</p>`,
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
        "id": 6,
        "title": "Space Radiation Biology for “Living in Space”",
        "authors": [
            {
                "name": "Satoshi Furukawa ",
                "authorID": 1
            },
            {
                "name": "Aiko Nagamatsu",
                "authorID": 2
            },
            {
                "name": "Mitsuru Nenoi",
                "authorID": 3
            }
        ],
        "publisher": "BioMed Research International",
        "publishinfo": [

            {
                "Volume": "n/a",
                "Issue no": "n/a"
            }
        ],
        "date": "2020",
        "doi": "https://doi.org/10.1155/2020/4703286",


        "image": "/pictures/article6.jpg",
        "highlights": `<p>Yuri Gagarin was the first human to journey into outer space. 
        He completed one orbit of Earth on 12 April 1961. Almost 60 years have passed 
        since this event, and space mission durations have remarkably extended. </p>
        </p>
        `,
        "abstract": `<p>Space travel has advanced significantly over the last six decades
        with astronauts spending up to 6 months at the International Space Station. Nonetheless,
        
        the living environment while in outer space is extremely challenging to astronauts. 
        In particular, exposure to space radiation represents a serious potential long-term 
        threat to the health of astronauts because the amount of radiation exposure accumulates 
        during their time in space. Therefore, health risks associated with exposure to space 
        radiation are an important topic in space travel, and characterizing space radiation in
        detail is essential for improving the safety of space missions. In the first part of 
        this review, we provide an overview of the space radiation environment and briefly present
        current and future endeavors that monitor different space radiation environments. We then 
        present research evaluating adverse biological effects caused by exposure to various space
        radiation environments and how these can be reduced. We especially consider the deleterious
        effects on cellular DNA and how cells activate DNA repair mechanisms. The latest technologies 
        being developed, e.g., a fluorescent ubiquitination-based cell cycle indicator, to measure 
        real-time cell cycle progression and DNA damage caused by exposure to ultraviolet radiation are
        presented. Progress in examining the combined effects of microgravity and radiation to animals 
        and plants are summarized, and our current understanding of the relationship between 
        psychological stress and radiation is presented. Finally, we provide details about protective
        agents and the study of organisms that are highly resistant to radiation and how their 
        biological mechanisms may aid developing novel technologies that alleviate biological damage 
        caused by radiation. Future research that furthers our understanding of the effects of space 
        radiation on human health will facilitate risk-mitigating strategies to enable long-term space
         and planetary exploration.

        </p>`,
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

const reftypes = [
    {
        "id": 1,
        "name": "IEEE",
        "info": `
        [Reference number]	Initial. Surname, "Title of article," Title of journal, volume, issue number, pages, Abbreviated month day, year of publication.

        `,

    },
    {
        "id": 2,
        "name": "APA",
        "info": ` Author(s). (Year of publication). Title of article.
         Title of journal, Volume number(Issue), Page numbers.`,
    },
    {
        "id": 3,
        "name": "Vancouver",
        "info": `
        Reference number.	Author(s). Title of article. Title of journal.
         Date of publication; Volume(issue):page numbers.

        `,
    }
];

const references = ["This message is to remind you to make a validate form function "];






//database for all articles
app.get('/articles', function (req, resp) {




    if (articles == undefined || articles.length == 0) {
        resp.status(404).json("Articles are undefined so no articles can be fetched");
    }
    else {
        resp.json(articles);
    }


});



//search for title by keyword, return the suitabble title
app.get('/searchpoint', function (req, res) {
    const search = req.query.search;
    let results = [];

    if (search == '') {
        res.status(404).json("Nothing has been searched so no articles can be fetched");
        return

    }
    if (articles == undefined || articles.length == 0) {
        res.status(404).json("Articles are undefined so no articles can be fetched");
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
        else if (id > articles.length) {
            res.status(404).json(`Article ${id} is out of range. Not found!`);

        }

    };



});

//database for all science related citation types
app.get('/citations', function (req, res) {

    if (reftypes == undefined || reftypes.length == 0) {
        res.status(404).json("Citation types are undefined so no articles can be fetched");
    }
    else {
        res.json(reftypes);
    }


});

//gte  details of specific citation type
app.get('/citations/req', function (req, res) {
    console.log('got req');
    const id = req.query.id

    for (let i = 0; i < reftypes.length; i++) {

        console.log('id ist', id)
        let reftype = reftypes[i];
        console.log(reftype.id)
        if (reftypes[i].id == id) {

            console.log('this type of citation ist', reftype)
            res.json(reftype)
        }
        else if (id > reftypes.length) {
            res.status(404).json(`Article ${id} is out of range. Not found!`);

        }

    };

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

    const id = req.query.id
    console.log('in server, id ist', id);

    function mapauthor(authors) {
        if (authors != null) {
            return `
        ${authors.map(function (author) {
                return `${[author.initial.slice(0, 1).toUpperCase(), author.surname.substring(0, 1).toUpperCase() + author.surname.substring(1)].filter(Boolean).join(', ')}
        `
            }).filter(Boolean).join('. ')}
        `
        }
        else {
            console.log('not found');
            return
        }
    };
    var referencedata = 0
    console.log('hi')
    if (id == 1) {
        //IEE
        referencedata = "[" + referencenumber + "] " + mapauthor(authors) + '. "' + title + '", vol. ' + volume + ", no. " + issue + ", pp. " + pageno + ", "
            + month + ". " + day + ". " + year + ". doi:\n" + doi + '\n'
        // const author = {

    } else if (id == 2) {
        //APA 7TH
        referencedata = mapauthor(authors) + '. (' + year + '), ' + title + ', ' + volume + "(" + issue + "), " + pageno
            + ". doi:\n" + doi + '\n'

    } else if (id == 3) {
        //vancouver
        //surname first (full)
        referencedata = referencenumber + ".     " + mapauthor(authors) + '. "' + title + '",' + year + ". " + month + ". " + day + '; ' + volume + "(" + issue + "):" + pageno
            + ". doi:\n" + doi + '\n'


    }



    console.log("reference data is", referencedata);




    references.push(referencedata);

    console.log("n server .js", references);
    const k = res.json(references.at(-1));
    //console.log(k);
});


app.get('/citations/hist', function (req, res) {
    if (references == undefined || references.length == 0) {
        res.json('No history found')
        return
    }

    res.json(references);



});

module.exports = app;


