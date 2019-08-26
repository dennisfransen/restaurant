import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('')
    const [searchApi, restaurants, errorMessage] = useRestaurants()

    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />

            { errorMessage ? <Text>{errorMessage}</Text> : null }

            {/* <Text>Found {restaurants.length} results</Text> */}

            <ScrollView>
                <RestaurantsList navigation={navigation} restaurants={filterRestaurantsByPrice('$')} title="Cheap $" />
                <RestaurantsList navigation={navigation} restaurants={filterRestaurantsByPrice('$$')} title="Medium $$" />
                <RestaurantsList navigation={navigation} restaurants={filterRestaurantsByPrice('$$$')} title="Expensive $$$" />
                <RestaurantsList navigation={navigation} restaurants={filterRestaurantsByPrice('$$$$')} title="Super Expensive $$$$" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen