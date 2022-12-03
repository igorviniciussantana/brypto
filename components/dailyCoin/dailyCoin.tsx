import Head from "next/head";
import styles from "./dailyCoin.module.css";
import { DailyProps } from "./../../src/interfaces/index";

export default function DailyCoin({ coin }: DailyProps) {
  return (
    <div className={styles.day}>
      <div>
        {coin.name}
        <p>{coin.description}</p>
      </div>

      <img className={styles.img_url} src={coin.img_url} alt="Foto das cryptos" />
    </div>
  );
}
