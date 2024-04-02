document.addEventListener("DOMContentLoaded", function () {
    const api= "a056e6c1687c848693a9be564ea0c068";
const url="https://api.openweathermap.org/data/2.5/weather?q="
const search_input= document.querySelector(".search input");
 const search_button= document.querySelector(".search button");

async function weather(city){
 const response = await fetch(url+ city+ `&appid=${api}` );
 const results = await response.json();
 
 console.log(results);
document.getElementById("temp").innerHTML =results.main.temp +" Deg C";
document.getElementById("city").innerHTML =results.name;
document.getElementById("Humidity").innerHTML =results.main.humidity +"% Humidity";
document.getElementById("wind").innerHTML =results.wind.speed +"km/h wind speed";

}
search_button.addEventListener("click",()=>{
    weather(search_input.value);
})
});