let arrayFav = [];
const initialState = { kanyeQuotes: '', myQuotes: [], myFavorite: arrayFav };

export const AppReducer = (state = initialState, action) => {
  if (action.type === 'GETQOUTE') {
    return {
      kanyeQuotes: action.quote,
    };
  }
  if (action.type === 'ADDFAVORITE') {
    state.myFavorite = arrayFav.slice();
    arrayFav.push(action.favorite);
    return { myFavorite: arrayFav };
  }
  if (action.type === 'MYQOUTES') {
    state.myQuotes.push(action.myquote);
    return state;
  }
  return state;
};
