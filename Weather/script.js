const apiKey="1a3559c1b2d32c4b0505a90a2ede8291"

const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon =document.querySelector('.weather-icon');
const bg = document.getElementById('bg');


async function updateWeather(city){
    const weather= await fetch(apiURL + city + `&appid=${apiKey}`); 
    var data= await weather.json();
    console.log(data.weather[0].main)
    
    if(searchbox.value===""){
        alert("Enter Your City Name");
    }
    else if(data.cod === "404"){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
        document.querySelector('.wind').innerHTML=data.wind.speed+" Km/h";
    
        if(data.weather[0].main=='Clouds'){
            weathericon.src ="./images/clouds.png";
            bg.style.backgroundImage="url(./images/bgclouds.jpg)";
        }
        else if(data.weather[0].main=='Clear'){
            weathericon.src ="./images/clear.png";
            bg.style.backgroundImage="url(./images/bgclear.jpg)";
        }
        else if(data.weather[0].main=='Rain'){
            weathericon.src ="./images/rain.png";
            bg.style.backgroundImage="url(./images/bgrain.jpg)";
        }
        else if(data.weather[0].main=='Snow'){
            weathericon.src ="./images/snow.png";
            bg.style.backgroundImage="url(./images/bgsnow.jpg)";
        }
        else if(data.weather[0].main=='Drizzle'){
            weathericon.src ="./images/drizzle.png";
            bg.style.backgroundImage="url(./images/bgdrizzle.jpg)";
        }
        else if(data.weather[0].main=='Mist'){
            weathericon.src ="./images/mist.png";
            bg.style.backgroundImage="url(./images/bgmist.jpg)";
        }
        else if(data.weather[0].main=='Haze'){
            weathericon.src ="./images/mist.png";
            bg.style.backgroundImage="url(./images/bghaze.jpg)";
        }
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

}

searchbtn.addEventListener("click", ()=>{
    updateWeather(searchbox.value);
})
searchbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        updateWeather(searchbox.value);
    }
});


