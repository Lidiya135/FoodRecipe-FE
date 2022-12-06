import React from "react";
import Input from "../../components/input/index.js";
import styles from "./forgot.module.css";
import Image from "next/image";

const Forgot = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/image/tungku.png" alt="image" width={182} height={224} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h4>Forgot Password</h4>
            <span>We just need your registered e-mail address to send your password resend</span>
            <p>
                E-mail
                <Input type="text" name="email" className="input" placeholder="example@gmail.com" />
            </p>
            <button className={styles.btn}>
                Send E-mail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;