const initialState = { kanyeQuotes: '', myQuotes: [], myFavorite: [] };

export const AppReducer = (state = initialState, action) => {
  if (action.type === 'GETQOUTE') {
    return {
      kanyeQuotes: action.quote,
    };
  }
  if (action.type === 'ADDFAVORITE') {
    return {
      myFavorite: action.favorite,
    };
  }
  if (action.type === 'MYQOUTES') {
    state.myQuotes.push(action.myquote);
    return state;
  }
  return state;
};
