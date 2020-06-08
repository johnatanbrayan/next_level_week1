import React , { useState } from 'react';
import Header from './Header';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  function handlerButtonCounter() {
    return setCounter(counter + 1);
  }

  return (
      <div>
        <Header title="Hello Word!!"></Header>
        <h1>Soma dos valores: {counter}</h1>
        <button type="button" onClick={handlerButtonCounter}>Aumentar</button>
      </div>
  );
}

export default App;
