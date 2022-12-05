import Head from "next/head";
import Header from "../components/header/header";
import styles from "../styles/my_profile.module.css";
import Map from "../components/map/map";

export default function Profile() {
    return (
        <div>
            <Head>Meu perfil | Brypto</Head>
            <Header />
            <div>
                <img src="img/foto.png" alt="Foto de Perfil" />
                <div  className={styles.login}>Fazer login</div>
                </div>
        <Map />
        </div>
    )
  }