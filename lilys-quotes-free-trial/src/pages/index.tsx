import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <main className={styles.main}>
        <h1>Lily&apos;s Quotes Free Trial</h1>
        <div className={styles.description}>
          {/* here we need to fill the text */}
          <h2>There is no I in team, but there are two in refrigerator. Think about it.</h2>
        </div>

        <div className={styles.center}>
          Hello Lily. Click the button below for a new quote.
          <button className={styles.button} >Generate</button>
        </div>

        <div className={styles.grid}>
        </div>
      </main>
    </>
  )
}
