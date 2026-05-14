import React from 'react';
import './GymServices.css';

const GymServices = () => {
  const programs = [
    { 
        id: "01",
        title: "BEFORE OFFICE", 
        tagline: "High-Intensity Morning Ritual",
        description: "07:00 AM - Precision HYROX training designed to activate executive performance before the first meeting.", 
    },
    { 
        id: "02",
        title: "LUNCH EXPRESS", 
        tagline: "45-Minute Efficiency",
        description: "Optimized sessions for Torre Picasso professionals. High impact, zero time wasted. Shower and back in 60.", 
    },
    { 
        id: "03",
        title: "AFTERWORK HYROX", 
        tagline: "The Ultimate Reset",
        description: "Decompress through intense physical challenge. Join the Azca corporate elite in our signature HYROX sessions.", 
    },
    { 
        id: "04",
        title: "PRIVATE COACHING", 
        tagline: "Bespoke Performance",
        description: "One-on-one sessions tailored to your biometric profile and demanding corporate schedule.", 
    },
    { 
        id: "05",
        title: "ELITE RECOVERY", 
        tagline: "Bio-Optimization",
        description: "Advanced recovery protocols to maintain peak cognitive and physical performance throughout the week.", 
    },
    { 
        id: "06",
        title: "CORPORATE TEAMS", 
        tagline: "Financial District Unity",
        description: "Exclusive programs for consulting and finance firms looking to foster high-performance culture.", 
    },
  ];

  return (
    <section id="services" className="programs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">PROGRAMS</span>
          <h2 className="section-title">ENGINEERED FOR <br /><span className="text-gold">PERFORMANCE</span></h2>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-id">{program.id}</div>
              <div className="program-content">
                <span className="program-tagline">{program.tagline}</span>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <button className="program-cta">LEARN MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymServices;
