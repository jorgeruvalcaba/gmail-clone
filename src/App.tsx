import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
