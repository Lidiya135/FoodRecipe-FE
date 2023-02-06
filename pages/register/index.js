// import React from "react";
import { useState } from "react";
import Input from "../../components/Input/index.js";
import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/register";

export async function getStaticProps(context) {
  let url = `https://odd-ruby-sea-lion-toga.cyclic.app/users/register`;
  console.log(url," url after ss");
  return {
    props: {
      url,
    },
  };
}

const Register = ({ url }) => {
  console.log(url,"masuk fungsi")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(password);
    const data = {
      fullname,
      email,
      phone,
      password,
    };
    console.log(data, "after data")
    dispatch(registerUser(data, url));
  };

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
            <form onSubmit={postData}>
                <p>
                    Name
                    <Input type="text" name="fullname" value={fullname}  onChange={(e) => setFullname(e.target.value)}className="input" placeholder="Name" />
                </p>
                <p>
                    Email address
                    <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Enter email address" />
                </p>
                <p>
                    Phone number
                    <Input type="number" name="phone"  value={phone}
                  onChange={(e) => setPhone(e.target.value)} className="input" placeholder="Enter phone number" />
                </p>
                <p>
                    Password
                    <Input type="password" name="password"value={password} onChange={(e) => setPassword(e.target.value)}className="input" placeholder=" Password" />
                    <input type="checkbox" /> I agree to terms & conditions
                </p>
                <button type="submit" className={styles.btn} onClick={postData}>
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