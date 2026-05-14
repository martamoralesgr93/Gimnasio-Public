import React, { useState, useEffect } from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuth } from '../context/authContext';

export const HeaderNav = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='container header-inner'>
        <NavLink to="/" className="brand">
          <span className="brand-logo">P</span>
          <span className="brand-name">PICASSO <span className="text-gold">PERFORMANCE</span></span>
        </NavLink>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Club</NavLink></li>
            <li><NavLink to="/wall" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Insights</NavLink></li>
            <li><NavLink to="/activities/feed" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HYROX</NavLink></li>
            <li><NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Schedule</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <NavLink to="/profile" className="profile-trigger">
            <span className="material-symbols-outlined">person</span>
          </NavLink>
          {user && (
            <NavLink to="/login" className="logout-btn">
              <span className="material-symbols-outlined">logout</span>
            </NavLink>
          )}
        </div>
      </div>

      {/* Bottom Nav for Mobile */}
      <nav className="mobile-bottom-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <span className="material-symbols-outlined">home</span>
          <span>Club</span>
        </NavLink>
        <NavLink to="/activities/feed" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <span className="material-symbols-outlined">fitness_center</span>
          <span>HYROX</span>
        </NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <span className="material-symbols-outlined">calendar_today</span>
          <span>Schedule</span>
        </NavLink>
        <NavLink to="/wall" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <span className="material-symbols-outlined">groups</span>
          <span>Insights</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <span className="material-symbols-outlined">account_circle</span>
          <span>Profile</span>
        </NavLink>
      </nav>
    </header>
  );
};
