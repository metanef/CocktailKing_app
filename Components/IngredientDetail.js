import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView } from 'react-native'
import { getIngredientDetailFromApi } from '../API/TCDBApi'

class IngredientDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredient: [],
            isLoading: true
        }
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
    _updateNavigationParams() {
        this.props.navigation.setParams({
            ingredient: this.state.ingredient
        })
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        getIngredientDetailFromApi(this.props.navigation.state.params.name).then(data => {
            this.setState({
                ingredient: data.ingredients[0],
                isLoading: false
            }, () => { this._updateNavigationParams() })
        })
    }

    render() {
        const { ingredient } = this.state
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                <View style={styles.header}>
                    <Text style={styles.title_text}>{ingredient.strIngredient}</Text>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://www.thecocktaildb.com/images/ingredients/' + ingredient.strIngredient + '.png'}}
                    />
                </View>
                <ScrollView style={styles.scrollview}>
                    <Text style={styles.description_text}>{ingredient.strDescription}</Text>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
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
    image: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        resizeMode: 'contain'
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
    scrollview: {
        flex: 1
    },
    header: {
        flex: 2
    }
})


export default IngredientDetail
