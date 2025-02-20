import { state } from './index.js';

//fetch data and get weatherData
export async function getWeather(searchValue) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?key=X5FTEN575UKEZGURN6FY3ZX82`,
      { mode: "cors" }
    );
    let json = await response.json();
    weatherLibrary.getIcon(json);
    weatherLibrary.getTemp(json);
    weatherLibrary.getDescription(json);
    weatherLibrary.getfeelsLike(json);
    weatherLibrary.getSunRise(json);
    weatherLibrary.getSunSet(json);
    weatherLibrary.getWindSpeed(json);
    weatherLibrary.getUV(json);
    weatherLibrary.getHumidity(json);
    weatherLibrary.getCloudover(json);
    state.content = true;
    return json;
  } catch (error) {
    alert("Something went wrong!");
  }
}

//library for wheatherData
export const weatherLibrary = {

  getTemp(json) {
    const temperature = json.days[0].temp;
    const bigContainerOne = document.getElementById("bigContainerOne");
    const temperatureContainer = document.createElement("div");
    temperatureContainer.id="temperatures";
    temperatureContainer.textContent = temperature + "F°";
    bigContainerOne.appendChild(temperatureContainer);
  },
  getDescription(json) {
    const description = json.days[0].description;
    const bigContainerTwoOne = document.getElementById("containerInTwoOne");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.textContent = description;
    descriptionContainer.id= "description";
    bigContainerTwoOne.appendChild(descriptionContainer);
  },
  getfeelsLike(json) {
    const feelsLikeTemperature = json.days[0].feelslike;
    const bigContainerTwoTwo = document.getElementById("containerInTwoTwo");
    const feelsContainer = document.createElement("div");
    feelsContainer.innerHTML = "RealFeel: </br>" + feelsLikeTemperature +"°F";
    feelsContainer.id= "feelsLike";
    bigContainerTwoTwo.appendChild(feelsContainer);
  },
  getSunRise(json) {
    const sunRise = json.days[0].sunrise;
    const bigContainerThreeOne = document.getElementById("containerInThreeOne");
    const sunriseContainer = document.createElement("div");
    sunriseContainer.innerHTML = "Sunrise at </br>" + sunRise;
    sunriseContainer.id= "sunRise";
    bigContainerThreeOne.appendChild(sunriseContainer);
  },
  getSunSet(json) {
    const sunSet = json.days[0].sunset;
    const bigContainerThreeTwo = document.getElementById("containerInThreeTwo");
    const sunsetContainer = document.createElement("div");
    sunsetContainer.innerHTML = "Sunset at </br>" + sunSet;
    sunsetContainer.id= "sunSet";
    bigContainerThreeTwo.appendChild(sunsetContainer);
  },
  getWindSpeed(json) {
    const windSpeed = json.days[0].windspeed;
    const bigContainerFourOne = document.getElementById("containerFourOne");
    const windspeedContainer = document.createElement("div");
    windspeedContainer.innerHTML = "Windspeed:</br>" + windSpeed;
    windspeedContainer.id= "windSpeed";
    bigContainerFourOne.appendChild(windspeedContainer);
  },
  getUV(json) {
    const uvIndex = json.days[0].uvindex;
    const bigContainerFourTwo = document.getElementById("containerFourTwo");
    const uvContainer = document.createElement("div");
    uvContainer.innerHTML = "UV-Index:</br>" + uvIndex;
    uvContainer.id= "uv";
    bigContainerFourTwo.appendChild(uvContainer);
  },
  getHumidity(json) {
    const humidity = json.days[0].humidity;
    const bigContainerFourThree = document.getElementById("containerFourThree");
    const humidityContainer = document.createElement("div");
    humidityContainer.innerHTML = "Humidity:</br>" + humidity;
    humidityContainer.id= "humidity";
    bigContainerFourThree.appendChild(humidityContainer);
  },
  getCloudover(json) {
    const cloudover = json.days[0].cloudcover;
    const bigContainerFourFour = document.getElementById("containerFourFour");
    const cloudoverContainer = document.createElement("div");
    cloudoverContainer.innerHTML = "Cloudover:</br>" + cloudover;
    cloudoverContainer.id= "cloudover";
    bigContainerFourFour.appendChild(cloudoverContainer);
  },
  getIcon(json) {
    const icon = json.days[0].icon;
    const bigContainerOne = document.getElementById("bigContainerOne");
    const img = document.createElement("img");
    img.id="weatherIcon";
    bigContainerOne.appendChild(img);
    img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${icon}.svg`;
  }
};
