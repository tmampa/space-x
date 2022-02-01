import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/Missions"
          element={<Missions />}
        />
        <Route
          path="/Profile"
          element={<MyProfile />}
        />
      </Routes>
    </div>
  </Router>
);

export default App;
