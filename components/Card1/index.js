import React from "react";
import styles from "./Card1.module.css";
import Image from "next/image";

const Card = () => {
return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src="/image/breads.png" layout="fill" objectFit="cover" alt="" />
        <h5>Bomo <br/> Chicken</h5>
      </div>
      <div className={styles.card}>
        <Image src="/image/burger2.png" layout="fill" objectFit="cover" alt="" />
        <h5>Bananas <br/> Pancake</h5>
      </div>
    </div>
  );
};

export default Card;