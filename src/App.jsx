// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProfileOverview from './components/ProfileOverview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile" element={<ProfileOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
