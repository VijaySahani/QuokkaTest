import { combineReducers } from 'redux'

const user = (state = {}, action: { type: any; payload: any }) => {
    switch (action.type){
        case 'LOGIN':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer