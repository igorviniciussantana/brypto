import Head from "next/head";
import { useState } from "react";
import styles from "./balance.module.css";

export default function Balance() {
  const [coinView, setCoinView] = useState(false);

  return (
    <div className={styles.balance}>
      <div className={styles.line}>
        <p>MEU SALDO</p>
        <img
          src="img/eye.svg"
          alt="Icone do olho"
          onClick={() => (coinView ? setCoinView(false) : setCoinView(true))}
        />
      </div>
      <div className={styles.coin}>
        <h1>{coinView ? "R$ 99999,99" : "*********"}</h1>
      </div>

      <div className={styles.over}>
        <p>Depósito</p>
        <p>Saque</p>
        <p>Histórico</p>
      </div>
    </div>
  );
}
