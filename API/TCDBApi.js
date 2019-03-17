const API_TOKEN = '1'

// Cocktail methods
export function getCocktailFromApiWithSearchedText(text) {
    const url = 'https://www.thecocktaildb.com/api/json/v1/' + API_TOKEN + '/search.php?s=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getCocktailDetailFromApi (id) {
  return fetch('https://www.thecocktaildb.com/api/json/v1/' + API_TOKEN + '/lookup.php?i=' + id)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getRandomCocktailFromApi () {
  return fetch('https://www.thecocktaildb.com/api/json/v1/' + API_TOKEN + '/random.php')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

// Ingredient methods
export function getIngredientListFromApi () {
  return fetch('https://www.thecocktaildb.com/api/json/v1/' + API_TOKEN + '/list.php?i=list')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
export function getIngredientDetailFromApi (name) {
  return fetch('https://www.thecocktaildb.com/api/json/v1/' + API_TOKEN + '/search.php?i='+ name)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
// export function getIngredientImageFromApi (name) {
//     return 'https://www.thecocktaildb.com/images/ingredients/' + name + '-Small.png'
// }
