import React from 'react';
import './WallPreview.css';
import { Link } from 'react-router-dom';

export const WallPreview = () => {
    const insights = [
      {
        name: 'HYROX Tactics',
        image: 'https://res.cloudinary.com/dpw6wsken/image/upload/v1717280089/Proyecto_nuevo_7_wlzqdu.png',
        description: 'Elite strategies for the sled push and burpee broad jumps. Master the transition zones.',
      },
      {
        name: 'Executive Biohacking',
        image: 'https://res.cloudinary.com/dpw6wsken/image/upload/v1717280090/Proyecto_nuevo_6_l5sn9m.png',
        description: 'Optimizing sleep and nutrition for the high-pressure corporate environment of Madrid.',
      },
      {
        name: 'AZCA District Run',
        image: 'https://res.cloudinary.com/dpw6wsken/image/upload/v1717280085/Proyecto_nuevo_8_jg051l.png',
        description: 'Join the community for pre-office interval training around the financial district.',
      },
      {
        name: 'Performance Data',
        image: 'https://res.cloudinary.com/dpw6wsken/image/upload/v1717280085/Proyecto_nuevo_9_kytmjc.png',
        description: 'Deep dives into VO2 max and recovery metrics for our top tier performers.',
      },
    ];

    return (
        <section className="insights-preview">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-eyebrow">COMMUNITY</span>
                    <h2 className="section-title">ELITE <span className="text-gold">INSIGHTS</span></h2>
                </div>
                
                <div className="insights-grid">
                    {insights.map((insight, index) => (
                        <Link to="/wall" key={index} className="insight-card">
                            <div className="insight-image-wrapper">
                                <img src={insight.image} alt={insight.name} className="insight-image" />
                                <div className="insight-overlay"></div>
                            </div>
                            <div className="insight-content">
                                <h3 className="insight-name">{insight.name}</h3>
                                <p className="insight-description">{insight.description}</p>
                                <span className="insight-link">EXPLORE INSIGHT <span className="material-symbols-outlined">arrow_forward</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
