import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
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
      <h1 className={styles.hero}>Home</h1>
    </Layout>
     


  )
}
