import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CocktailList from './CocktailList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

    render() {
        return (
            <CocktailList
                cocktails={this.props.favoritesCocktail}
                navigation={this.props.navigation}
                favoriteList={true}
            />
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesCocktail: state.favoritesCocktail
    }
}

export default connect(mapStateToProps)(Favorites)
