import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import DailyCoin from "../components/dailyCoin/dailyCoin";
import Card from "../components/card/card";
import { GetStaticProps } from "next";
import { api } from "./api/api";
import {IProducts, HomeProps} from './../src/interfaces/index'

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Brypto</title>
      </Head>
      <div className="body">
        <Header />
     
          <h1 className={styles.title}>
            Olá, seja bem vindo a <span className={styles.bryto}>Brypto!</span>
          </h1>
  

        <div className={styles.day}>Day crypto</div>

        <DailyCoin/>

        <div className={styles.crypto_market}>Crypto Market</div>

  

        {products.map((product) => {
          return(
            <Card id={product.id} name={product.name} img_url={product.img_url} price={product.price}/>
          )
        })}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("products");
  const productsList: IProducts[] = response.data;

  return {
    props: {
      products: productsList,
    },
    revalidate: 10,
  };
};
