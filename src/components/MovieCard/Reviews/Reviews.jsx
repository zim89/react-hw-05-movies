import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getMovieReviews } from 'services/apiMovies';
import { FaRegUser, FaRegClock, FaRegThumbsUp } from 'react-icons/fa';
import './Styled.scss';
import { useParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      try {
        setStatus(Status.PENDING);
        const response = await getMovieReviews(movieId);
        setReviews(response);
        setStatus(Status.RESOLVED);
      } catch {
        setStatus(Status.REJECTED);
      }
    };

    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending'
        ? Loading.standard({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {!reviews.length ? (
        <p>
          <b>No reviews yet</b>
        </p>
      ) : (
        <ul className="reviews__list">
          {reviews.map(
            ({
              author,
              author_details: { rating },
              content,
              id,
              created_at,
            }) => {
              return (
                <li key={id} className="reviews__item">
                  <div className="reviews__meta">
                    <div className="reviews__user">
                      <FaRegUser width={16} color="#90a4ae" />
                      <b>{author}</b>
                    </div>
                    <span className="reviews__created">
                      <FaRegClock width={16} color="#90a4ae" />
                      {created_at}
                    </span>
                    <span className="reviews__rating">
                      <FaRegThumbsUp width={16} color="#90a4ae" />
                      {rating ? rating : 'No rating'}
                    </span>
                  </div>
                  <p>{content}</p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
