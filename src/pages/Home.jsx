import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getTrendingMovies } from 'services/apiMovies';
import MovieList from 'components/MovieList/MovieList';
import { Section, Title } from 'components/App.styled';
import NotFound from './NotFound';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      setStatus(Status.PENDING);
      const response = await getTrendingMovies();
      setMovies(response);
      setStatus(Status.RESOLVED);
    } catch {
      setStatus(Status.REJECTED);
    }
  };

  return (
    <Section>
      {status === 'pending'
        ? Loading.standard({
            backgroundColor: 'transparent',
          })
        : Loading.remove()}

      {status === 'resolved' && (
        <>
          <Title>Today movies in Trending</Title>
          <MovieList movies={movies} />
        </>
      )}

      {status === 'rejected' && <NotFound />}
    </Section>
  );
};

export default Home;
