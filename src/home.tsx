import React from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Nav from './components/nav.tsx';
import Universitle from "./assets/Universitle.png";
import Richcraft from "./assets/richcraft.png";

const Home: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <section className="hero">
          <Box component="section" className="box">
            <h2> <span style={{ color: 'darkgreen'}}>Andrew Rich</span></h2>
            <p>Software Engineering Student</p>
          </Box>
        </section>
        <section className="hero">
          <Box component="section" className="box">
            <h2>About Me</h2>
            <p>I am an aspiring software engineer with a strong passion for improving computer science education. I
 aim to enhance curriculum development and provide more inclusive opportunities for disadvantaged students, ensuring that 
 everyone has the chance to succeed and engage in computer science.</p>
          </Box>
        </section>
        <section className="hero">
            <h2 className='wavy'> Projects</h2>
        </section>
        <div className='project'>
        <a href='https://github.com/thecodingexperience89/inf124projectgroup' target="_blank" rel="noopener noreferrer">
              <img src={Universitle} alt="Screenshot of Universitle Design" className='projecttab'/>
        </a>
        <a href='https://therichcraft.com' target="_blank" rel="noopener noreferrer">
              <img src={Richcraft} alt="Screenshot of Universitle Design" className='projecttab' />
        </a>
        </div>
      </main>
      <footer className="footer">
        @ 2025 Andrew Rich. All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;