import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import All from './pages/All';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
  return (
    <><div>
      <Router>
        <div>
          {/* Navigation Bar */}
          <Navbar />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} /> 
          </Routes>
        </div>
      </Router></div>
    </>
  );
}

export default App;
