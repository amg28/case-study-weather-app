import {
  GET_PHOTOS,
  GET_WEATHER_DATA,
  GET_FORCAST_DATA,
  CHANGE_DATA_ORDER
} from "./ActionTypes";

export const getPhotos = data => ({
  type: GET_PHOTOS,
  data
});

export const getWeather = data => ({
  type: GET_WEATHER_DATA,
  data
});

export const getForcast = data => ({
  type: GET_FORCAST_DATA,
  data
});

export const changeDataOrder = () => ({
  type: CHANGE_DATA_ORDER
});
