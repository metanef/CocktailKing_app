import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CocktailItem from './CocktailItem'
import { connect } from 'react-redux'

class CocktailList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cocktails: []
    }
  }

  _displayDetailForCocktail = (idCocktail) => {
      this.props.navigation.navigate("CocktailDetail", { idCocktail: idCocktail })
  }

  render() {
    return (
        <FlatList
            style={styles.list}
            data={this.props.cocktails}
            extraData={this.props.favoritesCocktail}
            keyExtractor={(item) => item.idDrink}
            renderItem={({item}) => (
                <CocktailItem
                    cocktail={item}
                    isCocktailFavorite={(this.props.favoritesCocktail.findIndex(cocktail => cocktail.idDrink === item.idDrink) !== -1) ? true : false}
                    displayDetailForCocktail={this._displayDetailForCocktail}
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

export default connect(mapStateToProps)(CocktailList)
