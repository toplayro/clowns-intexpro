import './global.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import Menu from './components/Menu/Menu';
import About from './components/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/article" element={<Article  />} />
          <Route path="/about" element={<About  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;