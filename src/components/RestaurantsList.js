import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestaurantsDetail from '../components/RestaurantsDetail'

const RestaurantsList = ({ title, restaurants }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                data={restaurants}
                horizontal
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return <RestaurantsDetail restaurant={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default RestaurantsList