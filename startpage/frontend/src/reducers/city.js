import { GET_CITIES, ADD_CITY, DELETE_CITY } from "../actions/types.js";

const initialState = {
  city_list: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        city_list: action.payload,
      }
    case ADD_CITY:
      return {
        ...state,
        city_list: [...state.city_list, action.payload]
      }
    case DELETE_CITY:
      return {
        ...state,
        city_list: state.city_list.filter(city => city.id !== action.payload)
      }
    default:
      return state;
  }
}