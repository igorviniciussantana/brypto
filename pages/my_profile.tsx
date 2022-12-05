import Head from "next/head";
import Header from "../components/header/header";
import styles from "../styles/my_profile.module.css";
import Map from "../components/map/map";

export default function Profile() {
    return (
        <div>
            <Head><title>Meu perfil | Brypto</title></Head>
            <Header />
            <div className={styles.div_login}>
                <div className={styles.avatar}/>
                <div  className={styles.login}>Fazer login</div>
             </div>

             <div className={styles.body}>
                <div className={styles.config}><img src="img/config.svg" alt="Icone configuração"/><p>Configuração</p></div>
                <div className={styles.dados}><img  src="img/lock.svg"  alt="Icone cadeado"/><p>Dados da conta</p></div>
             </div>   
        <Map />
        </div>
    )
  }