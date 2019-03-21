import React from 'react'
import { Image, StyleSheet } from 'react-native'
import IngredientList from './IngredientList'
import { getIngredientListFromApi } from '../API/TCDBApi'

class Ingredient extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        // access to sharefilm function via navigation params
            return {
                // show icon thanks to touchable
                headerRight:
                <Image
                    style={styles.app_icon}
                    source={require('../assets/icon.png')}
                />
            }
    }

    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            isLoading: false
        }
        this._loadIngredients = this._loadIngredients.bind(this)
    }

    componentDidMount() {
        this._loadIngredients()
    }

    _loadIngredients() {
        this.setState({ isLoading: true })
        getIngredientListFromApi().then(data => {
            ingredient_sort = data.drinks.sort(function(a, b) {
                var nameA=a.strIngredient1.toLowerCase(), nameB=b.strIngredient1.toLowerCase()
                if (nameA < nameB) //sort string ascending
                return -1
                if (nameA > nameB)
                return 1
                return 0 //default return value (no sorting)
            })
            this.setState({
                ingredients: [ ...ingredient_sort ],
                isLoading: false
            })
        })
    }

    render() {
        return (
            <IngredientList
                ingredients={this.state.ingredients}
                navigation={this.props.navigation}
                loadIngredients={this._loadIngredients}
            />
        )
    }
}
const styles = StyleSheet.create({
    app_icon: {
        width: 40,
        height: 40,
        marginRight: 15
    }
})

export default Ingredient
