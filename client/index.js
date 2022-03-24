// const res = require("express/lib/response");

const main = document.getElementById("myhome")
const divContainer = document.getElementById("articlecontainer");
const homartDiv = document.getElementById("homearticlediv")
const searchrst = document.getElementById("searchresult")
const citeresult = document.getElementById("citeresult")
const fullresult = document.getElementById("fullarticle")


function loadmain() {
  main.style.display = "block"
  homartDiv.style.display = "block"
  divContainer.style.display = "none"
  fullresult.style.display = "none"

}
function loadsearchrst() {
  divContainer.style.display = "block"
  main.style.display = "none"
  searchrst.style.display = "block"
  homartDiv.style.display = "none"
  fullresult.style.display = "none"


}
function loadFullPage() {
  fullresult.style.display = "block"
  divContainer.style.display = "none"
  main.style.display = "none"
  searchrst.style.display = "none"
  homartDiv.style.display = "none"


}

function author(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.name}`
  }).join(', ')}
  </h5>
  `
}






const homebtns = document.querySelectorAll(".tohome")
  .forEach(homebtn => {
    //const homebtn = document.getElementById("homebtn")
    homebtn.addEventListener("click", function () {

      loadmain();
      window.scrollTo(0, 0);



    });

  });

//load article on homepage
async function loadarticleJson() {
  const response = await fetch('http://127.0.0.1:8090/articles');

  const data = await response.json();
  return data;

}

//load all articles from json
window.addEventListener("DOMContentLoaded", async (event) => {

  event.preventDefault()


  try {
    const homearticles = await loadarticleJson();

    //const divContainer = document.getElementById("articlecontainer");



    homearticles.forEach(article => {

      homartDiv.innerHTML +=
        `<hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7">
            <h3 class="featurette-heading">  ${article.title} . <h5 class="text-muted">${article.date}.</span></h5>
                
            <p class="lead">${article.highlights.substring(0, 100)}... </p>
            <p class="lead">${article.authors ? author(article.authors) : ''}</p>
            <p class="lead">DOI:<a class="lead" href="${article.doi}"> ${article.doi}</a></p>
          </div>
          <div class="col-md-5">
            <img  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500"
              src="${article.image}"  aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
              
              <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
            </img>
            </br>
            </br>
            <p><button class="btn btn-lg btn-primary loadMore" onclick ='showFull()' id="loadMore" name="loadMore"   method ='get' value='${article.id}' >Load More</button></p>
          </div>

       `;
      //readmore to load specific articles
      //href='/articles?id=${article.id}'
      //onclick ='showFull()'

    });


  } catch (e) {

    console.log(e);

  }
});



//load full article based on specific article
//console.log(x)
function showFull() {
  const buttons = document.querySelectorAll('.loadMore')

  //console.log(buttons[0]);
  buttons.forEach(button => {


    button.addEventListener('click', async (event) => {
      const id = button.value
      console.log('xxxxxxxx', id)
      event.preventDefault();
      console.log(id)



      //console.log(id)


      const response = await fetch('http://127.0.0.1:8090/reqarticle?id=' + id);

      console.log(response)
      const fullarticle = await response.json();
      console.log('fullarticle is', fullarticle)

      const template =
        ` 
      <hr class="featurette-divider">
      <div class="row featurette">
      <div class="col-md-5">
          <img  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
          height="500"
             src="${fullarticle.image}"  aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </img>
          </br>
          </br>
          
        </div>
        <div class="col-md-7">
          <h3 class="featurette-heading">  ${fullarticle.title} .</h3> <h5 class="text-muted">${fullarticle.date}.</span></h5>
                
            <p class="lead">${fullarticle.highlights}</p>
            
            <p class="lead">${fullarticle.authors ? author(fullarticle.authors) : ''}</p>
            <p class="lead">DOI:<a class="lead" href="${fullarticle.doi}"> ${fullarticle.doi}</a></p>

            <h4 class="featurette-heading">Abstract</h4>
            <p class="lead">${fullarticle.abstract}</p>
        </div
        
      </div >
      
      
      
      
      
      `
      console.log(template);
      fullresult.innerHTML = ''

      fullresult.innerHTML += template
      loadFullPage()
      window.scrollTo(0, 0);

    });

  });
}





function authordetails(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.initial}, ${author.surname}`
  }).join(', ')}
  </h5>
  `
}



//search and load related articles
async function loadJson(params) {
  const response = await fetch('http://127.0.0.1:8090/searchpoint?' + params);
  //method :'GET'
  //console.log("got respose");
  const data = await response.json();
  return data;

}

const sf = document.getElementById("searchform")
sf.addEventListener("submit", async (event) => {

  event.preventDefault()
  const data = new FormData(sf)
  const params = new URLSearchParams(data)
  console.log(params);

  try {
    const articles = await loadJson(params);


    divContainer.innerHTML = ""
    divContainer.innerHTML =
      `<hr class="featurette-divider">
        <div class="col-md-7">
          <h3  class="text-center"> Search Results.</h3>
              
        </div>
    `
    console.log(divContainer);


    articles.forEach(article => {

      divContainer.innerHTML +=
        `<hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">  ${article.title} . <span class="text-muted">${article.date}.</span></h3>
              
          <p class="lead">${article.highlights} </p>
          <p class="lead">${article.authors ? author(article.authors) : ''}</p>
          <p class="lead">DOI:<a class="lead" href="${article.doi}"> ${article.doi}</a></p>
        </div>
        <div class="col-md-5">
          <img  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
          height="500"
             src="${article.image}"  aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </img>
          </br>
          </br>
          <p><button class="btn btn-lg btn-primary loadMore" onclick ='showFull()' id="loadMore" name="loadMore"   method ='get' value='${article.id}' >Load More</button></p>

        </div>

       `;




    });

    loadsearchrst()
    window.scrollTo(0, 0);


  } catch (e) {
    this.alert(e);
    console.log(e);

  }
});


//add form fields with reference to https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
function addFields() {

  var number = document.getElementById("selectaddfield").value;

  var container = document.getElementById("inputcontainer");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < number; i++) {
    // Append a node with a random text
    container.appendChild(document.createTextNode("surname " + (i + 1)));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "surname";
    input.id = 'surname'
    container.appendChild(input);



    // Append a line break 
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    container.appendChild(document.createTextNode("initial " + (i + 1)));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "initial";
    input.id = 'initial'
    container.appendChild(input);



    // Append a line break 
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));


    console.log('container', container);
  }
}





// post a citation in json
// returned a cited json string
let citeform = document.getElementById("submit_citation");
citeform.addEventListener("click", async function (event) {
  event.preventDefault();
  let ref_no = document.getElementById('refno').value;


  let initial = document.getElementsByName('initial');

  let surname = document.getElementsByName('surname');

  let authors = []

  let initval = ''
  for (var i = 0; i < initial.length; i++) {
    let author = {
      'initial': initial[i].value,
      'surname': surname[i].value
    };


    authors.push(author)
  };


  let title = document.getElementById('title').value;
  let volume = document.getElementById('vol').value;
  let issue = document.getElementById('i').value;
  let pageno = document.getElementById('pp').value
  let month = document.getElementById('mon').value;
  let day = document.getElementById('day').value;
  let year = document.getElementById('year').value;
  let doi = document.getElementById('doi').value;

  let referencedata = {
    'referencenumber': ref_no,

    'title': title,
    'vol': volume,
    'issue': issue,
    'pp': pageno,
    'month': month,
    'day': day,
    'year': year,
    'doi': doi,
    'authors': authors

  };
  //references.push(referencedata);
  if (validateForm(title, volume, issue) != false) {
    let response = await fetch('http://127.0.0.1:8090/newcite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(referencedata)
    });

    let body = await response.json();
    console.log('body is', body);

    try {

      citeresult.innerHTML = "Your Citation Here:";
      console.log("got request")
      console.log(body);
      //console.log(citedata);


      //only return the last updated list of referencedata to index.js
      console.log('body.length', body.length)

      let item = document.createElement('li')
      item.innerHTML = ''
      item.innerHTML = body;
      citeresult.appendChild(item);

    } catch (e) {

      console.log(e);

    }
  }
});

function validateForm(title, volume, issue) {



  if (title, volume, issue == "") {
    alert("Name must be filled out");
    return false;
  }

}






