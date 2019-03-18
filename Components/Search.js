import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import { getCocktailFromApiWithSearchedText } from '../API/TCDBApi'
import Icon from 'react-native-vector-icons/Feather'
import CocktailItem from './CocktailItem'
import CocktailList from './CocktailList'
import News from './News'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
            cocktails: [],
            isLoading: false
        }
    }
    _loadCocktail() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getCocktailFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ cocktails: data.drinks, isLoading: false })
            })
        }
    }
    _searchTextInputChanged(text) {
        this.searchedText = text
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

  render() {
    if (this.searchedText == "") {
        result = <View style={styles.result_container}>
            <Text style={styles.default_text}>Random cocktail</Text>
            <News
                navigation={this.props.navigation}
            />
        </View>
    } else if (this.state.cocktails == null) {
        result = <Text style={styles.noresult}>No results</Text>
    } else {
        result = <CocktailList
            cocktails={this.state.cocktails}
            navigation={this.props.navigation}
            loadCocktails={this._loadCocktails}
        />
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.search_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Cocktail'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadCocktail()}
                />
                <Icon.Button
                    name="search"
                    color='#000000'
                    borderRadius={0}
                    style={styles.button}
                    onPress={() => this._loadCocktail()}
                ></Icon.Button>
            </View>
            <View style={styles.result_container}>
                {result}
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
    search_container: {
        flex: 1,
        flexDirection: 'row'
    },
    result_container: {
        flex: 9
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        flex: 9,
        paddingLeft: 5
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
    button: {
        flex: 1,
        backgroundColor: 'white'
    },
    noresult: {
        paddingLeft: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        textAlign: 'center',
        height: 50,
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

export default Search
