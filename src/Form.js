import { useDispatch } from 'react-redux';
import { myQuoteHandler } from './AppAction';

const Form = () => {
  let myquote = '';
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    myQuoteHandler(dispatch, myquote);
  };

  const inputHandler = (e) => {
    myquote = e.target.value;
  };
  return (
    <div>
      <h1>Myqoute</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
