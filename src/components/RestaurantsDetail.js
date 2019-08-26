import React from 'react'
import { View, Image, Text, StyleSheet} from 'react-native'
import { FontAwesome }from '@expo/vector-icons'

const RestaurantsDetail = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: restaurant.image_url }} 
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text>{restaurant.rating} <FontAwesome name="star" style={{color: 'gold'}} />, {restaurant.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        borderRadius: 4,
        height: 120,
        marginBottom: 5,
        width: 250,
    },
    nameStyle: {
        fontWeight: "bold"
    }
})

export default RestaurantsDetail