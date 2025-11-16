import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-hero">
      {/* Hero Section */}
      <div className="hero-content">
        <h1>Welcome to Campus Queue Management</h1>
        <p>Join queues, manage your time, and skip long lines on campus.</p>
        <div className="hero-buttons">
          <Link to="/register" className="primary-btn">Get Started</Link>
          <Link to="/login" className="secondary-btn">Login</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Clinic</h3>
            <p>Join the virtual queue for medical services quickly and easily.</p>
          </div>
          <div className="feature-card">
            <h3>Bursary</h3>
            <p>Check your queue position without leaving your spot.</p>
          </div>
          <div className="feature-card">
            <h3>Cafeteria</h3>
            <p>Join the queue virtually and save waiting time.</p>
          </div>
          <div className="feature-card">
            <h3>Library</h3>
            <p>Reserve seats efficiently with our queue system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
