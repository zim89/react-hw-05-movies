import styled from 'styled-components';

const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 768px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.ul`
  margin-top: 16px;

  & a:hover {
    color: #ff6d00;
  }
`;

const Header = styled.header`
  background-color: #042541;
`;

const Nav = styled.nav`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BackLink = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #042541;
  border: 1px solid #042541;
  border-radius: 4px;
  padding: 4px 8px;
  transition: all 250ms linear;

  &:hover {
    color: white;
    background-color: #042541;
  }
`;

export { Section, Container, Title, List, Header, Nav, BackLink };
