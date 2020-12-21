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
      <h2>This is a section header</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam labore nulla, reiciendis molestiae similique optio consectetur iste minus at ex animi asperiores iure modi nihil cumque totam, quisquam ipsum possimus.</p>
      </Main>

      <footer>
      <h3>This is a footer</h3>
      </footer>
    </Layout>
  )
}

const Main = styled.main` 
  padding: 3rem 0;
  min-height: 70vh;

  h2 {
    font-family: 'Lobster';
  }
`;

export default Home
