import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class IngredientItem extends React.Component {

    render() {
        const { ingredient, displayDetailForIngredient } = this.props
        return (
            <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForIngredient(ingredient.strIngredient1)}>
                <Image
                    style={styles.image}
                    source={{uri: 'https://www.thecocktaildb.com/images/ingredients/' + ingredient.strIngredient1 + '-Medium.png'}}
                />
                <View style={styles.content_container}>
                    <Text style={styles.title_text}>{ingredient.strIngredient1}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'white'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    }
})

export default IngredientItem
