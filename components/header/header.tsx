import Head from 'next/head'
import { useState } from 'react';
import styles from './header.module.css'


export default function Header() {
let [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.header}>

      <div className={styles.menu_options} style={{left: isMenuOpen ? 0 : '-100%', transition: '.5s'}}>
      <img className={styles.menu_img} src="img/closeButton.svg"  onClick={()=> setIsMenuOpen(false)} alt="Menu hamburguer"></img>
            <p className={styles.first}>Pagina Inicial</p>
            <p>Minha carteira</p>
            <p>Meu perfil</p>
    
        </div>
    <div>
       <img className={styles.menu_img} src="img/menu.png"  onClick={()=> setIsMenuOpen(true)} alt="Menu hamburguer"></img>
    </div>



        <div className={styles.photo}></div>
  </div>
  );
}

