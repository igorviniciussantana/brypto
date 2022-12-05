import Head from "next/head";
import Header from "../components/header/header";
import styles from "../styles/my_profile.module.css";
import Map from "../components/map/map";

export default function Profile() {
    return (
        <div>
            <Head>Meu perfil | Brypto</Head>
            <Header />
            <div className={styles.div_login}>
                <img src="img/foto.png" alt="Foto de Perfil" />
                <div  className={styles.login}>Fazer login</div>
             </div>

             <div className={styles.body}>
                <div className={styles.config}><img src="img/config.png" alt="Icone configuração"/><h1>Configuração</h1></div>
                <div className={styles.dados}><img src="img/dados.png" alt="Icone cadeado"/><h1>Dados da conta</h1></div>
             </div>   
        <Map />
        </div>
    )
  }