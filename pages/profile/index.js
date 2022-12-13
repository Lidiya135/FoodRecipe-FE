import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";
import Card from "../../components/Card1";
import styles from "./profile.module.css";
import Image from "next/image";
import { userAgent } from "next/server";

const Profile = () => {

    const router = useRouter();
    const [data, setData] = useState([])
  
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:4000/recipe"
    //       // `${process.env.apirec}`, { withCredentials: true }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       setData(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);

    useEffect(() => {
      axios
        .get("http://localhost:4000/users"
          // `${process.env.apirec}`, { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
        <Layouts title="| Profile">
            <div className={styles.container}>
                <div className={styles.profile}>
                    {/* {data?.map((user) => ( */}
                    <div className={styles.profil}>
                        <Image src="/image/photo.png" alt="image" width={100} height={100} />
                    </div>
                    {/* <h2>{user.name}</h2> */}
                    <h2>Garneta Sharina</h2>
                    {/* ))} */}
                <div>
                <div className={styles.link}>
                    <Link href="">
                        My Recipe
                    </Link>
                    <Link href="">
                        Saved Recipe
                    </Link>
                    <Link href="">
                        Liked Recipe
                    </Link>
                </div>
                <div className={styles.recipe}>
                    <Card/>
                    {data.map((recipe) => (
              <Card key={recipe.id_recipe} name={recipe.name} id={recipe.id_recipe} src={recipe.photo} onClick={() => router.push(`/detailRecipe`)} />
            ))}
                </div>
                </div>
            </div>
            </div>
            <Footer className="footer" />
        </Layouts>
      );
    };
    
    export default Profile;
