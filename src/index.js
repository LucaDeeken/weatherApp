import "./styles.css";
import { getWeather } from "./getWeather.js";

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const celsius = document.getElementById("celsiusText");
const fahrenheitBtn = document.getElementById("fahrenheitText");

//if content is already displayed, we set content on true, so it doesnt overwrite the first fetch
export const state = {
  content: false,
  graduator: "fahrenheit",
};

//search for a city, check for contentStatus and start the fetching
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (state.content === true) {
    deleteContent();
    state.content = false;
  }
  let searchValue = searchInput.value;
  getWeather(searchValue);
});

//function for deleting already existing weatherData
function deleteContent() {
  const contentContainer = document.getElementsByClassName("contentContainer");
  for (let i = 0; i < contentContainer.length; i++) {
    contentContainer[i].innerHTML = "";
  }
}

function fahrenheitToCelsius() {
  const temperatureString = document.getElementById("temperatures");
  let fahrenheit = temperatureString.textContent.trim();
  fahrenheit = fahrenheit.replace(/[°F]/g, "");
  fahrenheit = Number(fahrenheit);
  fahrenheit = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  temperatureString.textContent = fahrenheit + "°C";

  const feelsLikeString = document.getElementById("feelsLike");
  let feelsLike = feelsLikeString.textContent.trim();
  console.log(feelsLike);
  feelsLike = feelsLike.replace(/[^\d.-]/g, "");
  feelsLike = Number(feelsLike);
  feelsLike = (((feelsLike - 32) * 5) / 9).toFixed(1);
  feelsLikeString.innerHTML = "RealFeel: </br>" +feelsLike + "°C";

  state.graduator = "celsius";
}

function celsiusToFahrenheit() {
  const temperatureString = document.getElementById("temperatures");
  let fahrenheit = temperatureString.textContent.trim();
  fahrenheit = fahrenheit.replace(/[°C]/g, "");
  fahrenheit = Number(fahrenheit);
  fahrenheit = ((fahrenheit * 9) / 5 + 32).toFixed(1);
  temperatureString.textContent = fahrenheit + "°F";

  const feelsLikeString = document.getElementById("feelsLike");
  let feelsLike = feelsLikeString.textContent.trim();
  feelsLike = feelsLike.replace(/[^\d.-]/g, "");
  feelsLike = Number(feelsLike);
  feelsLike = ((feelsLike * 9) / 5 + 32).toFixed(1);
  feelsLikeString.innerHTML = "RealFeel: </br>" +feelsLike + "°F";

  state.graduator = "fahrenheit";
}

celsius.addEventListener("click", () => {
  if (state.graduator === "fahrenheit") {
    fahrenheitToCelsius();
  }
});

fahrenheitBtn.addEventListener("click", () => {
    if (state.graduator === "celsius") {
    celsiusToFahrenheit();
  }
});
