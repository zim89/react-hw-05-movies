import { Link } from 'react-router-dom';
import { Section } from 'components/App.styled';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & h1 {
    font-size: 88px;
    text-align: center;
  }
  & h1 {
    text-align: center;
  }
`;

const NotFound = props => {
  return (
    <Section>
      <Wrapper>
        <h1>404</h1>
        <h3>Page not found</h3>
        <Link to="/">return to Homepage</Link>
      </Wrapper>
    </Section>
  );
};

export default NotFound;
