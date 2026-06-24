const searchform = document.getElementById("searchform");
const searchinput = document.getElementById("searchbox");
const status = document.getElementById("status");
const moviecards = document.getElementById("moviecards");
const favourites = document.getElementById("favorites");
const apikey = "5ce8cec7";

searchform.addEventListener("submit" , async event =>{

event.preventDefault();
const searchresult = searchinput.value.trim();

if(searchresult=== ""){
    
    updatestatus("Enter an input!");
     return;
}
moviecards.innerHTML="";
updatestatus("loading...")

const moviedata = await fetchmovies(searchresult);




});


function updatestatus(message){
    status.textContent ="";
    status.textContent= message;
}

async function fetchmovies(searchresult){
  const apiUrl = `https://www.omdbapi.com/?s=${searchresult}&apikey=${apikey}`;

  try{
  const response = await fetch(apiUrl);

  if(!response.ok){
      updatestatus("Network server error");
      return;
}

const data = await response.json();
    
if(data.Response==="False"){
        updatestatus("could not fetch any such movie!");
        return;
}
   
   return data;

}
catch (error) {
    updatestatus(error.message + ":unable to connect")
}
  }



