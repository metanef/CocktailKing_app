const initialState = { favoritesCocktail: [] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoritesCocktailIndex = state.favoritesCocktail.findIndex(item => item.idDrink === action.value.idDrink)
            if (favoritesCocktailIndex !== -1) {
                // cocktail already in favorite, remove it
                nextState = {
                    ...state,
                    favoritesCocktail: state.favoritesCocktail.filter( (item, index) => index !== favoritesCocktailIndex)
                }
            }
            else {
                // cocktail not in favorite, add it
                nextState = {
                    ...state,
                    favoritesCocktail: [...state.favoritesCocktail, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite
