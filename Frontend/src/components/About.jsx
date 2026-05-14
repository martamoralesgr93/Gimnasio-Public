import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

export const About = () => {
  return (
    <section id="about" className='hero-section'>
      <div className='hero-visual'>
        <img 
          className='hero-image immersive-zoom' 
          src="https://res.cloudinary.com/dpw6wsken/image/upload/v1747239601/picasso_performance_pov.png" 
          alt="Immersive Picasso Performance Club"
        />
        <div className='hero-vignette'></div>
      </div>
      
      <div className="container hero-content">
        <span className='hero-eyebrow'>AZCA | TORRE PICASSO</span>
        <h1 className='hero-title'>
          PICASSO <br /> <span className='text-gold'>PERFORMANCE</span>
        </h1>
        <p className='hero-subtitle'>
          The elite HYROX training club for high-performance professionals. Precise discipline. Proven results.
        </p>
        
        <div className='hero-actions'>
          <Link to="/register" className='btn-luxury-primary'>
            JOIN THE CLUB
          </Link>
          <a href="#services" className='btn-luxury-outline'>
            THE EXPERIENCE
          </a>
        </div>

        <div className='hero-stats'>
          <div className='stat-item'>
            <span className='stat-value'>HYROX</span>
            <span className='stat-label'>Official Center</span>
          </div>
          <div className='stat-item'>
            <span className='stat-value'>ELITE</span>
            <span className='stat-label'>Community</span>
          </div>
          <div className='stat-item'>
            <span className='stat-value'>MADRID</span>
            <span className='stat-label'>AZCA District</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
