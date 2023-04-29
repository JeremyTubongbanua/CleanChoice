import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// test axios
const testAxios = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  console.log(response.data);
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button
          color='primary'
          onClick={() => {
            testAxios();
          }}
        >
          Hello World
        </button>
      </header>
    </div>
  );
}

export default App;
