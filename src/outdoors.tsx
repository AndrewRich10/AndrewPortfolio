import React from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Slider from './components/slider.tsx';
import Nav from './components/nav.tsx';

const Outdoors: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <main className='outdoors'>
        <section id="outdoors" className="hero">
          <Box component="div" className="box">
            <h2> Outdoors</h2>
            <p>I have grown up enjoying the outdoors in all manners. I am often found hiking the SoCal area or climbing big rocks. Below you will find some recent pictures of my adventures.</p>
          </Box>
          <Box component="div" className="slider-box">
             <Slider />
           </Box>
        </section>
      </main>
      <footer className="footer">
        @ 2025 Andrew Rich. All Rights Reserved
      </footer>
    </div>
  );
};

export default Outdoors;