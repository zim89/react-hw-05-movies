import { Suspense } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Container, Header, Nav } from '../App.styled';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #eeeeee;
  font-weight: 500;

  &:hover {
    color: #bdbdbd;
  }

  &.active {
    color: #ffc107;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDB)"
                width="154"
                height="20"
              ></img>
            </Link>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>

      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
