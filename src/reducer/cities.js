import { ADD_CITY, DELETE_CITY, LOAD_CITY, START, SUCCESS, FAIL ,AUTO} from '../constants/ActionTypes'
import { Record, Map, List,fromJS } from 'immutable'

let localCities = JSON.parse(localStorage.getItem('cities'));
console.log('localCities')
console.log(localCities)
console.log((localCities))
//const initialState =localCities || []

const itemCity = Record({
    "id": "",
    "city": "",
    "data":""
})

const initialState = List(localCities) || List()

export default function cities(state = initialState, action) {

    switch (action.type) {

        case DELETE_CITY:
            return state.filter(city =>
                city.id !== action.id
            )

        case LOAD_CITY + SUCCESS:
            console.log('LOAD_CITY + SUCCESS')
            console.log(state)
            const isCity = state.find((city) => city.id == action.data.id)

            if(!isCity){
                return  state.push( new itemCity({
                "id": action.data.id,
                "city": action.data.name,
                "data": action.data
                })
                )
            }
           /* return [
                {
                    city:action.data.name,
                    id:action.data.id,
                    data:action.data
                },
                ...state
            ]*/

        case LOAD_CITY + FAIL:
            console.log(action)



        default:
            return state
    }
}