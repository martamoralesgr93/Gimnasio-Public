import { Link } from 'react-router-dom';
import './FigureActivity.css';
import { toggleLikeActivity } from '../services/activities.service';
import { useAuth } from '../context/authContext';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useToggleLikeActivity } from '../hooks/useToggleLikeActivity';
import { ToggleFavorite } from './ToggleFavorite';
import { RatingStars } from './RatingStars';
import { getReviewsByActivityId } from '../services/review.service';
import { useRatingError } from '../hooks/useRatingError';

const Figure = ({ activity, user, setActivities }) => {
  const { login } = useAuth();

  const [res, setRes] = useState({});
  const [rating, setRating] = useState(0);
  const [resRating, setResRating] = useState({});

  useEffect(() => {
    (async () => {
      setResRating(await getReviewsByActivityId(activity._id));
    })();
  }, [activity._id]);

  useEffect(() => {
    useToggleLikeActivity(res, setRes, login, user, setActivities);
  }, [res, login, user, setActivities]);

  useEffect(() => {
    useRatingError(resRating, setRating, setResRating);
  }, [resRating]);

  const handleLike = async () => {
    setRes(await toggleLikeActivity(activity._id));
  };

  const handleLikeAnonymous = () => {
    Swal.fire({
      icon: 'info',
      title: 'REGISTER TO FAVORITE',
      text: 'Elite performance tracking is available for members.',
      confirmButtonText: 'JOIN THE CLUB',
      confirmButtonColor: '#C5A028',
      background: '#0F0F10',
      color: '#F5F5F5'
    });
  };

  return (
    <div className="activity-premium-card">
      <Link to={`/activities/${activity._id}`} className="activity-link">
        <div className="activity-media">
          {activity.image && <img src={activity.image} alt={activity.name} />}
          <div className="activity-badge">{activity.type?.toUpperCase()}</div>
        </div>
        <div className="activity-details">
          <div className="activity-header">
            <h2 className="activity-name">{activity.name}</h2>
            <RatingStars
              rating={rating.avg}
              count={rating.data?.length || 0}
              showCount={true}
              showLinkReviews={false}
            />
          </div>
          <div className="activity-action-label">VIEW SESSION DETAILS <span className="material-symbols-outlined">arrow_forward</span></div>
        </div>
      </Link>
      <div className="activity-fav-action">
        {user ? (
          <ToggleFavorite
            handleLike={handleLike}
            isFav={activity.like.includes(user._id)}
          />
        ) : (
          <ToggleFavorite handleLike={handleLikeAnonymous} isFav={false} />
        )}
      </div>
    </div>
  );
};

export default Figure;
