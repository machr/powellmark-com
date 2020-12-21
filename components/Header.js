import NavBar from './NavBar'
import styled from 'styled-components';
import Container from './Container';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavBar />  
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`

  &:after {
    content: '';
    display: block;
    background: linear-gradient(90deg, #FFC949 0%, #FF7D3C 29.17%, #F62D47 51.56%, #9A2159 84.9%, #721264 100%);
    height: 20px;

  }
`

export default Header;