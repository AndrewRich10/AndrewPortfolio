import React from 'react';
import './index.css';
import Nav from './components/nav.tsx';
import LinkedIn from './assets/5282542_linkedin_network_social network_linkedin logo_icon.svg';
import Insta from './assets/5282544_camera_instagram_social media_social network_instagram logo_icon.svg';
import Github from './assets/4747499_github_icon.svg';

const Contact: React.FC = () => {
    return (
    <div className="app">
      <Nav />
      <main>
        <section className="hero">
          <h2 className='wavy'> <span style={{ color: 'darkgreen'}}>Where can you find me?</span></h2>
        </section>
        <section className="hero">
            <div className='social'>
              <a href='https://www.linkedin.com/in/andrew-douglas-rich-59477a26a/' target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn Logo" className='social'/>
              </a>
              <a href='https://www.instagram.com/andrew_d_rich/' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram Logo" className='social'/> 
              </a>
              <a href='https://github.com/AndrewRich10' target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github Logo" className='social'/> 
              </a>
            </div>
        </section>
      </main>
      <footer className="footer">
        @ 2025 Andrew Rich. All Rights Reserved
      </footer>
    </div>
    );
};

export default Contact;