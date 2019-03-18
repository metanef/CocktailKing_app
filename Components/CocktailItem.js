import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import FadeIn from '../Animations/FadeIn'

class CocktailItem extends React.Component {

    _displayFavoriteImage() {
        // console.log(this.props.isCocktailFavorite);
      if (this.props.isCoctkailFavorite) {
        return (
            <Image
                style={styles.favorite_image}
                source={require('../assets/ic_favorite.png')}
            />
        )
      }
    }

    render() {
        const { cocktail, displayDetailForCocktail } = this.props
        return (
            <FadeIn>
                <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForCocktail(cocktail.idDrink)}>
                    <Image
                        style={styles.image}
                        source={{uri: cocktail.strDrinkThumb}}
                    />
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            {this._displayFavoriteImage()}
                            <Text style={styles.title_text}>{cocktail.strDrink}</Text>
                            <Text style={styles.alcoholic_text}>{cocktail.strAlcoholic}</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text} numberOfLines={4}>{cocktail.strInstructions}</Text>
                        </View>
                        <View style={styles.category_container}>
                            <Text style={styles.category_text}>{cocktail.strCategory}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
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
        height: 180,
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    alcoholic_text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    category_container: {
        flex: 1
    },
    category_text: {
        textAlign: 'right',
        fontSize: 14
    },
    favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
    }
})

export default CocktailItem
