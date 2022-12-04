import Head from "next/head";
import styles from "./card.module.css";
import { IProducts } from "./../../src/interfaces/index";

export default function Card(props: IProducts) {
  return (
    <div className={styles.card}>

<div className={styles.left}>
      <div>
        <img className={styles.img_url} src={props.img_url} alt="Foto das cryptos" />
      </div>

      <div>
        <h1 className={styles.name}> {props.name}</h1>
        <p>{props.description}</p>
      </div>
      </div>

      <div className={styles.right}>
      <div className={styles.price}>
        <p>R$ {props.price}</p>
      </div>
      </div>
    </div>
  );
}
