import { ADD_CITY, DELETE_CITY, LOAD_CITY, START, SUCCESS, FAIL } from '../constants/ActionTypes'

let localCities = JSON.parse(localStorage.getItem('cities'));
const initialState =localCities || []

export default function cities(state = initialState, action) {

    switch (action.type) {

        case DELETE_CITY:
            return state.filter(city =>
                city.id !== action.id
            )

        case LOAD_CITY + SUCCESS:
            console.log('LOAD_CITY + SUCCESS')
            console.log(state)
            return [
                {
                    city:action.data.name,
                    id:action.data.id,
                    data:action.data
                },
                ...state
            ]

        case LOAD_CITY + FAIL:
            console.log(action)



        default:
            return state
    }
}