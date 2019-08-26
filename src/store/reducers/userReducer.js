import { GET_RESTAURANT } from '../actions/userAction'

const initialState = {
    restaurants: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT:
            return { ...state, restaurants: state.restaurants.concat(action.payload) }
        default:
            break
    }
    return state
}

export default UserReducer