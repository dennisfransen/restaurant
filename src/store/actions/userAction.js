export const GET_RESTAURANT = 'GET_RESTAURANT'

export const getRestaurant = (restaurant) => {
    return {type: GET_RESTAURANT, payload: restaurant}
}