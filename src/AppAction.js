export const getQuotesHandler = (dispatch, namequote) => {
  dispatch({ type: 'GETQOUTE', quote: namequote });
};
export const addFavoriteHandler = (dispatch, favoritequote) => {
  dispatch({ type: 'ADDFAVORITE', favorite: favoritequote });
};
export const myQuoteHandler = (dispatch, quote) => {
  dispatch({ type: 'MYQOUTES', myquote: quote });
};
