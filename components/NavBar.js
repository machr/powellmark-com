import Link from 'next/link'
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <a href="/">M</a>
      <NavLinks>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </NavLinks>
    </Nav> 
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`

export default NavBar