import { ADD_CITY,  } from '../constants/ActionTypes'

const initialState = [

]

export default function city(state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            console.log(action)
            console.log(state)
            console.log('ADD_CITYyyyyy')
        return [
            {
                city:action.text
            },
            ...state
        ]




        default:
            return state
    }
}