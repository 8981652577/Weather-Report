const searchBox = document.querySelector(".srch input");
const searchBtn = document.querySelector(".srch button");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

let searchcity = document.querySelector(".city p");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windspeed = document.querySelector(".windspeed");

let img = document.querySelector(".icon img");

const apiKey = "a91eef48d63d1780e4df5fd9ff63ae19";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

    weather.style.display = "block";
    error.style.display = "none";
});


const checkWeather = async (city) => {

    let response = await fetch(url + `${city}&appid=${apiKey}&units=metric`);
    let data = await response.json();


    if (data.cod >= 400 && data.cod <= 405) {

        error.style.display = "block";
        weather.style.display = "none";
    }
    else {
        searchcity.innerText = data.name;

        temp.innerText = Math.round(data.main.temp) + `°c`;

        humidity.innerText = data.main.humidity + `%`;
        windspeed.innerText = data.wind.speed + ` km/h`;

        if (data.weather[0].main == "Clouds") {
            img.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            img.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            img.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            img.src = "images/snow.png";
        }
        else if(data.weather[0].main=="Haze")
        {
            img.src="images/haze.png";
        }
        else
        {
            img.src="images/mist.png";
        }

    }
}