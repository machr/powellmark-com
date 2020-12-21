import NavBar from './NavBar'
import styled from 'styled-components';


const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #ffc949;
  &:after {
    content: '';
    display: block;
    background: linear-gradient(180deg, #FFC949 0%, #FF7D3C 29.17%, #F62D47 51.56%, #9A2159 84.9%, #721264 100%);
    height: 20px;

  }
`

export default Header;