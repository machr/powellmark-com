import Header from '../components/Header';
import Container from './Container';

const Layout = ({children}) => (
  <div>
    <Header />
    <Container>
      { children }
    </Container>
  </div>
)

export default Layout;