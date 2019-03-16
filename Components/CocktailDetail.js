import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, Share } from 'react-native'
import { getCocktailDetailFromApi } from '../API/TCDBApi'
import { connect } from 'react-redux'

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

    _shareCocktail() {
        const { cocktail } = this.state
        Share.share({ title: 'CocktailKing app', message: 'We have to try this cocktail : ' + cocktail.strDrink })
    }

    _displaycocktail() {
        const { cocktail } = this.state

        if (cocktail != undefined) {
            var ingredient = []
            // for (var i = 1; i <= 15; i++) {
            //     var test = "cocktail.strIngredient"+i
            //     ingredient.push(<Text key={i} style={styles.default_text}>{test}</Text>)
            // }
            if (cocktail.strIngredient1 !== "") {ingredient.push(
                <View key='1' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient1}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure1}</Text>
                </View>
            )}
            if (cocktail.strIngredient2 !== "") {ingredient.push(
                <View key='2' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient2}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure2}</Text>
                </View>
            )}
            if (cocktail.strIngredient3 !== "") {ingredient.push(
                <View key='3' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient3}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure3}</Text>
                </View>
            )}
            if (cocktail.strIngredient4 !== "") {ingredient.push(
                <View key='4' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient4}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure4}</Text>
                </View>
            )}
            if (cocktail.strIngredient5 !== "") {ingredient.push(
                <View key='5' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient5}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure5}</Text>
                </View>
            )}
            if (cocktail.strIngredient6 !== "") {ingredient.push(
                <View key='6' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient6}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure6}</Text>
                </View>
            )}
            if (cocktail.strIngredient7 !== "") {ingredient.push(
                <View key='7' style={styles.ingredient_container}>
                    <Text style={styles.ingredient_text}>{cocktail.strIngredient7}</Text>
                    <Text style={styles.measure_text}>{cocktail.strMeasure7}</Text>
                </View>
            )}
            if (cocktail.strIngredient8 !== "") {ingredient.push(<Text key='8' style={styles.default_text}>{cocktail.strIngredient8}</Text>)}
            if (cocktail.strIngredient9 !== "") {ingredient.push(<Text key='9' style={styles.default_text}>{cocktail.strIngredient9}</Text>)}
            if (cocktail.strIngredient10 !== "") {ingredient.push(<Text key='10' style={styles.default_text}>{cocktail.strIngredient10}</Text>)}
            if (cocktail.strIngredient11 !== "") {ingredient.push(<Text key='11' style={styles.default_text}>{cocktail.strIngredient11}</Text>)}
            if (cocktail.strIngredient12 !== "") {ingredient.push(<Text key='12' style={styles.default_text}>{cocktail.strIngredient12}</Text>)}
            if (cocktail.strIngredient13 !== "") {ingredient.push(<Text key='13' style={styles.default_text}>{cocktail.strIngredient13}</Text>)}
            if (cocktail.strIngredient14 !== "") {ingredient.push(<Text key='14' style={styles.default_text}>{cocktail.strIngredient14}</Text>)}
            if (cocktail.strIngredient15 !== "") {ingredient.push(<Text key='15' style={styles.default_text}>{cocktail.strIngredient15}</Text>)}

            return (
                <View style={styles.card_container}>
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.title_text}>{cocktail.strDrink}</Text>
                            <TouchableOpacity
                                style={styles.favorite_container}
                                onPress={() => this._toggleFavorite()}>
                                {this._displayFavoriteImage()}
                            </TouchableOpacity>
                            <Image
                                style={styles.image}
                                source={{uri: cocktail.strDrinkThumb}}
                            />
                            <Text style={styles.description_text}>{cocktail.strInstructions}</Text>
                            <Text style={styles.default_text, styles.center_text}>Glass - {cocktail.strGlass}</Text>
                            <Text style={styles.default_text}>Ingredients : </Text>
                        </View>
                        <ScrollView style={styles.scrollview}>
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
        alignItems: 'center'
    },
    favorite_image: {
        width: 40,
        height: 40
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
        flex: 1
    },
    card: {
        flex: 1,
        // margin: 10,
        // borderRadius: 0,
        // shadowColor: 'black',
        // shadowOffset: {width: 30, height: 10},
        // shadowOpacity: 0.5,
        // shadowRadius: 20,
        // elevation: 1
    },
    header: {
        flex: 2
    },
    scrollview: {
        flex: 1
    },
    ingredient_container: {
        backgroundColor: '#eee',
        flexDirection: 'row'
    },
    ingredient_text: {
        textAlign: 'left',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        flex: 1
    },
    measure_text: {
        textAlign: 'right',
        paddingBottom: 5,
        paddingTop: 5,
        paddingRight: 5,
        flex: 1
    },
    image: {
        height: 159,
        marginTop: 5,
        marginBottom: 5,
        flex: 2
    },
    title_text: {
        fontSize: 35,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 0,
        color: '#000000',
        textAlign: 'left'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15,
        flex: 2
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    center_text: {
        textAlign: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesCocktail: state.favoritesCocktail
    }
}

export default connect(mapStateToProps)(CocktailDetail)
