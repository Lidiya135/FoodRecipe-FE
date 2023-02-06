import React from "react";
import Input from "../../components/Input/index.js";
import styles from "./code.module.css";
import Image from "next/image";

const Code = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/image/tungku.png" alt="image" width={182} height={224} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>
                Code 6 digit
                <Input type="number" name="code" className="input" placeholder=" " />
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

export default Code;