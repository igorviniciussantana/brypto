import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import DailyCoin from "../components/dailyCoin/dailyCoin";
import { GetStaticProps } from "next";
import { api } from "./api/api";

interface IProducts {
  id: number;
  name: string;
  description: string;
  img_url: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface HomeProps {
  products: IProducts[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Brypto</title>
      </Head>
      <div className="body">
        <Header />
        <div className={styles.title}>
          <h1>
            Olá, seja bem vindo a <span className={styles.bryto}>Brypto!</span>
          </h1>
        </div>

        <div className={styles.day}>Day crypto</div>

        <DailyCoin />

        {products.map((product) => {
          return(
          <h1 key={product.id}>{product.name}</h1>
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
