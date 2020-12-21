import Link from 'next/link'
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <h1><a href="logo">Mark</a></h1>  
      <ul>
        <li><Link href="/">Link</Link></li>
        <li><Link href="/about">Link</Link></li>
        <li><Link href="/alog">Link</Link></li>
        <li><Link href="/contact">Link</Link></li>
      </ul>
    </Nav> 
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

export default NavBar