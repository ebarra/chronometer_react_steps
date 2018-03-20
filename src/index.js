import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

setInterval(()=>{
    ReactDOM.render(<App date={new Date()} />, document.getElementById('root'))
  }, 500);
