import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import Category from './Category'

class SortedCategory extends React.Component {
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
            cocktails: []
        }
    }

    _navigate(category) {
        this.props.navigation.navigate("Category", {cocktails:this.state.cocktails, navigation:this.props.navigation, category:category})
    }


    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.area_container_top}>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Ordinary Drink")}>
                        <ImageBackground
                            source={require('../assets/ordinary_drink.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Ordinary Drink</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Cocktail")}>
                        <ImageBackground
                            source={require('../assets/cocktail.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Cocktail</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.area_container_middle}>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Milk / Float / Shake")}>
                        <ImageBackground
                            source={require('../assets/milkshake.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Milk Shake</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Cocoa")}>
                        <ImageBackground
                            source={require('../assets/cocoa.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Cocoa</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.area_container_middle}>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Shot")}>
                        <ImageBackground
                            source={require('../assets/shot.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Shot</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Coffee / Tea")}>
                        <ImageBackground
                            source={require('../assets/coffee_tea.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Coffee / Tea</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.area_container_middle}>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Beer")}>
                        <ImageBackground
                            source={require('../assets/beer.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Beer</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Soft Drink / Soda")}>
                        <ImageBackground
                            source={require('../assets/soft_drink.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Soft Drink / Soda</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.area_container_bottom}>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Homemade Liqueur")}>
                        <ImageBackground
                            source={require('../assets/homemade.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Homemade Liqueur</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("Punch / Party Drink")}>
                        <ImageBackground
                            source={require('../assets/punch.jpg')}
                            resizeMode='cover'
                            imageStyle={{borderRadius: 20}}
                            style={styles.backgroundImage}
                        >
                            <Text style={styles.default_text}>Punch / Party Drink</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    area_container_top: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    area_container_middle: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    area_container_bottom: {
        flex: 1,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    default_text: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    backgroundContainer: {
        margin: 10,
        flex:1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    backgroundImage: {
        margin: 0,
        flex:1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    app_icon: {
        width: 40,
        height: 40,
        marginRight: 15
    }
})

export default SortedCategory
