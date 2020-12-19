import Link from 'next/link'

const navbarStyle = {
  backgroundColour: "tomato",
  color: "black",
  display: "flex",
  justifyContent: "space-between"

}

const NavBar = () => {
  return (
    <nav style={navbarStyle}>
      <h1><a href="logo">Mark</a></h1>  
      <ul>
        <li><Link href="/">Link</Link></li>
        <li><Link href="/about">Link</Link></li>
        <li><Link href="/alog">Link</Link></li>
        <li><Link href="/contact">Link</Link></li>
      </ul>
    </nav> 
  )
}

export default NavBar