import React from 'react'
import { View, Image, Text, StyleSheet} from 'react-native'

const RestaurantsDetail = ({ restaurant }) => {
    return (
        <View>
            <Text>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default RestaurantsDetail