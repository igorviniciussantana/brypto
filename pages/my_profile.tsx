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
                <img src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=740&t=st=1670206305~exp=1670206905~hmac=807c176fc79b6b7d5747e67045259ecd56cf7d51cf8fa6f0b875365232ca2f1e" className={styles.avatar} alt="Foto de Perfil" />
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