import React, { useState } from 'react';
import Navbar from './components/Navbar/navBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Content/Home';
import Portfolio from './components/Content/Portfolio';
import About from './components/Content/About';
import Contact from './components/Content/Contact';
import NotFound from './components/Content/NotFound';
import { GlobalStyles, light, dark } from './theme';
import { ThemeContext, ThemeProvider } from 'styled-components';

function App() {
  const [theme, toggleTheme] = useState('light');
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? light : dark}><GlobalStyles/>
      <Router> 
      <Navbar />
    <Routes>
    <Route exact path='*' element={<NotFound/>} />
     <Route exact path='/' element={<Home />} />
     <Route exact path='/Portfolio' element={<Portfolio/>} />
     <Route exact path='/About' element={<About/>} />
     <Route exact path='/contact' element={<Contact/>} />
     </Routes>
      <Footer />
   </Router>
   </ThemeProvider>
   </ThemeContext.Provider>
  );
}

export default App;