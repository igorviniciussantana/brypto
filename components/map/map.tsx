import { useState } from "react";
import styles from "./map.module.css";

export default function Map() {
    
const [latitude, setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)


    const setPosition = (coordinates : GeolocationPosition) =>{
        setLatitude(coordinates.coords.latitude);
        setLongitude(coordinates.coords.longitude)

    }
    

    navigator.geolocation.getCurrentPosition((position) => setPosition(position))

  return (
    <div className={styles.card}>

<h1>Latitude: {latitude}</h1>
<h1>Longitude: {longitude}</h1>

<iframe src={`http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`} width="100%" height="50%"  loading="lazy"></iframe>
    </div>
  );
}
