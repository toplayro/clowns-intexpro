import './global.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Statya from './components/Statya/Statya';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/article" element={<Article  />} />
          <Route path="/article/:id" element={<Statya />} />
          <Route path="/about" element={<About  />} />
          <Route path="/" element={<Navigate to="/article" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;