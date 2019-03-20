import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { getCocktailByIngredientFromApi } from '../API/TCDBApi'
import CocktailItem from './CocktailItem'
import CocktailList from './CocktailList'

class Alcool extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cocktails: [],
            isLoading: false
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

    componentDidMount() {
        this._loadCocktails(this.props.navigation.state.params.alcool)
    }
    _loadCocktails(ingredient) {
        this.setState({ isLoading: true })
        getCocktailByIngredientFromApi(ingredient).then(data => {
            this.setState({ cocktails: data.drinks, isLoading: false })
        })
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.result_container}>
                    <CocktailList
                        cocktails={this.state.cocktails}
                        navigation={this.props.navigation}
                        loadCocktails={this._loadCocktails}
                    />
                    {this._displayLoading()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    result_container: {
        flex: 9
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#555'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Alcool
