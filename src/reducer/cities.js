import { ADD_CITY, DELETE_CITY, LOAD_CITY, START, SUCCESS, FAIL } from '../constants/ActionTypes'

const initialState = [

]
let id = 0
export default function cities(state = initialState, action) {
    ++id
    switch (action.type) {
        case ADD_CITY:
            console.log(action)
            console.log(state)
            console.log('ADD_CITYyyyyy')
        return [
            {
                city:action.text,
                id:id
            },
            ...state
        ]
        case DELETE_CITY:
            return state.filter(city =>
                city.id !== action.id
            )

        case LOAD_CITY + SUCCESS:
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