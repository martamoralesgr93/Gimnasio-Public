import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllActivities } from '../services/activities.service';
import { useActivitiesFeedError } from '../hooks';
import './ActivitiesHomeCard.css';

export const ActivitiesHomeCard = () => {
  const [activities, setActivities] = useState([]);
  const [res, setRes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setRes(await getAllActivities());
    })();
  }, []);

  useEffect(() => {
    useActivitiesFeedError(res, setRes, setActivities);
  }, [res]);

  const handleActivityClick = (id) => {
    navigate(`/activities/${id}`);
  };

  return (
    <section className="activities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ELITE CLASSES</span>
          <h2 className="section-title">THE <span className="text-gold">SCHEDULE</span></h2>
        </div>

        <div className="activities-grid">
          {activities.length > 0 ? (
            activities.slice(0, 6).map((activity) => (
              <div
                className="luxury-activity-card"
                key={activity._id}
                onClick={() => handleActivityClick(activity._id)}
              >
                <div className="activity-img-container">
                  <img src={activity.image} alt={activity.name} />
                  <div className="activity-overlay">
                    <span className="activity-category">HYROX PERFORMANCE</span>
                  </div>
                </div>
                <div className="activity-meta">
                  <h3 className="activity-title">{activity.name}</h3>
                  <div className="activity-footer">
                    <span className="activity-location">STUDIO AZCA</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-activities">Initializing performance schedule...</p>
          )}
        </div>
      </div>
    </section>
  );
};
