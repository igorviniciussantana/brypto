import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/header/header"
import Day from "../components/day/day"

export default function Home() {
  return (
    <>
      <Head>
        <title>Brypto</title>
      </Head>
      <div className="body">

        <Header />

       <div className={styles.title}> <h1>Olá, seja bem vindo a <span className={styles.bryto}>Brypto!</span></h1> </div>

       <div className={styles.day}>Day crypto</div>

       <Day />
      </div>
    </>
  );
}

