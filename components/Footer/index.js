import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ className }) => {
  return (
    <div className={styles[className]}>
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
        <div className={styles.link}>
            <a>Product</a>
            <a>Company</a>
            <a>Learn more </a>
            <a> Get in touch </a>
        </div>
    </div>
  );
};

export default Footer;