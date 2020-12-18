import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.main}>
        <h1><a href="logo">Mark</a></h1>
        <nav>
          <ul>
            <Link href="/">Link</Link>
            <Link href="/about">Link</Link>
            <Link href="/alog">Link</Link>
            <Link href="/contact">Link</Link>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        This is the body
      </main>

      <footer className={styles.footer}>
        <h3>This is a footer</h3>
      </footer>
    </div>
  )
}
