window.addEventListener('click', async function(event){
    try{
      let response = await fetch('http://127.0.0.1:8090/searchpoint');
      let body = await response.text();
      document.getElementById('content').innerHTML=body;
    } catch(e) {
      this.alert(e);
      //alert('hjwdbhbwdjhxbhdwbxw congrats error');
    }
});

// try to fetch get element by id
//return the html content of the related articles
window.addEventListener('load', async function(event){
    try{
      let response = await fetch('http://127.0.0.1:8090/new');
      let body = await response.text();
      document.getElementById('content').innerHTML=body;
    } catch(e) {
      this.alert(e);
      //alert('hjwdbhbwdjhxbhdwbxw congrats error');
    }
});



