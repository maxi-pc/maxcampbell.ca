import React, { useState } from 'react';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Content/Portfolio';
import About from './components/Content/About';
import Contact from './components/Content/Contact';
import NotFound from './components/Content/NotFound';
import { GlobalStyles, light, dark } from './theme';
import { ThemeContext, ThemeProvider } from 'styled-components';
//import NavBar from './components/Navbar/index2';
import ReactFullpage from './components/Content/Landing';
import ScrollToTop from './components/scrollToTop';


function App() {
  const [theme, toggleTheme] = useState('light');
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? light : dark}><GlobalStyles/>
     
     
     <Router>
      
      
      <header><Navbar /></header>
    <main>   <ScrollToTop /><Routes>

    <Route exact path='*' element={<NotFound/>} />
     <Route exact path='/' element={<ReactFullpage />} />
     <Route exact path='/Portfolio' element={<Portfolio/>} />
     <Route exact path='/About' element={<About/>} />
     <Route exact path='/contact' element={<Contact/>} />
     </Routes></main>
   </Router> <footer><Footer /></footer>
   </ThemeProvider>
   </ThemeContext.Provider>
  );
}

export default App;