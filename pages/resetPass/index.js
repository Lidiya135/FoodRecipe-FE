// import React, { useState } from "react";
import Input from "../../components/input/index.js";
import styles from "./reset.module.css";
import Image from "next/image";

const Reset = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/image/tungku.png" alt="image" width={182} height={224} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>
                Create New Password
                <Input type="password" name="password" className="input" placeholder="New Password" />
            </p>
            <p>
                New Password
                <Input type="password" name="password" className="input" placeholder="Password" />
            </p>
            <p>
                <input type="checkbox" /> I agree to terms conditions
            </p>
            <button className={styles.btn}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;