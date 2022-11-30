import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import React from 'react';
import ReactDOM from 'react-dom/client';

let stateValue;

function useState(intialState) {
  if (stateValue === undefined) {
    stateValue = intialState;
  }

  function setValue(value) {
    stateValue = value;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

  }

  return [
    stateValue,
    setValue
  ]
}


function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = function() {
    setCounter(counter + 1);
  }
  const handleDecrement = function() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Product />
      <h1>Counter { counter }</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

// tạo state để quản lý Counter
// Khi state thay đổi, thì giao diện thay đổi 
