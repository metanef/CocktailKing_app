import React from 'react'
import { } from 'react-native'
import CocktailList from './CocktailList'
import { getRandomCocktailFromApi } from '../API/TCDBApi'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktails: [],
            isLoading: false
        }
        this._loadCocktails = this._loadCocktails.bind(this)
    }

    componentDidMount() {
        this._loadCocktails()
    }

    _loadCocktails() {
        this.setState({ isLoading: true })
        getRandomCocktailFromApi().then(data => {
            this.setState({
                cocktails: [ ...data.drinks ],
                isLoading: false
            })
        })
    }

    render() {
        return (
            <CocktailList
                cocktails={this.state.cocktails}
                navigation={this.props.navigation}
                loadCocktails={this._loadCocktails}
                favoriteList={false}
            />
        )
    }
}

export default News
