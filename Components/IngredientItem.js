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
        height: 110,
        flexDirection: 'row',
        borderRadius: 0,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        shadowColor: 'black',
        shadowOffset: {width: 30, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 1
    },
    image: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
        margin: 5,
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    title_text: {
        textAlignVertical: 'center',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        color: '#bbb',
        flexWrap: 'wrap',
        paddingRight: 22
    }
})

export default IngredientItem
