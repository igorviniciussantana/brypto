import Head from "next/head";
import styles from "../styles/my_wallet.module.css";
import Header from "../components/header/header";
import Balance from "../components/balance/balance";

export default function Wallet() {
  return (
    <>
      <Head>
        <title>Minha Carteira | Brypto</title>
      </Head>
      <div className="body">
        <Header />
        <Balance />

        <div className={styles.card}>
          <h1 className={styles.title}>Portfólio</h1>
          <div className={styles.portfolio}>
           <div className={styles.line}> <p>Saldo em dinheiro</p><span>R$ 99999,99</span></div>
           <div className={styles.line}> <p>Saldo em criptos</p><span>R$ 00,00</span></div>
           <div className={styles.line_last}> <p>Cartão Brypto</p><h3 className={styles.activate}>Ativar</h3></div>
          </div>
        </div>

      </div>
    </>
  );
}
