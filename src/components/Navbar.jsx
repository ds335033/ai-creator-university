import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container navbar animate-fade-in">
      <Link to="/" className="logo text-gradient-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/logo.png" alt="AI Creator University Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
        <span>AI Creator University</span>
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/dashboard" className="nav-link" style={{ margin: 0, padding: 0 }}>Dashboard</Link>
        <Link to="/checkout" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Enroll Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
