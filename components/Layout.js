import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from './Container';

const Layout = ({children, pageTitle, ...props}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Container>
      { children }
    </Container>
    <Footer />
  </>
)

export default Layout;