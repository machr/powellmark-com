import Head from 'next/head';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css';

const bodyStyle = {
  background: "SlateBlue",
  padding: "3rem 5rem",
  minHeight: "70vh"
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={bodyStyle}>
      This is the body
      </main>

      <footer className={styles.footer}>
      <h3>This is a footer</h3>
      </footer>
    </Layout>
    
  )
}
