export async function getWeather() {
  try {
    let response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hamburg?key=X5FTEN575UKEZGURN6FY3ZX82"
    );
    let json = await response.json();
    console.log(json);
    weatherLibrary.getCondition(json);
    return json;
  } catch (error) {
    alert("Something went wrong!");
  }
}

export const weatherLibrary = {
  getCondition(json) {
    const condition = json.days[0].conditions;
    return condition;
  },
  getTemp(json) {
    const temperature = json.days[0].temp;
    return temperature;
  },
  getfeelsLike(json) {
    const feelsLikeTemperature = json.days[0].feelslike;
    return feelsLikeTemperature;
  },
  getSunRise(json) {
    const sunRise = json.days[0].sunrise;
    return sunRise;
  },
  getSunSet(json) {
    const sunSet = json.days[0].sunset;
    return sunSet;
  },
  getWindSpeed(json) {
    const windSpeed = json.days[0].windspeed;
    return windSpeed;
  },
  getWindSpeed(json) {
    const uvIndex = json.days[0].uvindex;
    return uvIndex;
  },
};
