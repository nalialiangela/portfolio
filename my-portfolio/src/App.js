import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';
import './App.css';

const App = () => {
  return(
    <div className='App'>
      <Header/>
      <About/>
      <Contact/>
      <Home/>
    </div>
  )
}

export default App;
