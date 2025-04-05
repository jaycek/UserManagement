import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">User Management Dashboard</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item " >
                  <Link className="nav-link" to="/signup" style={{ color: "black" }}>Signup</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link" to="/login" style={{ color: "black" }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin" style={{ color: "black" }}>Admin Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-center my-4">Welcome to My App!</h1>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
