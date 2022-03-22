const main = document.getElementById("myhome")
const divContainer = document.getElementById("articlecontainer");
const homartDiv = document.getElementById("homearticlediv")
const searchrst = document.getElementById("searchresult")
const citeresult = document.getElementById("citeresult")


function loadmain() {
  main.style.display = "block"
  homartDiv.style.display = "block"
  divContainer.style.display = "none"


}
function loadsearchrst() {
  divContainer.style.display = "block"
  main.style.display = "none"
  searchrst.style.display = "block"
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
      console.log("hello button pressed")


    });




  });


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

  try {
    const articles = await loadJson(params);

    //const divContainer = document.getElementById("articlecontainer");

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

        </div>

       `;




    });

    loadsearchrst()
    console.log(searchrst.style.display);
  } catch (e) {
    this.alert(e);
    console.log(e);

  }
});

//load article on homepage
async function loadarticleJson() {
  const response = await fetch('http://127.0.0.1:8090/articles');
  //method :'GET'
  //console.log("got respose");
  const data = await response.json();
  return data;

}






window.addEventListener("DOMContentLoaded", async (event) => {

  event.preventDefault()


  try {
    const homearticles = await loadarticleJson();

    //const divContainer = document.getElementById("articlecontainer");


    divContainer.innerHTML =
      `<hr class="featurette-divider">
        <div class="col-md-7">
          <h3  class="text-center"> Search Results.</h3>
              
        </div>
    `
    //console.log(divContainer);

    //searchrst.innerHTML = `<p class="lead">Searched Result</p>`;

    homearticles.forEach(article => {

      homartDiv.innerHTML +=
        `<hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">  ${article.title} . <h5 class="text-muted">${article.date}.</span></h5>
              
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
          <p><a class="btn btn-lg btn-primary" href="#">Load More</a></p>
        </div>

       `;




    });


  } catch (e) {

    console.log(e);

  }
});


function authordetails(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.initial}, ${author.surname}`
  }).join(', ')}
  </h5>
  `
}

//add form fields with reference to https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
function addFields() {
  // Generate a dynamic number of inputs
  var number = document.getElementById("selectaddfield").value;
  // Get the element where the inputs will be added to
  var container = document.getElementById("inputcontainer");
  // Remove every children it had before
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < number; i++) {
    // Append a node with a random text
    container.appendChild(document.createTextNode("surname " + (i + 1)));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "surname" + i;
    input.id = 'surname'
    container.appendChild(input);



    // Append a line break 
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    container.appendChild(document.createTextNode("initial " + (i + 1)));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "initial" + i;
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
  let initial = document.getElementById('initial').value;
  let surname = document.getElementById('surname').value;
  let title = document.getElementById('title').value;
  let volume = document.getElementById('vol').value;
  let issue = document.getElementById('i').value;
  let pageno = document.getElementById('pp').value
  let month = document.getElementById('mon').value;
  let day = document.getElementById('day').value;
  let year = document.getElementById('year').value;
  let doi = document.getElementById('doi').value;
  let authors = []

  let author = {
    'initial': initial,
    'surname': surname,
  };

  authors.push(author)

  let referencedata = {
    'referencenumber': ref_no,
    'initial': initial,
    'surname': surname,
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

    // citedata.forEach(citeinfo => {
    //   citeresult.innerHTML += `<h3>this is the response data[${citeinfo.ref_no}], initials are${citeinfo.initials},
    //    initials${authordetails(citeinfo.initials)}, title ${citeinfo.title}</h3>`;
    // });
    for (let citeitem of body) {
      let item = document.createElement('li')
      item.innerHTML = citeitem;
      citeresult.appendChild(item);
    }
  } catch (e) {

    console.log(e);

  }
});






