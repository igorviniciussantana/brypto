import { useEffect, useState } from "react";
import styles from "./map.module.css";

export default function Map() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  navigator.geolocation.getCurrentPosition((position) => setPosition(position));

  const setPosition = (coordinates: GeolocationPosition) => {
    setLatitude(coordinates.coords.latitude);
    setLongitude(coordinates.coords.longitude);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Minha Localização</h1>
      <iframe
        className={styles.map}
        src={`http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
        width="100%"
        height="50%"
        loading="lazy"
      ></iframe>
    </div>
  );
}
