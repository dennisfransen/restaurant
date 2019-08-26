import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import RestaurantsDetail from '../components/RestaurantsDetail'

const RestaurantsList = ({ title, restaurants, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                data={restaurants}
                horizontal
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantsShow')}>
                            <RestaurantsDetail restaurant={item} />
                        </TouchableOpacity>
                    )
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