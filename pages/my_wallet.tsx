import Head from "next/head";
import Header from "../components/header/header";
import Balance from "../components/balance/balance";

export default function Wallet() {
  return (
    <>
      <Head>
        <title>Brypto</title>
      </Head>
      <div className="body">
        <Header />
        <Balance />
      </div>
    </>
  );
}
