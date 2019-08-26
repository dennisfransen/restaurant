import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestaurantsDetail from '../components/RestaurantsDetail'

const RestaurantsList = ({ title, restaurants }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                data={restaurants}
                horizontal
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return <RestaurantsDetail restaurant={item} />
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 15
    }
})

export default RestaurantsList