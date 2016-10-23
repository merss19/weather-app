import * as types from '../constants/ActionTypes'
import { Record, Map, List,fromJS } from 'immutable'

let localCities = JSON.parse(localStorage.getItem('cities'));

const itemCity = Record({
    "id": "",
    "city": "",
    "data":""
})

const initialState = List(localCities) || List()

export default function cities(state = initialState, action) {

    switch (action.type) {

        case types.DELETE_CITY:
            return state.filter(city =>
                city.id !== action.id
            )

        case types.LOAD_CITY + types.SUCCESS:
            const isCity = state.find((city) => city.id == action.data.id)

            if(!isCity){
                return state.push( new itemCity({
                    "id": action.data.id,
                    "city": action.data.name,
                    "data": action.data
                }))}

        case types.LOAD_CITY + types.FAIL:
            console.log(action)



        default:
            return state
    }
}