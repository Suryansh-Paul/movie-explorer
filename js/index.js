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






});


function updatestatus(message){
    status.textContent ="";
    status.textContent= message;
}

