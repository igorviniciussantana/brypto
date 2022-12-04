import Head from "next/head";
import Header from "../components/header/header";
import Map from "../components/map/map";

export default function Profile() {
    return (
        <div>
            <Header />
        <h1>Meu perfil</h1>
        <Map />
        </div>
    )
  }