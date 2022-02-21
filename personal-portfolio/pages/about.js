import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/About.module.scss'


export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <main className={styles.main_wrapper}>
        <div className={styles.about_container}>
          <h1 className={styles.hero}>hi</h1>
        </div>
      </main>
    </Layout>
  )
}
