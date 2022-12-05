import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div
        className={styles.menu_options}
        style={{ left: isMenuOpen ? 0 : "-100%", transition: ".5s" }}
      >
        <img
          className={styles.closeButton}
          src="img/closeButton.svg"
          onClick={() => setIsMenuOpen(false)}
          alt="Menu hamburguer"
        ></img>
         <Link href="/">
          <p>Página Inicial</p>
        </Link>

        <Link href="/my_wallet">
          <p>Minha Carteira</p>
        </Link>

        <Link href="/my_profile">
          <p>Meu Perfil</p>
        </Link>
      </div>
      <div>
        <img
          className={styles.menu_img}
          src="img/menu.png"
          onClick={() => setIsMenuOpen(true)}
          alt="Menu hamburguer"
        ></img>
      </div>

      <div className={styles.photo}></div>
    </div>
  );
}
