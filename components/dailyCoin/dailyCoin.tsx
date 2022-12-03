import Head from 'next/head'
import styles from './dailyCoin.module.css'
import { DailyProps } from "./../../src/interfaces/index";

export default function DailyCoin({coin}: DailyProps) {
  return (
    <div className={styles.day}>
        <div>{coin.name}</div>
        <div>252,91 Bn</div>
  </div>
  );
}

