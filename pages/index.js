import Head from 'next/head';
import Layout from '../components/Layout'
import styled from 'styled-components';

function Home(){
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
      This is the body
      </Main>

      <footer>
      <h3>This is a footer</h3>
      </footer>
    </Layout>
  )
}

const Main = styled.main` 
  padding: 3rem 5rem;
  min-height: 70vh;
`;

export default Home
