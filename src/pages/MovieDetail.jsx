import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getMovieById } from 'services/apiMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import { BsArrowReturnLeft } from 'react-icons/bs';
import styled from 'styled-components';
import { Section } from 'components/App.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  gap: 8px;
  color: #042541;
  border: 1px solid #042541;
  border-radius: 4px;
  padding: 8px 0px;
  transition: all 250ms linear;
  margin-top: 24px;

  &:hover {
    color: white;
    background-color: #042541;
  }
`;

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.IDLE);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieById = async movieId => {
      try {
        setStatus(Status.PENDING);
        const response = await getMovieById(movieId);
        setMovie(response);
        setStatus(Status.RESOLVED);
      } catch {
        setStatus(Status.REJECTED);
      }
    };

    fetchMovieById(movieId);
  }, [movieId]);

  return (
    <Section>
      <StyledLink to={backLinkHref.current}>
        <BsArrowReturnLeft width={16} /> Come back
      </StyledLink>

      {status === 'pending'
        ? Loading.standard({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {status === 'resolved' && <MovieCard movie={movie} />}

      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MovieDetail;
