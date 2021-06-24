import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteHandler, getQuotesHandler } from './AppAction';
import Form from './Form';
function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.kanyeQuotes);
  const quoteFavorite = useSelector((state) => state.myFavorite);
  const myquote = useSelector((state) => state.myQuotes);
  const getQuotes = () => {
    axios
      .get('https://api.kanye.rest/')
      .then((req) => {
        console.log(req.data.quote);
        getQuotesHandler(dispatch, req.data.quote);
      })
      .catch((err) => console.log(err));
  };
  const addFavorite = () => {
    addFavoriteHandler(dispatch);
  };
  return (
    <div className="App">
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="kanye"
      />
      <h1>Kanye West Quote</h1>
      <h4>{quote}</h4>

      <button onClick={getQuotes}>Get quote</button>
      <button onClick={addFavorite}>Add favorite</button>
      <h4>{quoteFavorite}</h4>
      <hr />
      <Form />
      <h4>{myquote}</h4>
    </div>
  );
}

export default App;
