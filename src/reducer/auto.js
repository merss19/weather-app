import { ADD_CITY, DELETE_CITY, LOAD_CITY, START, SUCCESS, FAIL ,AUTO,DELETE_AUTO} from '../constants/ActionTypes'
import { Record, Map } from 'immutable'

const item = Record({
    "id": "",
    "city": ""
})

const initialState = Map(new item({
    "id": "",
    "city": ""
}))

export default function auto(state = initialState, action) {

    switch (action.type) {

        case AUTO + SUCCESS:
            console.log('AUTO')
            console.log(action)
            console.log(state)
            console.log(state.toJS())
            return state.set('id',action.data.id)
                        .set('city',action.data.name)

            /*return [
                {
                    city:action.data.name,
                    id:action.data.id,
                }
            ]*/

        case DELETE_AUTO:
            console.log('DELETE_AUTO')
            console.log(action)
            return state.set('id','')
                        .set('city','')

        default:
            return state
    }
}