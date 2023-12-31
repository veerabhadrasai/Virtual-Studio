// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Semester from './components/Semester';
import PdfViewer from './components/PdfViewer'; // Import PdfViewer component
import About from './components/About';
import Contact from './components/Contact';
//import dataPage from './components/dataPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/subject/:subjectId/:semester" element={<PdfViewer />} />
          <Route path="/subject/:subjectId" element={<Semester />} />
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
