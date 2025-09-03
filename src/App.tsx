import './App.css';
import React from 'react';
import Header from './components/Header'; 

function App() {
  return (
    <div className="portfolio-container">
      <Header /> {}
      <main className="main-content">
        <h1 className="title">Enjoy Life</h1>
        <div className="profile">
          <p>👤 J.H.Park / Developer & Traveler</p>
          <p>📞 010-7712-9162</p>
          <p>✉️ uamy2222@naver.com</p>
        </div>
      </main>
    </div>
  );
}

export default App;