import * as types from '../constants/ActionTypes'

export function addCity(text) {
  return { type: types.ADD_CITY, text }
}

