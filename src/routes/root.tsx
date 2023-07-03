import React from 'react';
import profile from './components/profile.png';

import Header from '../components/Header';
import Main from '../components/Main';

import '../App.css';
import Projects from './projects';

function App() {
  return (
    <div className="Wrapper">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
