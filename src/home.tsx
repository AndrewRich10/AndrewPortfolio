import React from 'react';
import './index.css';
import Box from '@mui/material/Box';
import Nav from './components/nav.tsx';
import Universitle from "./assets/Universitle.png";
import Richcraft from "./assets/Richcraft.png";
import SearchEngine from "./assets/SearchEngine.png";
import {BrowserView, MobileView} from 'react-device-detect';

const Home: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <section className="hero">
          <Box component="section" className="box">
            <h2>Andrew Rich</h2>
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
          <div className="box2">
            <h2 className='wavy'>Projects</h2>
          </div>
        </section>
        <BrowserView>
        <div className='project'>
          <div className='project-item'>
            <p className='project-label'>Universitle Project</p>
            <a href='https://github.com/thecodingexperience89/inf124projectgroup' target="_blank" rel="noopener noreferrer">
              <img src={Universitle} alt="Screenshot of Universitle Design" className='projecttab' />
            </a>
          </div>
          <div className='project-item'>
            <p className='project-label'>Richcraft Website</p>
            <a href='https://therichcraft.com' target="_blank" rel="noopener noreferrer">
              <img src={Richcraft} alt="Screenshot of Richcraft Website" className='projecttab' />
            </a>
          </div>
          <div className='project-item'>
            <p className='project-label'>ICS Search Engine</p>
            <a href='https://github.com/datrujil/SearchEngine' target="_blank" rel="noopener noreferrer">
              <img src={SearchEngine} alt="Screenshot of ICS Search Engine project" className='projecttab' />
            </a>
          </div>
        </div>
        </BrowserView>
        <MobileView>
        <div className='project'>
          <a href='https://github.com/thecodingexperience89/inf124projectgroup' target="_blank" rel="noopener noreferrer">
                <img src={Universitle} alt="Screenshot of Universitle Design" className='projecttab1'/>
          </a>
          </div>
          <div className='project'>
          <a href='https://therichcraft.com' target="_blank" rel="noopener noreferrer">
                <img src={Richcraft} alt="Screenshot of Richcraft Website" className='projecttab2' />
          </a>
          </div>
          <div className='project'>
            <a href='https://github.com/datrujil/SearchEngine' target="_blank" rel="noopener noreferrer">
                  <img src={SearchEngine} alt="Screenshot of ICS Search Engine project" className='projecttab3' />
            </a>
          </div>
        </MobileView>
      </main>
      <footer className="footer">
        @ 2025 Andrew Rich. All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;