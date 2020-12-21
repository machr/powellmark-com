import Link from 'next/link'
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <h1><a href="logo">Mark</a></h1>  
      <NavLinks>
        <li><Link href="/">Link</Link></li>
        <li><Link href="/about">Link</Link></li>
        <li><Link href="/alog">Link</Link></li>
        <li><Link href="/contact">Link</Link></li>
      </NavLinks>
    </Nav> 
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`

export default NavBar