import { ADD_CITY, DELETE_CITY, LOAD_CITY, START, SUCCESS, FAIL ,AUTO,DELETE_AUTO} from '../constants/ActionTypes'


const initialState =[]

export default function auto(state = initialState, action) {

    switch (action.type) {

        case AUTO + SUCCESS:
            console.log('AUTO')
            console.log(action)
            return [
                {
                    city:action.data.name,
                    id:action.data.id,
                }
            ]

        case DELETE_AUTO:
            console.log('DELETE_AUTO')
            console.log(action)
            return []

        default:
            return state
    }
}