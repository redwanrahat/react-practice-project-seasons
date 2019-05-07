import React from 'react';
import './App.css';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )
  return (
    <div>
    </div>
  )
}

export default App;
