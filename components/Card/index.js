import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.containercard}>
      <div className={styles.card1}>
        <Image src="/image/soup.png" alt="" className={styles.img} width={370} height={350}/>
        <Image src="/image/dimsum.png" alt="" className={styles.img} width={370} height={350}/>
        <Image src="/image/banana.png" alt="" className={styles.img} width={370} height={350}/>
      </div>
      <div className={styles.card2}>
        <Image src="/image/cake.png" alt="" className={styles.img} width={370} height={350}/>
        <Image src="/image/fish.png" alt="" className={styles.img} width={370} height={350}/>
        <Image src="/image/vegetable.png" alt="" className={styles.img} width={370} height={350} />
    </div>
  </div>
  );
};

export default Card;