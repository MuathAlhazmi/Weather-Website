
// var form = document.querySelector(".top-banner form");
// var input = document.querySelector(".top-banner input");
// var msg = document.querySelector(".top-banner .msg");
// var list = document.querySelector(".ajax-section .cities");
// var listItems = list.querySelectorAll(".ajax-section .city");
// var inputVal = input.value;
// var apiKey = "5a63c5d46fd4617b9f274c8fc9e3b958";
// // var url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
window.addEventListener('load', () => {
  let lat;
  let lon;
  let url;
  let apiKey;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude
      lon = position.coords.longitude
      apiKey = "5a63c5d46fd4617b9f274c8fc9e3b958";

      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      // url = `https://api.openweathermap.org/data/2.5/weather?lat=40.741895&lon=-73.989308&appid=5a63c5d46fd4617b9f274c8fc9e3b958&units=metric`;

      var msg = document.querySelector(".top-banner .msg");
      var form = document.querySelector(".top-banner form");
      var input = document.querySelector(".top-banner input");
      var msg = document.querySelector(".top-banner .msg");
      var list = document.querySelector(".ajax-section .cities");
      var listItems = list.querySelectorAll(".ajax-section .city");

      fetch(url)
        .then(response => response.json())
        .then(data => {
          var { main, name, sys, weather } = data;
          var icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

          var li = document.createElement("li");
          li.classList.add("city");
          li.classList.add("city1");
          var markup = `
    <h2 class="city-name1" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
        <sup>Your Location</sup>

      </h2>
      <div class="city-temp1">${Math.round(main.temp)}<sup>°C</sup></div>
      <h2 city-name1>Feels like:</h2>
      <div class="city-temp1">${Math.round(main.feels_like)}<sup>°C</sup></div>
      <figure>
        <img class="city-icon1" src=${icon} alt=${weather[0]["main"]}>
        <figcaption class="figcaption1">${weather[0]["description"]}</figcaption>
      </figure>
    `;
          li.innerHTML = markup;
          list.appendChild(li);
        })
        .catch(() => {
          msg.textContent = "Please search for a valid city";
          
        });
      form.reset();
      input.focus();
    })

  }
  var form = document.querySelector(".top-banner form");
  form.addEventListener("submit", e => {
    var input = document.querySelector(".top-banner input");
    var inputVal = input.value;
    apiKey = "5a63c5d46fd4617b9f274c8fc9e3b958";
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    var msg = document.querySelector(".top-banner .msg");
    var msg = document.querySelector(".top-banner .msg");
    var list = document.querySelector(".ajax-section .cities");
    var listItems = list.querySelectorAll(".ajax-section .city");

    e.preventDefault();
    fetch(url)
      .then(response => response.json())
      .then(data => {

        var { main, name, sys, weather } = data;
        var icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
          }@2x.png`;

        var li = document.createElement("li");
        li.classList.add("city");
        var markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <h2 city-name1>Feels like:</h2>
        <div class="city-temp">${Math.round(main.feels_like)}<sup>°C</sup></div>  
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        msg.textContent = "Please search for a valid city";
      });
  })
})
var names = [name];