const apiKey = "292acd7b6d98e01548a0b98c86d657ec";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

const city = document.getElementById("cityInput").value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

fetch(url)
.then(response => response.json())
.then(data => {

if(data.cod === "404"){
alert("Şehir bulunamadı");
return;
}

document.getElementById("city").innerText = data.name;
document.getElementById("temp").innerText = data.main.temp + " °C";
document.getElementById("desc").innerText = data.weather[0].description;
document.getElementById("humidity").innerText = data.main.humidity + " %";
document.getElementById("wind").innerText = data.wind.speed + " km/s";

});
});