const main = document.getElementById("myhome")
const divContainer = document.getElementById("articlecontainer");

function loadmain() {
  main.style.display = "block"
  divContainer.style.display = "none"


}
const homebtn = document.getElementById("homebtn")
homebtn.addEventListener("button", async (event) => {

  loadmain()
});


//search and load related articles
async function loadJson(params) {
  const response = await fetch('http://127.0.0.1:8090/searchpoint?' + params);
  //method :'GET'
  console.log("got respose");
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
    const authorlist = document.getElementById("authorcontainer")


    divContainer.innerHTML = ""



    articles.forEach(article => {
      //const paragraphElem = document.createElement('p');
      //paragraphElem.innerText =
      // article.authors.forEach(author => {
      //   authorlist.innerHTML +=
      //     `authors:${author.name}`


      // });
      divContainer.innerHTML +=
        `<hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">  ${article.title} . <span class="text-muted">It’ll blow your
              mind.</span></h2>
              
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






      title: ${article.title} 
      
      \n Date: ${article.date} \n `;
      //divContainer.appendChild(paragraphElem);


    });
    divContainer.style.display = "block"

  } catch (e) {
    this.alert(e);
    console.log(e);
    alert('hjwdbhbwdjhxbhdwbxw congrats error');
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
    //alert('hjwdbhbwdjhxbhdwbxw congrats error');
  }
});



