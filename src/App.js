import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
