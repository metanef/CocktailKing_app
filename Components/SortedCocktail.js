import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import Alcool from './Alcool'

class SortedCocktail extends React.Component {
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

    _navigate(alcool) {
        this.props.navigation.navigate("Alcool", {cocktails:this.state.cocktails, navigation:this.props.navigation, alcool:alcool})
    }


    render() {
      return (
          <View style={styles.main_container}>
            <View style={styles.area_container_top}>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("vodka")}>
                    <ImageBackground
                        source={require('../assets/vodka.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                        <Text style={styles.default_text}>Vodka</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("rum")}>
                    <ImageBackground
                        source={require('../assets/rum.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                            <Text style={styles.default_text}>Rum</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.area_container_middle}>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("tequila")}>
                    <ImageBackground
                        source={require('../assets/tequila.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                        <Text style={styles.default_text}>Tequila</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("gin")}>
                    <ImageBackground
                        source={require('../assets/gin.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                        <Text style={styles.default_text}>Gin</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.area_container_bottom}>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("triple sec")}>
                    <ImageBackground
                        source={require('../assets/triple_sec.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                        <Text style={styles.default_text}>Triple sec</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backgroundContainer} onPress={() => this._navigate("whiskey")}>
                    <ImageBackground
                        source={require('../assets/whiskey.jpg')}
                        resizeMode='cover'
                        imageStyle={{borderRadius: 20}}
                        style={styles.backgroundImage}
                    >
                        <Text style={styles.default_text}>Whiskey</Text>
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
      app_icon: {
          width: 40,
          height: 40,
          marginRight: 15
      }
  })

  export default SortedCocktail
