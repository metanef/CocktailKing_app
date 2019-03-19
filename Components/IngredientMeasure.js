import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, Share } from 'react-native'
import { getCocktailDetailFromApi } from '../API/TCDBApi'
import { connect } from 'react-redux'

class IngredientMeasure extends React.Component {

    render() {
        const { ingredient, measure, navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.ingredient_container}
                onPress={() => navigation.navigate("IngredientDetail", { name: ingredient })}>
                <Image
                    style={styles.image_ingredient}
                    source={{uri: 'https://www.thecocktaildb.com/images/ingredients/'+ingredient+'-Small.png'}}
                />
                <Text style={styles.ingredient_text}>{ingredient}</Text>
                <Text style={styles.measure_text}>{measure}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    ingredient_container: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    },
    ingredient_text: {
        fontSize: 18,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        flex: 2,
    },
    measure_text: {
        fontSize: 18,
        color: '#bbb',
        textAlign: 'right',
        paddingBottom: 5,
        paddingTop: 5,
        textAlignVertical: 'center',
        paddingRight: 10,
        flex: 2
    },
    image_ingredient: {
        height: 60,
        paddingLeft: 5,
        marginBottom: 5,
        marginTop: 5,
        resizeMode: 'contain',
        flex:1
    }
})
export default IngredientMeasure
