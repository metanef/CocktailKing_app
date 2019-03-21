import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import CocktailList from './CocktailList'
import { connect } from 'react-redux'

class Favorites extends React.Component {
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

const styles = StyleSheet.create({
    app_icon: {
        width: 40,
        height: 40,
        marginRight: 15
    }
})

const mapStateToProps = state => {
    return {
        favoritesCocktail: state.favoritesCocktail
    }
}

export default connect(mapStateToProps)(Favorites)
