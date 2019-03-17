import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import IngredientItem from './IngredientItem'
import { connect } from 'react-redux'

class IngredientList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  _displayDetailForIngredient = (name) => {
      this.props.navigation.navigate("IngredientDetail", { name: name })
  }

  render() {
    return (
        <FlatList
            style={styles.list}
            data={this.props.ingredients}
            keyExtractor={(item) => item.strIngredient1}
            renderItem={({item}) => (
                <IngredientItem
                    ingredient={item}
                    displayDetailForIngredient={this._displayDetailForIngredient}
                />
            )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesCocktail: state.favoritesCocktail
  }
}

export default connect(mapStateToProps)(IngredientList)
