import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, restaurants, errorMessage] = useRestaurants()

    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />

            { errorMessage ? <Text>{errorMessage}</Text> : null }

            <Text>Found {restaurants.length} results</Text>

            <RestaurantsList restaurants={filterRestaurantsByPrice('$')} title="Cheap" />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$')} title="Medium" />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$$')} title="Expensive" />
            <RestaurantsList restaurants={filterRestaurantsByPrice('$$$$')} title="Super Expensive" />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen