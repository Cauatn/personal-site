import React from 'react';
import profile from './components/profile.png';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
       <Header/>
        <Main/>
    </div>
  );
}

export default App;
