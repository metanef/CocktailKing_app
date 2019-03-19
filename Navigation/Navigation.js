import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import CocktailDetail from '../Components/CocktailDetail'
import Favorites from '../Components/Favorites'
import IngredientDetail from '../Components/IngredientDetail'
import News from '../Components/News'
import Ingredient from '../Components/Ingredient'
import Alcool from '../Components/Alcool'
import SortedCocktail from '../Components/SortedCocktail'
import SortedCategory from '../Components/SortedCategory'
import Category from '../Components/Category'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Home'// /!\attention
        }
    },
    CocktailDetail: {
        screen: CocktailDetail
    },
    IngredientDetail: {
      screen: IngredientDetail,
    }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  },
  CocktailDetail: {
    screen: CocktailDetail
},
IngredientDetail: {
  screen: IngredientDetail,
}
})

const AlcoolStackNavigator = createStackNavigator({
  SortedCocktail: {
    screen: SortedCocktail,
    navigationOptions: {
      title: 'Spirits',
    },
  },
  Alcool: {
    screen: Alcool,
  },
  CocktailDetail: {
    screen: CocktailDetail
    },
    IngredientDetail: {
      screen: IngredientDetail,
    }
})
const SortedCategoryStackNavigator = createStackNavigator({
  SortedCategory: {
    screen: SortedCategory,
    navigationOptions: {
      title: 'Category',
    },
  },
  Category: {
    screen: Category,
  },
  CocktailDetail: {
    screen: CocktailDetail
  },
  IngredientDetail: {
    screen: IngredientDetail,
  }
})

const IngredientStackNavigator = createStackNavigator({
  Ingredient: {
    screen: Ingredient,
    navigationOptions: {
      title: 'Ingredients',
    },
  },
  IngredientDetail: {
    screen: IngredientDetail,
  }
})

const CocktailTabNavigator = createBottomTabNavigator({
        SortedCategory: {
          screen: SortedCategoryStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image
                source={require('../assets/ic_cocktail.png')}
                style={styles.icon}/>
            }
          }
        },
        SortedCocktail: {
          screen: AlcoolStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image
                source={require('../assets/ic_spirits.png')}
                style={styles.icon}/>
            }
          }
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => { // Icon render
                    return <Image
                        source={require('../assets/ic_home.png')}
                        style={styles.icon} // Icon style
                    />
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/ic_favorite_dark.png')}
                        style={styles.icon}
                    />
                }
            }
        },
        Ingredient: {
            screen: IngredientStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/ic_book.png')}
                        style={styles.icon}
                    />
                }
            }
        }
    },
    {
        initialRouteName: 'Search',
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD', // ative tab background color
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false, // hide titles
            showIcon: true // show icons
        }
    }
)

    const styles = StyleSheet.create({
        icon: {
            width: 30,
            height: 30
        }
    })

    export default createAppContainer(CocktailTabNavigator)
