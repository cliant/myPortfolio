import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Interview from './pages/Interview';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
