import React from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Nav from './components/nav.tsx';
import Skillet from "./assets/skillet.svg";
import FoodGallery from './components/foodGallery.tsx';

const Cooking: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <main className='outdoors'>
        <section id="outdoors" className="hero">
          <Box component="div" className="box">
            <h2> Cooking <img src={Skillet} alt="Skillet Icon" className="skillet" /> </h2>
            <p>Within the last 2 years I have become obsessed with improving my cooking and sharing that journey with others.</p>
            <p>Here are some of the things I have made.</p>
          </Box>
        </section>
        <FoodGallery/>
      </main>
      <footer className="footer">
        @ 2025 Andrew Rich. All Rights Reserved
      </footer>
    </div>
  );
};

export default Cooking;