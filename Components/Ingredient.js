import React from 'react'
import { } from 'react-native'
import IngredientList from './IngredientList'
import { getIngredientListFromApi } from '../API/TCDBApi'

class Ingredient extends React.Component {
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

export default Ingredient
