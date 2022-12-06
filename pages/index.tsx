import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import DailyCoin from "../components/dailyCoin/dailyCoin";
import Card from "../components/card/card";
import { GetStaticProps } from "next";
import { api } from "./api/api";
import { IProducts, HomeProps } from "./../src/interfaces/index";
import { useState, useEffect } from "react";

export default function Home({ products }: HomeProps) {
  const [randomCoin, setRandomCoin] = useState({
    name: "",
    img_url: "",
    price: 0,
  });

  useEffect(() => {
    setRandomCoin(products[Math.floor(Math.random() * products.length)]);
  }, []);

  return (
    <>
      <Head>
        <title>Brypto | CryptoWallet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="body">
        <Header />
        <img
          src="/img/banner.png"
          className={styles.banner}
          alt="Banner da Página Inicial"
        />

        <h1 className={styles.title}>
          Olá, seja bem vindo a <span className={styles.brypto}>Brypto!</span>
        </h1>

        <div className={styles.day}>Day crypto</div>

        <DailyCoin coin={randomCoin} />

        <div className={styles.crypto_market}>Crypto Market</div>

        {products.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              img_url={product.img_url}
              description={product.description}
              price={product.price}
            />
          );
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
