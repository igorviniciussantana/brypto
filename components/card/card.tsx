import Head from "next/head";
import styles from "./card.module.css";
import { IProducts } from "./../../src/interfaces/index";

export default function Card(props: IProducts) {
  return (
    <div className={styles.card}>

      <div>
        <h1 className={styles.name}> {props.name}</h1>
        <p>{props.description}</p>
      </div>

      <div className={styles.price}>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
