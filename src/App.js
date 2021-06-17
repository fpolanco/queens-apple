import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MovieContainer from './MovieContainer';
import ProfileMenu from './ProfileMenu'


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MovieContainer />
      <ProfileMenu />
    </div>
  );
}

export default App;
