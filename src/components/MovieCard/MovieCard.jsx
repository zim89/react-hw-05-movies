import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styled.scss';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <div className="card">
        <img
          className="card__poster"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
          }
          alt=""
        ></img>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <ul className="card__list">
            <li className="card__item">
              <span>Release date:</span>
              <span className="card__text">{release_date}</span>
            </li>
            <li className="card__item">
              <span>User score:</span>
              <span className="card__text">{vote_average}%</span>
            </li>
            <li className="card__item">
              <h3 className="card__subtitle">Overview:</h3>
            </li>
            <li className="card__item">
              <p className="card__text">{overview}</p>
            </li>
            <li className="card__item">
              <h3 className="card__subtitle">Genres:</h3>
            </li>
            <li className="card__item">
              {genres.map(({ name }) => (
                <span key={name} className="card__tag">
                  {name}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="meta">
        <ul className="meta__nav">
          <li className="meta__item">
            <Link to="cast">cast</Link>
          </li>
          <li className="meta__item">
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
