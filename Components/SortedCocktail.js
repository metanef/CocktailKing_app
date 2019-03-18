import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Alcool from './Alcool'

class SortedCocktail extends React.Component {

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
                  <TouchableOpacity style={styles.area1} onPress={() => this._navigate("vodka")}>
                      <Text style={styles.default_text}>Vodka</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area2} onPress={() => this._navigate("rum")}>
                      <Text style={styles.default_text}>Rum</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_middle}>
                  <TouchableOpacity style={styles.area3} onPress={() => this._navigate("tequila")}>
                      <Text style={styles.default_text}>Tequila</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area4} onPress={() => this._navigate("gin")}>
                      <Text style={styles.default_text}>Gin</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_bottom}>
                  <TouchableOpacity style={styles.area5} onPress={() => this._navigate("triple sec")}>
                      <Text style={styles.default_text}>Triple sec</Text>
                      {/* Cointreau Grand marnier */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area6} onPress={() => this._navigate("whiskey")}>
                      <Text style={styles.default_text}>Whiskey</Text>
                      {/* Whisky */}
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
          fontSize: 20,
          textAlign: 'center',
          color: 'white'
      },
      area1: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#d3b9d1"
      },
      area2: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#bfbfbf"
      },
      area3: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#c4cad0"
      },
      area4: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#98a6d4"
      },
      area5: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#bfa972"
      },
      area6: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#ad8f58"
      }
  })

  export default SortedCocktail
