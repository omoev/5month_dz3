import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, clearList } from './redux/actions/actions';
import NumberInput from './Components/NumberInput/NumberInput';
import NumberList from './Components/NumberList.jsx/NumberList';

function App() {
  const numbers = useSelector((state) => state.numbers);
  const sum = useSelector((state) => state.sum);
  const dispatch = useDispatch();

  const handleAddNumber = (value) => {
    dispatch(addNumber(value));
  };

  const handleClearList = () => {
    dispatch(clearList());
  };

  return (
    <div>
      <h1>Number List</h1>
      <NumberInput onAdd={handleAddNumber} currentSum={sum} />
      <NumberList numbers={numbers} />
      <button onClick={handleClearList}>Clear</button>
      <p>Сумма:{sum}</p>
    </div>
  );
}

export default App;
