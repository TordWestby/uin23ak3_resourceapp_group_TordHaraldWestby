// App.jsx

import React from 'react';
import Nav from './components/nav';
import './css/main.scss';

function App() {
  return (
    <div className='main'>
      <div className='content'>
        <Nav />
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
