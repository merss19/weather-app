import * as types from '../constants/ActionTypes'

export function addCity(text) {
  return { type: types.ADD_CITY, text }
}

export function deleteCity(id) {
  return { type: types.DELETE_CITY, id }
}

export function loadCity(city) {
    console.log('loadCity')
    console.log(city)
  return {
    type: types.LOAD_CITY,
    api: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1c0b967a2eae065899828eab3a7ae46`
  }
}