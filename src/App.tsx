import React from 'react';
import profile from './components/profile.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className='flex padding-header place-content-between align-items-center'>

          <a href=""><img className='rounded' src={profile}></img></a>
          <a href="">Projetos</a>
          teste

        </header>
    </div>
  );
}

export default App;
