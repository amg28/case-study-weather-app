import Unsplash, { toJson } from "unsplash-js";
import { getPhotos, getWeather, getForcast } from "./HomeAction";

const REACT_APP_UNSPLASH_ACCESS_KEY =
  "aRHpJcbcj_Ua4azaNTnqw6JlFHoAlBpkoTOlyHMAF8I";
const REACT_APP_WEATHER_APP_ID = "f6f756fb41c98cf1ec47e74d1f0fac56";

const unsplash = new Unsplash({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY
});

export const searchPhotoApi = (cityName = "mumbai") => {
  return function(dispatch) {
    unsplash.search
      .photos(cityName, 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        // Do something with the json object
        dispatch(getPhotos(json.results));
      })
      .catch(error => {
        // Your flawless error handling code
        console.error("Error:", error);
      });
  };
};

export const getWeatherApi = (cityName = "mumbai") => {
  return function(dispatch) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_WEATHER_APP_ID}&units=metric`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(getWeather(data));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
};

export const getForcastApi = (cityName = "mumbai") => {
  return function(dispatch) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${REACT_APP_WEATHER_APP_ID}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        dispatch(getForcast(data));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
};
