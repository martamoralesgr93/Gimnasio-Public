import './ActivityDetail.css';
import React, { useEffect, useState } from 'react';
import { getById } from '../services/activities.service';
import { useAuth } from '../context/authContext';
import { CreateReview } from './CreateReview';
import { RatingStars } from './RatingStars';
import { getReviewsByActivityId } from '../services/review.service';
import { useRatingError } from '../hooks/useRatingError';
import { Reviews } from './Reviews';

const ActivityDetail = ({ activity, setActivity }) => {
  const { user } = useAuth();
  const [showCreateReview, setShowCreateReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [resRating, setResRating] = useState({});
  const [showReviews, setShowReviews] = useState(false);
  //const rating = 4;
  //Estados para pintar las ratingStars actualizadas
  useEffect(() => {
    (async () => {
      activity && setResRating(await getReviewsByActivityId(activity._id));
    })();
  }, [activity]);

  useEffect(() => {
    useRatingError(resRating, setRating, setResRating);
  }, [resRating]);

  useEffect(() => {}, [rating]);

  const handleToggleCreateReview = () => {
    setShowCreateReview((prevShowCreateReview) => !prevShowCreateReview);
  };

  const showReviewsHandleClick = () => {
    setShowReviews((activity) => !activity);
  };

  const reloadReviews = () => {
    (async () => {
      setResRating(await getReviewsByActivityId(activity._id));
    })();
    setShowReviews(true);
  };

  if (!activity) {
    return <div>No existe actividad</div>;
  }

  return (
    <div className="activity-detail-page container">
      <div className="activity-detail-header">
        <h1 className="text-serif">{activity.name}</h1>
        <div className="activity-meta-pills">
          <span className="pill">CAPACITY: {activity.spots}</span>
          <span className="pill text-gold">DISCIPLINE: {activity.type}</span>
        </div>
      </div>

      <div className="activity-detail-grid">
        <div className="activity-image-wrap">
          <img src={activity.image} alt={activity.name} className="premium-image" />
        </div>

        <div className="activity-info-wrap">
          <h3 className="text-uppercase letter-spacing-lg">Session Brief</h3>
          <p className="activity-description">{activity.description}</p>
          
          <div className="activity-rating-wrap">
            <RatingStars
              rating={rating.avg}
              count={rating.data?.length || 0}
              showCount={true}
              showLinkReviews={true}
              showReviews={showReviewsHandleClick}
            />
          </div>

          {user && (
            <div className="activity-actions">
              <button className="btn-luxury-outline" onClick={handleToggleCreateReview}>
                {showCreateReview ? 'CLOSE REVIEW' : 'SUBMIT PERFORMANCE REVIEW'}
              </button>
              {showCreateReview && (
                <CreateReview
                  activityId={activity._id}
                  setShowCreateReview={setShowCreateReview}
                  reloadReviews={reloadReviews}
                  setActivity={setActivity}
                />
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="activity-reviews-section">
        {showReviews && <Reviews reviews={rating.data} />}
      </div>
    </div>
  );
};

export default ActivityDetail;
