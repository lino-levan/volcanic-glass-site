/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volcanic Glass</title>
        <meta name="description" content="Volcanic Glass is the next evolution of Obsidian file sharing. Join us today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img alt="volcanic glass" src="/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>
          Welcome to Volcanic Glass!
        </h1>

        <p className={styles.description}>
          The exclusive, plugin-based email client.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
         Supported by the open source community
        </a>
      </footer>
    </div>
  )
}
