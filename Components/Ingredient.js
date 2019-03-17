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
        this.setState({
          ingredients: [ ...data.drinks ],
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
