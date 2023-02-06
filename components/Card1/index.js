import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import axios from 'axios';
import styles from "./Card1.module.css";
import Image from "next/image";

const Card = ({ title, src, id, alt, onClick }) => {
  const router = useRouter();
  const deleteRecipe = (id) => {
    axios
      .delete(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe`)
      .then((result) => {
        Router.replace("/");
      })
      .catch((error) => {
        router.push("/login");
      });
  };
    
return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* <button onClick={() => router.push(`/editRecipe/${id}`)}>Edit</button>
        <button onClick={() => deleteRecipe(id)}>X</button> */}
        <Image src="/image/burger1.png" layout="fill" objectFit="cover" alt="" />
        <h5>Bomo <br/> Chicken</h5>
      </div>
      <div className={styles.card}>
        {/* <Image src={src} layout="fill" objectFit="cover" alt={alt} />
        <h2 onClick={onClick}>{title}</h2> */}
         <Image src="/image/burger2.png" layout="fill" objectFit="cover" alt="" />
         <h5>Bananas <br/> Pancake</h5>
      </div>
    </div>
  );
};

export default Card;