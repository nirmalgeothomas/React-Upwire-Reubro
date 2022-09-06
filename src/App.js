import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar,Content1,Footer } from './components';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Navbar1 from './components/Navbar/Navbar1';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navbar1 />
      <Home />
    

     
   
    </Router>
  );
}

export default App;
