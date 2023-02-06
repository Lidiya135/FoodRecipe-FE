// import Link from "next/link";
import { useState, useEffect } from "react";
import noImg from "../../public/image/noImg.jpg"
import axios from 'axios';
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";
import styles from "./profile.module.css";
import ModalProfile from "../../components/Modal";
import TabData from "../../components/TabProfile";

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  // console.log(token,"yuhuuu");
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

const Profile = ({token}) => {

    const [data, setData] = useState([])
    // console.log(token,"my token in pprofil")
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    useEffect(() => {
      axios
        .get("https://odd-ruby-sea-lion-toga.cyclic.app/users/data", user)
        .then((res) => {
          console.log("get data success");
          console.log(res.data);
          res.data && setData(res.data.data[0]);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
    }, []);
  console.log(data, "my data profile")


    return (
        <Layouts title="| Profile">
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div className={styles.profil}>
                        {/* <img src="/image/photo.png" alt="image" width={100} height={100} /> */}
                        <img src={data.photo? data.photo : noImg } alt="image" width={100} height={100} />
                    </div>
                    <h2>{data ? data.fullname : "data not found"}</h2>
                    {/* <h2>Garneta Sharina</h2> */}
                <div>
                <div className="text-center mb-4 mt-2">
                  <ModalProfile token={token} />
                </div>
                <div className={styles.recipe}>
                  <TabData token={token} />
                  {/* <myRecipe token={token} /> */}
                </div>
                </div>
            </div>
            </div>
            <Footer className="footer" />
        </Layouts>
      );
    };
    
    export default Profile;
