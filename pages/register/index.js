import React from "react";
// import { useState } from "react";
// import axios from 'axios';
import Input from "../../components/Input/index";
import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  // const [data, setData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   password: '',
  //   newPassword: ''
  // })

  // const handleChange = (e) =>{
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/image/tungku.png" alt="image" width={182} height={224} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h4>Lets Get Started</h4>
            <span>Create new account to access all features</span>
            <form>
                <p>
                    Name
                    <Input type="text" name="name" className="input" placeholder="Name" />
                </p>
                <p>
                    Email address
                    <Input type="email" name="email" className="input" placeholder="Enter email address" />
                </p>
                <p>
                    Create New Password
                    <Input type="password" name="password" className="input" placeholder="Create New Password" />
                </p>
                <p>
                    New Password
                    <Input type="password" name="repassword" className="input" placeholder="New Password" />
                    <input type="checkbox" /> I agree to terms & conditions
                </p>
                <button className={styles.btn}>
                    Register Account
                </button>
            </form>
            <p className={styles.text}>
              Dont have an account?
                <Link href="/login" className={styles.a}>Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;