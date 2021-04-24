import axios from "axios";
import city from "../reducers/city.js";
import { GET_CITIES, ADD_CITY, DELETE_CITY } from "./types.js";

export const weather_api_url =
  "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=08606897ce9191268be3898882f911e6";

async function add_temperature_data(city_data) {
  return fetch(weather_api_url.replace("{}", city_data.city_name))
    .then((response) => response.json())
    .then((response) => {
      return {
        ...city_data,
        temperature_data: response,
      };
    });
}

// Get city list:
export const getCityList = () => (dispatch) => {
  axios
    .get("/api/city/")
    .then((response) => {
      return Promise.all(
        response.data.map((city_data) => add_temperature_data(city_data))
      );
    })
    .then((response) => {
      dispatch({
        type: GET_CITIES,
        payload: response,
      });
    })
    .catch((error) => console.log(error));
};

// Add city:
export const addCity = (city) => (dispatch) => {
  axios
    .post("/api/city/", city)
    .then((response) => {
      return add_temperature_data(response.data);
    })
    .then((response) => {
      dispatch({
        type: ADD_CITY,
        payload: response,
      });
    })
    .catch((error) => console.log(error));
};

// Delete city:
export const deleteCity = (id) => (dispatch) => {
  axios
    .delete(`/api/city/${id}/`)
    .then((response) => {
      dispatch({
        type: DELETE_CITY,
        payload: id,
      });
    })
    .catch((error) => console.log(error));
};
