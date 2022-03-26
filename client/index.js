

const main = document.getElementById("myhome")
const divContainer = document.getElementById("articlecontainer");
const homartDiv = document.getElementById("homearticlediv")
const searchrst = document.getElementById("searchresult")
const citeresult = document.getElementById("citeresult")
const citehistory = document.getElementById("allHistories")
const fullresult = document.getElementById("fullarticle")
const commentsection = document.getElementById('commentsection')

function loadmain() {
  main.style.display = "block"
  homartDiv.style.display = "block"
  divContainer.style.display = "none"
  fullresult.style.display = "none"
  commentsection.style.display = "none"
}
function loadsearchrst() {
  divContainer.style.display = "block"
  main.style.display = "none"
  searchrst.style.display = "block"
  homartDiv.style.display = "none"
  fullresult.style.display = "none"
  commentsection.style.display = "none"

}
function loadFullPage() {
  fullresult.style.display = "block"
  divContainer.style.display = "none"
  main.style.display = "none"
  searchrst.style.display = "none"
  homartDiv.style.display = "none"
  commentsection.style.display = "block"

}

function author(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.name}`
  }).join(', ')}
  </h5>
  `
};


function authordetails(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.initial}, ${author.surname}`
  }).join(', ')}
  </h5>
  `
}
function commentdetails(comments) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (comment) {
    return `
    <h4 class='lead'>${comment.name}</h4>
    <br>
    <br>
    <h5>${comment.text}<h5>`
  }).join('\n ')}
  </h5>
  `
}




function backHome() {

  const homebtns = document.querySelectorAll(".tohome")
    .forEach(homebtn => {
      //const homebtn = document.getElementById("homebtn")
      homebtn.addEventListener("click", function () {

        loadmain();
        window.scrollTo(0, 0);



      });

    });
}

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
                
            <h5 class="lead">${article.highlights.substring(0, 200)}... </h5>
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


  buttons.forEach(button => {


    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const id = button.value

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
        
        <div class="col-md-7">
          <h3 class="featurette-heading">  ${fullarticle.title} .</h3>
            <p class="lead"><h5 class="text-muted">${fullarticle.date}. ${fullarticle.publisher}</h5></p>
            
            <p class="lead">${fullarticle.authors ? author(fullarticle.authors) : ''}</p>
            <p class="lead">DOI:<a class="lead" href="${fullarticle.doi}"> ${fullarticle.doi}</a></p>

            <h4 class="featurette-heading">Highlights</h4>
            <h5 class="lead">${fullarticle.highlights}</h5>
            
           
            <h4 class="featurette-heading">Abstract</h4>
            <h5 class="lead">${fullarticle.abstract}</h5>
        </div>
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
      </div > 
      `
      const commentemplate = `
      <div class="col-md-5">
        <h4 class="featurette-heading">Comments</h4>
          <h5 class="lead">comments to be shown here</h5>
      </div>
      
      `
      fullresult.innerHTML = ''
      fullresult.innerHTML += template

      commentsection.innerHTML = ''
      commentsection.innerHTML += commentemplate

      const comments = fullarticle.comments
      for (var i = 0; i < comments.length; i++) {
        commentsection.innerHTML += `
        -${comments[i].name}

        -${comments[i].text}
        <br>
        <br>
        `

      }
      loadFullPage()
      window.scrollTo(0, 0);

    });

  });
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
              
          <h5 class="lead">${article.highlights.substring(0, 200)} ...</h5>
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


for (let i = 1; i < 4; i++) {

  // post a citation  in json format
  //determine a type of citation according to value of button
  // returned a cited json string
  const citeform = document.getElementById(`submit_citation_${i}`)

  citeform.addEventListener('click', async function (event) {

    event.preventDefault();

    console.log('clicked me');
    const id = citeform.value;
    console.log(id);
    let ref_no = document.getElementById('refno').value;

    console.log(ref_no);
    let initial = document.getElementsByName('initial');

    let surname = document.getElementsByName('surname');

    let authors = []


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

    //if (validateForm(title, volume, issue) != false) {
    let response = await fetch('http://127.0.0.1:8090/newcite?id=' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(referencedata)
    });

    let body = await response.json();
    console.log('body is', body);

    try {

      citeresult.innerHTML = `
          <h3 class="card-title">
          Your Citation Here:
          </h3>
          `;
      console.log("got request")
      console.log(body);
      //console.log(citedata);


      //only return the last updated list of referencedata to index.js


      let item = document.createElement('li')
      item.innerHTML = ''
      item.innerHTML = body;
      item.innerHTML += `
        <br>
        <br>
        <button  class="btn btn-lg btn-primary toclear"  onclick='clearCiteResult()' >Clear</button>
        `
      citeresult.appendChild(item);


    } catch (e) {

      console.log(e);

    }
  })

}





function validateForm(title, volume, issue) {



  if (title, volume, issue == "") {
    alert("Name must be filled out");
    return false;
  }

}

function clearCiteResult() {

  const clearbtns = document.querySelectorAll('.toclear')
  clearbtns.forEach(clearbtn => {

    clearbtn.addEventListener('click', () => {
      console.log('clicked');
      citeresult.innerHTML = `
      <h3 class="card-title">Your citation will be shown here:</h3>
                  
      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
      
      <button  class="btn btn-lg btn-primary toclear"  onclick='clearCiteResult()' >Clear</button>
        `

    })




  });



};




document.getElementById(`viewHistory`).addEventListener('click', async function (event) {

  event.preventDefault();

  let response = await fetch('http://127.0.0.1:8090/citations/hist');

  let body = await response.json()
  console.log(body)

  citehistory.innerHTML = ''

  var arrayLength = body.length;
  for (var i = 1; i < arrayLength; i++) {
    citehistory.innerHTML += `
        • ${body[i]}
        <br>
        <br>
        `;
  }


});



