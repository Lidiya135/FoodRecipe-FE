import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import Input from "../../components/Input/index";
import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const router = useRouter ();
    const [inputDataReg, setInputDataReg] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    const [message, setMessage] = useState({
      title: "",
      text: "",
      type: "success",
    });
    const [messageShow, setMessageShow] = useState(false);
  
    const handleRegister = (e) => {
      axios
        .post(
          process.env.apiReg, { name: inputDataReg.name,email: inputDataReg.email, phone: inputDataReg.phone, password: inputDataReg.password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
          )
        .then(() => {
          setMessage({
            title: "Success",
            text: "Register success",
            type: "success",
          });
          setTimeout(() => {
            setMessageShow(true);
          }, 300);
          setTimeout(() => {
            window.location = "/login";
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleChange = (e) => {
      setInputDataReg({
        ...inputDataReg,
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
            <h4>Lets Get Started</h4>
            <span>Create new account to access all features</span>
            <form>
                <p>
                    Name
                    <Input type="text" name="name" value={inputDataReg.name} onChange={handleChange}className="input" placeholder="Name" />
                </p>
                <p>
                    Email address
                    <Input type="email" name="email" value={inputDataReg.email} onChange={handleChange} className="input" placeholder="Enter email address" />
                </p>
                <p>
                    Phone number
                    <Input type="number" name="phone" value={inputDataReg.phone} onChange={handleChange}className="input" placeholder="Enter phone number" />
                </p>
                <p>
                    Password
                    <Input type="password" name="password" value={inputDataReg.password} onChange={handleChange} className="input" placeholder=" Password" />
                    <input type="checkbox" /> I agree to terms & conditions
                </p>
                <button className={styles.btn}>
              <Link href="/login">Register Account</Link>
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