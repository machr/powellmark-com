import NavBar from './NavBar'

const headerStyle = {
  background: "tomato",
  color: "black"
}

function Header(params) {
  return (
    <header className="Header" style={headerStyle}>
      <NavBar />
    </header>
  )
}

export default Header;