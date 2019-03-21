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

        if (ingredient.strDescription !== "" && ingredient.strDescription !== null) {
            description = <Text style={styles.description_text}>{ingredient.strDescription}</Text>
        } else {
            description = <Text style={styles.nodescription_text}>No description</Text>
        }
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
                    {description}
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
        color: '#666666',
        padding: 10,
        paddingBottom: 15,
        margin: 10,
        fontSize: 18,
        backgroundColor: '#efefef',
        borderRadius: 20,
    },
    nodescription_text: {
        color: '#666666',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 15,
    },
    scrollview: {
        flex: 3
    },
    header: {
        flex: 1
    }
})


export default IngredientDetail
