import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, Share } from 'react-native'
import { getCocktailDetailFromApi } from '../API/TCDBApi'
import { connect } from 'react-redux'
import Ingredient from './IngredientMeasure'

class CocktailDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        // access to sharefilm function via navigation params
        if (params.cocktail != undefined) {
            return {
                // show icon thanks to touchable
                headerRight: <TouchableOpacity
                    style={styles.share_touchable_headerrightbutton}
                    onPress={() => params.shareCocktail()}>
                    <Image
                        style={styles.share_image}
                        source={require('../assets/ic_share.png')}
                    />
                </TouchableOpacity>
            }
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            cocktail: undefined,
            isLoading: true
        }
        this._shareCocktail = this._shareCocktail.bind(this)
    }
    _updateNavigationParams() {
        this.props.navigation.setParams({
            shareCocktail: this._shareCocktail,
            cocktail: this.state.cocktail
        })
    }
    componentDidMount() {
        const favoriteCocktailIndex = this.props.favoritesCocktail.findIndex(item => item.id === this.props.navigation.state.params.idCocktail)
        if (favoriteCocktailIndex !== -1) { // cocktail already in favorite list
            // get cocktail infos from global state
            this.setState({
                cocktail: this.props.favoritesCocktail[favoriteCocktailIndex]
            }, () => { this._updateNavigationParams() })
            return
        }
        // cocktail not in favoritelist
        // API call to get cocktail infos
        this.setState({ isLoading: true })
        getCocktailDetailFromApi(this.props.navigation.state.params.idCocktail).then(data => {
            this.setState({
                cocktail: data.drinks[0],
                isLoading: false
            },() => { this._updateNavigationParams() })
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.state.cocktail }
        this.props.dispatch(action)
    }

    _displayFavoriteImage() {
        var sourceImage = require('../assets/ic_favorite_border.png')
        if (this.props.favoritesCocktail.findIndex(item => item.idDrink === this.state.cocktail.idDrink) !== -1) {
            sourceImage = require('../assets/ic_favorite.png')
        }
        return (
            <Image
                style={styles.favorite_image}
                source={sourceImage}
            />
        )
    }

    // share cocktail name and picture
    _shareCocktail() {
        const { cocktail } = this.state
        Share.share({ title: 'CocktailKing app', message: 'We have to try this cocktail : ' + cocktail.strDrink + ' ' + cocktail.strDrinkThumb })
    }

    _displaycocktail() {
        const { cocktail } = this.state

        if (cocktail != undefined) {
            var ingredient = []

            if (cocktail.strIngredient1 !== "" && cocktail.strIngredient1 !== null) {ingredient.push(
                <Ingredient
                    key='1'
                    ingredient={cocktail.strIngredient1}
                    measure={cocktail.strMeasure1}
                    navigation={this.props.navigation}
                />
            )}
            if (cocktail.strIngredient2 !== "" && cocktail.strIngredient2 !== null) {ingredient.push(<Ingredient key='2' ingredient={cocktail.strIngredient2} measure={cocktail.strMeasure2} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient3 !== "" && cocktail.strIngredient3 !== null) {ingredient.push(<Ingredient key='3' ingredient={cocktail.strIngredient3} measure={cocktail.strMeasure3} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient4 !== "" && cocktail.strIngredient4 !== null) {ingredient.push(<Ingredient key='4' ingredient={cocktail.strIngredient4} measure={cocktail.strMeasure4} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient5 !== "" && cocktail.strIngredient5 !== null) {ingredient.push(<Ingredient key='5' ingredient={cocktail.strIngredient5} measure={cocktail.strMeasure5} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient6 !== "" && cocktail.strIngredient6 !== null) {ingredient.push(<Ingredient key='6' ingredient={cocktail.strIngredient6} measure={cocktail.strMeasure6} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient7 !== "" && cocktail.strIngredient7 !== null) {ingredient.push(<Ingredient key='7' ingredient={cocktail.strIngredient7} measure={cocktail.strMeasure7} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient8 !== "" && cocktail.strIngredient8 !== null) {ingredient.push(<Ingredient key='8' ingredient={cocktail.strIngredient8} measure={cocktail.strMeasure8} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient9 !== "" && cocktail.strIngredient9 !== null) {ingredient.push(<Ingredient key='9' ingredient={cocktail.strIngredient9} measure={cocktail.strMeasure9} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient10 !== "" && cocktail.strIngredient10 !== null) {ingredient.push(<Ingredient key='10' ingredient={cocktail.strIngredient10} measure={cocktail.strMeasure10} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient11 !== "" && cocktail.strIngredient11 !== null) {ingredient.push(<Ingredient key='11' ingredient={cocktail.strIngredient11} measure={cocktail.strMeasure11} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient12 !== "" && cocktail.strIngredient12 !== null) {ingredient.push(<Ingredient key='12' ingredient={cocktail.strIngredient12} measure={cocktail.strMeasure12} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient13 !== "" && cocktail.strIngredient13 !== null) {ingredient.push(<Ingredient key='13' ingredient={cocktail.strIngredient13} measure={cocktail.strMeasure13} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient14 !== "" && cocktail.strIngredient14 !== null) {ingredient.push(<Ingredient key='14' ingredient={cocktail.strIngredient14} measure={cocktail.strMeasure14} navigation={this.props.navigation}/>)}
            if (cocktail.strIngredient15 !== "" && cocktail.strIngredient15 !== null) {ingredient.push(<Ingredient key='15' ingredient={cocktail.strIngredient15} measure={cocktail.strMeasure15} navigation={this.props.navigation}/>)}
            var tag = null
            if (cocktail.strTags !== "" && cocktail.strTags !== null) {
                tag = <Text style={styles.tag_text}>{cocktail.strTags}</Text>
            }

            return (
                <View style={styles.card_container}>
                    <View style={styles.card}>
                        <View style={styles.image_container}>
                            <View style={styles.title_container}>
                                <Text style={styles.title_text}>{cocktail.strDrink}</Text>
                                <Text style={styles.subtitle_text}>{cocktail.strCategory}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.favorite_container}
                                onPress={() => this._toggleFavorite()}>
                                {this._displayFavoriteImage()}
                            </TouchableOpacity>
                            <Image
                                style={styles.image}
                                source={{uri: cocktail.strDrinkThumb}}
                            />
                        </View>
                        <ScrollView>
                            <View style={styles.description_container}>
                                {tag}
                                <Text style={styles.description_text}>{cocktail.strInstructions}</Text>
                                <View style={styles.glass_container}>
                                    <Text style={styles.glass_text_left}>Glass</Text>
                                    <Text style={styles.glass_text_right}>{cocktail.strGlass}</Text>
                                </View>
                                <Text style={styles.title_ingredient}>Ingredients</Text>
                            </View>
                            <FlatList
                                data={ingredient}
                                keyExtractor={(item) => item.key}
                                renderItem={({item}) => item}
                            />
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displaycocktail()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    share_touchable_headerrightbutton: {
        marginRight: 8
    },
    share_image: {
        width: 30,
        height: 30
    },
    favorite_container: {
        margin: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 5
    },
    favorite_image: {
        width: 40,
        height: 40,
    },
    image_container: {
        // flex:3
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_container: {
        flex: 1,
        marginTop: -4
    },
    card: {
        flex: 1,
    },
    title_ingredient: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#bbb',
        paddingTop: 5,
        paddingBottom: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 5
    },
    image: {
        height: 220,
        marginTop: 5,
        marginBottom: 5
    },
    title_container: {
        position: 'absolute',
        top: 2,
        // backgroundColor: 'rgba(200, 200, 200, 0.2)',
        width: '100%',
        zIndex: 5
    },
    title_text: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10,
        fontSize: 35,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
        color: '#fff',
        textAlign: 'left'
    },
    subtitle_text: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10,
        fontSize: 20,
        flexWrap: 'wrap',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0,
        color: '#ddd',
        textAlign: 'left'
    },
    description_container: {
        padding: 5
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15,
        fontSize: 18
    },
    glass_container: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 20
    },
    glass_text_left: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        fontSize: 18,
        textAlign: 'left',
        flex: 1,
        color: '#bbb'
    },
    glass_text_right: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        fontSize: 18,
        textAlign: 'right',
        flex: 1,
        color: '#bbb'
    },
    tag_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ddd'
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesCocktail: state.favoritesCocktail
    }
}

export default connect(mapStateToProps)(CocktailDetail)
