import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Category from './Category'

class SortedCategory extends React.Component {

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
                  <TouchableOpacity style={styles.area4} onPress={() => this._navigate("Ordinary Drink")}>
                      <Text style={styles.default_text}>Ordinary Drink</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area1} onPress={() => this._navigate("Cocktail")}>
                      <Text style={styles.default_text}>Cocktail</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_middle}>
                  <TouchableOpacity style={styles.area10} onPress={() => this._navigate("Milk / Float / Shake")}>
                      <Text style={styles.default_text}>Milk / Float / Shake</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area6} onPress={() => this._navigate("Cocoa")}>
                      <Text style={styles.default_text}>Cocoa</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_middle}>
                  <TouchableOpacity style={styles.area8} onPress={() => this._navigate("Shot")}>
                      <Text style={styles.default_text}>Shot</Text>
                      {/* Cointreau Grand marnier */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area5} onPress={() => this._navigate("Coffee / Tea")}>
                      <Text style={styles.default_text}>Coffee / Tea</Text>
                      {/* Whisky */}
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_middle}>
                  <TouchableOpacity style={styles.area7} onPress={() => this._navigate("Beer")}>
                      <Text style={styles.default_text}>Beer</Text>
                      {/* Cointreau Grand marnier */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area3} onPress={() => this._navigate("Soft Drink / Soda")}>
                      <Text style={styles.default_text}>Soft Drink / Soda</Text>
                      {/* Whisky */}
                  </TouchableOpacity>
              </View>
              <View style={styles.area_container_bottom}>
                  <TouchableOpacity style={styles.area9} onPress={() => this._navigate("Homemade Liqueur")}>
                      <Text style={styles.default_text}>Homemade Liqueur</Text>
                      {/* Cointreau Grand marnier */}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.area2} onPress={() => this._navigate("Punch / Party Drink")}>
                      <Text style={styles.default_text}>Punch / Party Drink</Text>
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
          backgroundColor: "#F45337"
      },
      area3: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#F4EAC6"
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
          backgroundColor: "#8b6e47"
      },
      area6: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#ad8f58"
      },
      area7: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#fbbe05"
      },
      area8: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#02AAC7"
      },
      area9: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#A0C462"
      },
      area10: {
          margin: 10,
          flex:1,
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: "#ddd"
      }
  })

  export default SortedCategory
