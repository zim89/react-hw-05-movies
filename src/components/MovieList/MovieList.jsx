import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'components/App.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List className="list">
      {movies.map(({ id, title, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || original_title}
          </Link>
        </li>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieList;
