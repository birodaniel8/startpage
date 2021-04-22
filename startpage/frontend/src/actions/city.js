import axios from 'axios';
import city from '../reducers/city.js';
import { GET_CITIES, ADD_CITY, DELETE_CITY } from "./types.js";

const weather_api_url = "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=08606897ce9191268be3898882f911e6"

// const getCityTemperatureData = async (city) => {
//   axios
//     .get(weather_api_url.replace("{}", city.city_name))
//     .then(response => {
//       console.log("asdf")
//       console.log(response)
//       return ({
//         ...city,
//         temperature: response,
//       })
//     })
//     .catch((error) => console.log(error)); 
// }

// const getTemperatureData = (cityList) => {
//   console.log(cityList.map(city => getCityTemperatureData(city)))
// };

// Get city list:
export const getCityList = () => dispatch => {
  axios
    .get("/api/city/")
    .then(response => {
      // console.log(response.data)
      // const temperatureData = getTemperatureData(response.data)
      // console.log(temperatureData)
      dispatch({
        type: GET_CITIES,
        payload: response.data,
      });
    }).catch((error) => console.log(error));
};


// Add city:
export const addCity = (city) => dispatch => {
  axios
    .post("/api/city/", city)
    .then((response) => {
      dispatch({
        type: ADD_CITY,
        payload: response.data,
      });
    }).catch((error) => console.log(error));
};

// Delete city:
export const deleteCity = (id) => dispatch => {
  axios
    .delete(`/api/city/${id}/`)
    .then((response) => {
      dispatch({
        type: DELETE_CITY,
        payload: id,
      });
    }).catch((error) => console.log(error));
};