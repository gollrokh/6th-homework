function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let min = date.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    let dayIndex = date.getDay();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    return ` ${days[dayIndex]} ${hours} : ${min}`;
  }
  let currentTime = new Date();
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(currentTime);
  function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    let maxTemp = Math.round(response.data.main.temp_max);
    document.querySelector("#max").innerHTML = `Max Temperature: ${maxTemp}`;
    let humidity = Math.round(response.data.main.humidity);
    document.querySelector("#humidity").innerHTML = `Humidity: ${humidity} %`;
    document.querySelector(
      "#wind"
    ).innerHTML = `Wind speed is : ${response.data.wind.speed} km/h`;
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "79fbf0fd751ad25907ac459fc1d6c647";
    let cityName = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  