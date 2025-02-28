import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import Outdoors from './outdoors';
import Cooking from './cooking';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/outdoors" element={<Outdoors />} />
                <Route path="/cooking" element={<Cooking />} />
            </Routes>
        </Router>
    );
};

export default App;
