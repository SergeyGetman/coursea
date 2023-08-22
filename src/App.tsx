import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coursea from './components/Coursea';
import MainAplication from './components/MainAplication';
import Container from './components/Container';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainAplication>
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/coursea" element={<Coursea />} />
          </Routes>
        </MainAplication>
      </BrowserRouter>
    </>
  );
}

export default App;
