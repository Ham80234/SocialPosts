import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NewThoughtBtn from './components/NewThoughtBtn';
import SocialPost from './components/SocalPosts/SocialPosts';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SocialPost />
      </main>
    </div>
  );
}

export default App;
