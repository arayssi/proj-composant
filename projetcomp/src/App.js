import React from 'react';
import ProfilePhoto from './profile.js';
import FullName from './name.js';
import Address from './adress.js';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Mon Profil</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;

