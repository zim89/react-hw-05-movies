import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getMovieCast } from 'services/apiMovies';
import { useEffect, useState } from 'react';
import './Cast.scss';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast(movieId) {
      try {
        setStatus(Status.PENDING);
        const data = await getMovieCast(movieId);
        setCast(data);
        setStatus(Status.RESOLVED);
      } catch {
        setStatus(Status.REJECTED);
      }
    }

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending'
        ? Loading.standard({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {status === 'resolved' && (
        <ul className="cast__list">
          {cast.map(({ character, name, profile_path, cast_id }) => {
            return (
              <li key={cast_id} className="cast__item">
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : 'https://cdn.pixabay.com/photo/2017/10/05/22/55/anonymous-2821433_1280.jpg'
                  }
                  className="cast__img"
                  alt={name}
                />
                <div className="cast__meta">
                  <div>
                    Name: <b>{name}</b>
                  </div>
                  <div>
                    Character: <b>{character}</b>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};

export default Cast;
