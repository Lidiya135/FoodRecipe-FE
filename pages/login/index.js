import { useState } from "react";
import axios from 'axios';
import Input from "../../components/Input/index.js";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router.js";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const router = useRouter();
  const postData = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    console.log(data, "data dr form login")
    const config = {
      withCredentials: true,
    };
    const result = await axios.post(
      `https://odd-ruby-sea-lion-toga.cyclic.app/users/login`,
      data,
      config
    );
    console.log(result, "result bfor cokie")
    const token = result.data.data.token;
    const id = result.data.data.id;
    console.log(token,"tokennnn")
    const dataToken = {
      token: token,
      id: id,
    };
    console.log(dataToken, "dataaa token loginn")
    const cookie = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToken),
    });
    const checkToken = await cookie.json();
    if (!checkToken) {
      return swal("Warning", "Login Failed", "error");
    }
    swal("Success", "Login Success", "success");
    console.log(dataToken);
    router.push("/landingPage");
  };

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
                <Input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="example@gmail.com" />
            </p>
            <p>
                Password
                <Input type="password" name="password"   value={password} onChange={(e) => setPassword(e.target.value)}
               className="input" placeholder="Password" />
            </p>
            <p>
                <input type="checkbox" /> I agree to terms conditions
            </p>
            <button type="submit" onClick={postData} className={styles.btn}>
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