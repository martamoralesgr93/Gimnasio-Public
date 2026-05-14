import React from 'react';
import './TestimonialsHomeCard.css';

export const TestimonialsHomeCard = () => {
  const testimonials = [
    {
      name: "Meryl S.",
      role: "Corporate Executive",
      image: "https://res.cloudinary.com/dpw6wsken/image/upload/v1717259633/Padel_f6dhzk.png", // Placeholder
      quote: "The absolute standard for corporate wellness in AZCA. The HYROX sessions are the perfect start to my day before heading to the office."
    },
    {
      name: "Leo D.",
      role: "Investment Banker",
      image: "https://res.cloudinary.com/dpw6wsken/image/upload/v1717259633/Maquinas_b9d9ua.png", // Placeholder
      quote: "Efficiency is everything. Being able to train at 6 AM and be ready for my first meeting at 8 AM with peak clarity is invaluable."
    },
    {
      name: "Steve J.",
      role: "Tech Founder",
      image: "https://res.cloudinary.com/dpw6wsken/image/upload/v1717259633/Monitor_shvuxv.png", // Placeholder
      quote: "A data-driven approach to fitness. The focus on metrics and performance matches the precision I demand in my business."
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">COMMUNITY</span>
          <h2 className="section-title">ELITE <span className="text-gold">VOICES</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="luxury-testimonial-card">
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
