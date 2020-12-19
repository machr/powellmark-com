import Header from '../components/Header';


const Layout = ({children}) => (
  <div>
    <Header />
    <div>
      { children }
    </div>
  </div>
)

export default Layout;