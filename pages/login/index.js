// import React from "react";
import { useState } from "react";
import axios from 'axios';
import Input from "../../components/input/index.js";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router.js";

const Login = () => {
    const router = useRouter ();
    const [inputData, setInputData] = useState({
      email: "",
      password: "",
    });
    const [message, setMessage] = useState({
      title: "",
      text: "",
      type: "success",
    });
    const [messageShow, setMessageShow] = useState(false);
  
    const handleLogin = (e) => {
      axios
        .post(
          process.env.API,
          { email: inputData.email, password: inputData.password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          setMessage({
            title: "Success",
            text: "Login success",
            type: "success",
          });
          setTimeout(() => {
            setMessageShow(true);
          }, 500);
          setTimeout(() => {
            window.location = "/landingPage";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleChange = (e) => {
      setInputData({
        ...inputData,
        [e.target.name]: e.target.value,
      });
    };
    console.log(message);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image src="/image/tungku.png" alt="image" width={182} height={224} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h4>Welcome</h4>
            <span>log in into your exiting account</span>
            <p>
                E-mail
                <Input type="text" name="email" value={inputData.email} onChange={handleChange} className="input" placeholder="example@gmail.com" />
            </p>
            <p>
                Password
                <Input type="password" name="password" value={inputData.password} onChange={handleChange} className="input" placeholder="Password" />
            </p>
            <p>
                <input type="checkbox" /> I agree to terms conditions
            </p>
            <button type="submit" onClick={handleLogin} className={styles.btn}>
              <Link href="/landingPage">Login</Link>
            </button>
            <p className={styles.forgot}>
            <Link href="/forgotPass">Forgot Password ?</Link>
            </p>
            <p className={styles.text}>
              Dont have an account?
              <Link href="/register" className={styles.a}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;