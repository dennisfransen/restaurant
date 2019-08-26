import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const RestaurantsShowScreen = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null)
    const id = navigation.getParam('id')

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`)
        setRestaurant(response.data)
    }

    useEffect(() => {
        getRestaurant(id)
    }, [])

    if (!restaurant) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{restaurant.name}</Text>
            <Text style={styles.textStyle}>Address: {restaurant.location.address1}</Text>
            <Text style={styles.textStyle}>City: {restaurant.location.city}, {restaurant.location.zip_code}</Text>
            <Text style={styles.textStyle}>Phone: {restaurant.phone}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1
    },
    titleStyle: {
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 8
    },
    imageStyle: {
        alignSelf: "center",
        borderRadius: 5,
        height: 300,
        marginBottom: 8,
        width: "100%",
    }
})

export default RestaurantsShowScreen