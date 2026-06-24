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
if(moviedata){
updatestatus("");
rendermoviecards(moviedata);
}




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



function rendermoviecards(data){
   moviecards.innerHTML="";
   const movies= data.Search;
    movies.forEach(movie=> {
        const moviename = movie.Title;
        const releaseYear = movie.Year;
        const id = movie.imdbID;
        const poster = movie.Poster;
        
        const maindiv = document.createElement("div");
        const img = document.createElement("img");
        const movieinfodiv = document.createElement("div");
        const Moviename = document.createElement("h3");
        const year = document.createElement("p");
        const details= document.createElement("button");

       maindiv.classList.add("movie-card");
       movieinfodiv.classList.add("movie-info");
       img.src = poster;
           
        
        
        Moviename.textContent = moviename;
        year.textContent = releaseYear;

        details.textContent = "View Details";

        
        movieinfodiv.appendChild(Moviename);
        movieinfodiv.appendChild(year);
        movieinfodiv.appendChild(details);

        maindiv.appendChild(img);
        maindiv.appendChild(movieinfodiv);

        moviecards.appendChild(maindiv);

   });

}