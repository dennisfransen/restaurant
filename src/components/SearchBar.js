import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search" 
                style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                placeholder="Search" 
                style={styles.inputStyle} 
                value={term}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        borderRadius: 5,
        flexDirection: "row",
        height: 50,
        marginTop: 15,
        marginHorizontal: 15
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35,
        marginHorizontal: 15
    }
})

export default SearchBar