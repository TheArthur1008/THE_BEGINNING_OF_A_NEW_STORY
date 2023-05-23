import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import background from './images/bg-home.png';

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          // minWidth: "1280px",
        }}
      >
        <Navigation />
        <Home id="home" />
      </div>
      <About id="about" />
      <Portfolio id="portfolio" />
      <Services id="services" />
      <Contact id="contact" />
    </>
  );
};

export default App;
