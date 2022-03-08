const main = document.getElementById("myhome")
const divContainer = document.getElementById("articlecontainer");
const homartDiv = document.getElementById("homearticlediv")
const searchrst = document.getElementById("searchresult")


function loadmain() {
  main.style.display = "block"
  divContainer.style.display = "none"
  //console.log("divContainer.style.display = ", divContainer.style.display)


}

function author(authos) {
  return `
  <h5>Authors</h5>
  <ul> 
  ${authos.map(function (author) {
    return `${author.name} `
  }).join('')}
  </ul>
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


    divContainer.innerHTML =
      `<hr class="featurette-divider">
        <div class="col-md-7">
          <h3  class="text-center"> Search Results.</h3>
              
        </div>
    `
    console.log(divContainer);

    //searchrst.innerHTML = `<p class="lead">Searched Result</p>`;

    articles.forEach(article => {
      //const paragraphElem = document.createElement('p');
      //paragraphElem.innerText =
      // article.authors.forEach(author => {
      //   authorlist.innerHTML +=
      //     `authors:${author.name}`


      // });
      homartDiv.innerHTML +=
        `<hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">  ${article.title} . <span class="text-muted">${article.date}.</span></h3>
              
          <p class="lead">${article.highlights} ${article.authors[0]}</p>
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

    divContainer.style.display = "block"
    main.style.display = "none"
    searchrst.style.display = "block"
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
      //const paragraphElem = document.createElement('p');
      //paragraphElem.innerText =
      // article.authors.forEach(author => {
      //   authorlist.innerHTML +=
      //     `authors:${author.name}`


      // });
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

    //divContainer.style.display = "block"
    //main.style.display = "none"
    //searchrst.style.display = "block"
    //console.log(searchrst.style.display);
  } catch (e) {
    this.alert(e);
    console.log(e);

  }
});







// try to fetch get element by id
//return the html content of the related articles

window.addEventListener('later', async function (event) {
  try {
    let response = await fetch('http://127.0.0.1:8090/new');
    let body = await response.text();
    document.getElementById('content').innerHTML = body;
  } catch (e) {
    this.alert(e);

  }
});



