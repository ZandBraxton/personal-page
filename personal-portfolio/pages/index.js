import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import profiletemp from '../public/images/chrome_2022-02-20_15-29-55.png'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <main className={styles.main_wrapper}>
        <div className={styles.home_container}>
          <div className={styles.hero_container}>
            <h1 className={styles.hero}>Hey</h1>
            <h2 className={styles.hero2}>I'm Braxton</h2>
            <p className={styles.hero_span}>Full Stack Web Developer</p>
          </div>
        </div>

        {/* Add skills section */}
      </main>
      
    </Layout>
  )
}
