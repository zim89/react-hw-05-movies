import { getMoviesByQuery } from 'services/apiMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { BsSearch } from 'react-icons/bs';
import { Section } from 'components/App.styled';
import NotFound from './NotFound';
import styled from 'styled-components';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Form = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  & input,
  button {
    padding: 4px 8px;
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchMoviesByQuery(query);
    }
  }, [searchParams]);

  function onSubmit(e) {
    e.preventDefault();
    const { value } = e.target.query;
    const query = value.trim() ? { query: value } : {};
    setSearchParams(query);
  }

  async function fetchMoviesByQuery(query) {
    try {
      setStatus(Status.PENDING);
      const data = await getMoviesByQuery(query);
      setMovies(data);
      setStatus(Status.RESOLVED);
    } catch {
      setStatus(Status.RESOLVED);
    }
  }

  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <input type="text" name="query" placeholder="Search..." />
        <button type="submit">
          <BsSearch width={16} />
        </button>
      </Form>
      {status === 'resolved' &&
        (movies.length ? (
          <MovieList movies={movies} />
        ) : (
          <h2>Sorry we didn't find any movie</h2>
        ))}

      {status === 'rejected' && <NotFound />}
    </Section>
  );
};
export default Movies;
