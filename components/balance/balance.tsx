import Head from "next/head";
import styles from "./balance.module.css";

export default function Balance() {
  return (
    <div className={styles.balance}>
        <div className={styles.line}><p>MEU SALDO</p> <img src="img/eye.svg" alt="Icone do olho" /></div>
        <div className={styles.coin}><h1>R$ 99999,99</h1></div>

        <div className={styles.over}>
            <p>Depósito</p>
            <p>Saque</p>
            <p>Histórioco</p>
        </div>
       
  </div>
  );
}
