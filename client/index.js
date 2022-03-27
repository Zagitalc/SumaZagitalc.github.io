/* eslint-disable quote-props */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */

const main = document.getElementById('myhome');
const divContainer = document.getElementById("articlecontainer");
const homartDiv = document.getElementById("homearticlediv");
const searchrst = document.getElementById("searchresult");
const citeresult = document.getElementById("citeresult");
const citehistory = document.getElementById("allHistories");
const fullresult = document.getElementById("fullarticle");

function loadmain() {
  // eslint-disable-next-line semi
  main.style.display = "block"
  homartDiv.style.display = "block";
  divContainer.style.display = "none";
  fullresult.style.display = "none";
}
function loadsearchrst() {
  divContainer.style.display = "block";
  main.style.display = "none";
  searchrst.style.display = "block";
  homartDiv.style.display = "none";
  fullresult.style.display = "none";
}
function loadFullPage() {
  fullresult.style.display = "block";
  divContainer.style.display = "none";
  main.style.display = "none";
  searchrst.style.display = "none";
  homartDiv.style.display = "none";
}

function author(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.name}`;
  }).join(', ')}
  </h5>
  `;
};

// eslint-disable-next-line no-unused-vars
function authordetails(authos) {
  return `
  <h5>Authors: 
  
  ${authos.map(function (author) {
    return `${author.initial}, ${author.surname}`;
  }).join(', ')}
  </h5>
  `;
}
// eslint-disable-next-line no-unused-vars
// function commentdetails(comments) {
//   return `
//   <h5>Authors:

//   ${authos.map(function (comment) {
//     return `
//     <h4 class='lead'>${comment.name}</h4>
//     <br>
//     <br>
//     <h5>${comment.text}<h5>`;
//   }).join('\n ')}
//   </h5>
//   `;
// }

// eslint-disable-next-line no-unused-vars
function backHome() {
  // eslint-disable-next-line no-unused-vars
  const homebtns = document.querySelectorAll(".tohome")
    .forEach(homebtn => {
      homebtn.addEventListener("click", function () {
        loadmain();
        window.scrollTo(0, 0);
      });
    });
}

// load article on homepage
async function loadarticleJson() {
  // eslint-disable-next-line no-undef
  const response = await fetch('http://127.0.0.1:8090/articles');

  const data = await response.json();
  return data;
}

// load all articles from json
window.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  try {
    const homearticles = await loadarticleJson();

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
    });
  } catch (e) {
    console.log(e);
  }
});

// load full article based on specific article

// eslint-disable-next-line no-unused-vars
function showFull() {
  const buttons = document.querySelectorAll('.loadMore');

  buttons.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const id = button.value;

      console.log(id);

      // eslint-disable-next-line no-undef
      const response = await fetch('http://127.0.0.1:8090/reqarticle?id=' + id);

      console.log(response);
      const fullarticle = await response.json();
      console.log('fullarticle is', fullarticle);
      console.log(fullarticle);
      const template =
        ` 
      <hr class="featurette-divider">
      
      <div class="row featurette" >
        
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
      `;
      const commentitle = `
      <div class="col-md-5">
        <h4 class="featurette-heading">Comments</h4>
          
      </div>
      
      
      `;
      const fullarticlesection = document.getElementById('fullarticlesection');
      fullarticlesection.innerHTML = '';
      fullarticlesection.innerHTML += template;

      //
      const storeid = document.createElement('p');

      // set id
      storeid.setAttribute("id", "fullarticleid");
      storeid.setAttribute("value", fullarticle.id);

      fullarticlesection.appendChild(storeid);

      const commentsection = document.getElementById('commentsection');
      commentsection.innerHTML = '';
      commentsection.innerHTML += commentitle;

      const comments = fullarticle.comments;
      for (let i = 0; i < comments.length; i++) {
        commenTemplate(commentsection, comments[i]);
      }
      loadFullPage();
      window.scrollTo(0, 0);
    });
  });
}

function commenTemplate(commentsection, comments) {
  commentsection.innerHTML += `


        <a  class="list-group-item list-group-item-action " aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${comments.name}</h5>
            <small>recent</small>
          </div>
          <p class="mb-1">${comments.text}</p>
          
        </a>        
        
        `;
}

// search and load related articles
async function loadJson(params) {
  // eslint-disable-next-line no-undef
  const response = await fetch('http://127.0.0.1:8090/searchpoint?' + params);
  // method :'GET'
  // console.log("got respose");
  const data = await response.json();
  return data;
}

const sf = document.getElementById("searchform");
sf.addEventListener("submit", async (event) => {
  event.preventDefault();
  // eslint-disable-next-line no-undef
  const data = new FormData(sf);
  const params = new URLSearchParams(data);
  console.log(params);

  try {
    const articles = await loadJson(params);

    divContainer.innerHTML = "";
    divContainer.innerHTML =
      `<hr class="featurette-divider">
        <div class="col-md-7">
          <h3  class="text-center"> Search Results.</h3>
              
        </div>
    `;
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

    loadsearchrst();
    window.scrollTo(0, 0);
  } catch (e) {
    this.alert(e);
    console.log(e);
  }
});

// add form fields with reference to https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
// eslint-disable-next-line no-unused-vars
function addFields() {
  const number = document.getElementById("selectaddfield").value;

  const container = document.getElementById("inputcontainer");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < number; i++) {
    // Append a node with a random text
    // container.appendChild();
    // Create an <input> element, set its type and name attributes
    const label = document.createElement("label");
    label.setAttribute('for', "colFormLabelLg");
    label.setAttribute("class", "col-sm-2 col-form-label col-form-label-lg");

    label.appendChild(document.createTextNode("surname " + (i + 1)));
    container.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.class = "form-control form-control-lg";
    input.name = "surname";
    input.id = 'surname';
    container.appendChild(input);

    // Append a line break
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    const label2 = document.createElement("label");
    label2.setAttribute('for', "colFormLabelLg");
    label2.setAttribute("class", "col-sm-2 col-form-label col-form-label-lg");

    label2.appendChild(document.createTextNode("initial " + (i + 1)));
    container.appendChild(label2);

    // Create an <input> element, set its type and name attributes
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.name = "initial";
    input2.class = "form-control form-control-lg";
    input2.id = 'initial';
    container.appendChild(input2);

    // Append a line break
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    console.log('container', container);
  }
}

for (let i = 1; i < 4; i++) {
  // post a citation  in json format
  // determine a type of citation according to value of button
  // returned a cited json string
  const citeform = document.getElementById(`submit_citation_${i}`);

  citeform.addEventListener('click', async function (event) {
    event.preventDefault();

    console.log('clicked me');
    const id = citeform.value;
    console.log(id);
    const refno = document.getElementById('refno').value;

    console.log(refno);
    const initial = document.getElementsByName('initial');

    const surname = document.getElementsByName('surname');

    const authors = [];

    for (let i = 0; i < initial.length; i++) {
      const author = {
        'initial': initial[i].value,
        'surname': surname[i].value
      };

      authors.push(author);
    };

    const title = document.getElementById('title').value;
    const volume = document.getElementById('vol').value;
    const issue = document.getElementById('i').value;
    const pageno = document.getElementById('pp').value;
    const month = document.getElementById('mon').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;
    const doi = document.getElementById('doi').value;

    const referencedata = {
      'referencenumber': refno,

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
    const detailslist = [refno, title, year, doi];
    if (validateForm(detailslist) !== false) {
      // eslint-disable-next-line no-undef
      const response = await fetch('http://127.0.0.1:8090/newcite?id=' + id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(referencedata)

      });
      console.log();
      const body = await response.json();
      console.log('body is', body);

      try {
        citeresult.innerHTML = `
          <h3 class="card-title">
          Your Citation Here:
          </h3>
          `;
        console.log("got request");
        console.log(body);
        // console.log(citedata);

        // only return the last updated list of referencedata to index.js

        const item = document.createElement('li');
        item.innerHTML = '';
        item.innerHTML = body;
        item.innerHTML += `
        <br>
        <br>
        <button  class="btn btn-lg btn-primary toclear"  onclick='clearCiteResult()' >Clear</button>
        `;
        citeresult.appendChild(item);
      } catch (e) {
        console.log(e);
      }
    }
  });
}

// eslint-disable-next-line no-unused-vars
function validateForm(detailslist) {
  // eslint-disable-next-line no-sequences
  for (let i = 0; i < detailslist.length; i++) {
    if (detailslist[i] === "") {
      // eslint-disable-next-line no-undef
      alert(`name must be filled out`);
      return false;
    };
  };
};

// eslint-disable-next-line no-unused-vars
function clearCiteResult() {
  const clearbtns = document.querySelectorAll('.toclear');
  clearbtns.forEach(clearbtn => {
    clearbtn.addEventListener('click', () => {
      console.log('clicked');
      citeresult.innerHTML = `
      <h3 class="card-title">Your citation will be shown here:</h3>
                  
      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
      
      <button  class="btn btn-lg btn-primary toclear"  onclick='clearCiteResult()' >Clear</button>
        `;
    });
  });
};

document.getElementById(`viewHistory`).addEventListener('click', async function (event) {
  event.preventDefault();

  // eslint-disable-next-line no-undef
  const response = await fetch('http://127.0.0.1:8090/citations/hist');

  const body = await response.json();
  console.log(body);

  citehistory.innerHTML = "";

  const arrayLength = body.length;
  for (let i = 1; i < arrayLength; i++) {
    citehistory.innerHTML += `
        • ${body[i]}
        <br>
        <br>
        `;
  }
});

// add new coments to the article database
document.getElementById('addcommentic').addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('added');
  const yourcommentname = document.getElementById('yourcommentname').value;
  const yourcomment = document.getElementById('yourcomment').value;
  const id = document.getElementById('fullarticleid').getAttribute('value');
  console.log('full article id ist', id);
  console.log('comment', yourcomment);

  const commetbox = {

    "name": yourcommentname,
    "text": yourcomment

  };

  // eslint-disable-next-line no-undef
  const response = await fetch('http://127.0.0.1:8090/comments/addcomment?id=' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commetbox)
  });
  const body = await response.json();
  console.log(body);
  try {
    const commentsection = document.getElementById('commentsection');
    commenTemplate(commentsection, body);
  } catch (e) {
    console.log(e);
  }
});
