import Head from 'next/head'
import styles from './dailyCoin.module.css'


export default function DailyCoin() {
  return (
    <div className={styles.day}>
        <div>BNB</div>
        <div>252,91 Bn</div>
  </div>
  );
}

