import React, { useState } from "react";
import Input from "../../components/Input/index.js";
import styles from "./register.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";

  
export default function Register () {
    const router = useRouter()
    const [inputData, setInputData] = useState({
      email: '',
      password: '',
      fullname: '',
      phone: ''
    })
    // console.log(inputData);

    const onChangeHandle = (e) => {
      setInputData({
        ...inputData,
        [e.target.name]: e.target.value,
      });
    };
  
    const postData = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`https://odd-ruby-sea-lion-toga.cyclic.app/users/register`, inputData);
        swal("Success", "Register Success", "success");
        router.push("/login");
      } catch (err) {
        console.log(err);
        swal("Warning", "Register failed", "error");
      }
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
            <form onSubmit={postData} action="">
                <p>
                    Name
                    <Input type="text" id="name" name="fullname"   onChange={onChangeHandle} className="input" placeholder="Name" />
                </p>
                <p>
                    Email address
                    <Input type="email" id="email" name="email"  onChange={onChangeHandle} className="input" placeholder="Enter email address" />
                </p>
                <p>
                    Phone number
                    <Input type="text" id="phone" name="phone"   onChange={onChangeHandle} className="input" placeholder="Enter phone number" />
                </p>
                <p>
                    Password
                    <Input type="password" id="password" name="password" onChange={onChangeHandle} className="input" placeholder=" Password" />
                    <input type="checkbox" /> I agree to terms & conditions
                </p>
                <button type="button" onClick={postData} className={styles.btn}>
              Register Account
                </button>
            </form>
            <p className={styles.text}>
              Dont have an account? Login here
                {/* <Link href="/login" className={styles.a}>Log in here</Link> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};