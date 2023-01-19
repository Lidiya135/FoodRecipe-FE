import React, { useState, useEffect } from "react";
import Input from "../../components/input/index.js";
import Button from "../../components/Button/index.js";
// import Card from "../../components/Card/index.js"
import styles from "./landingPage.module.css";
import Link from "next/link"
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index.js";
import Layouts from "../../components/Layouts";

export async function getServerSideProps(context){
    const res = await fetch(`http://localhost:3009/recipe`);
    const { token } = context.req.cookies;
    console.log(token, "my tokennnn")
    const data = await res.json();
    console.log("dataaaa", data)
    console.log(data);
    return {
        props: {
        data,
        login: token ? true : false,
        },
    };
}
const LandingPage = ({ data, login }) => {
    const router = useRouter();
    return (
        <>
            {/* <Layouts login={login} title="| landingPage"> */}
            <Navbar login={login} />
            <div className={styles.container}>
                <div className={styles.menu}>
                    <h1>
                        Discover Recipe <br />& Delicious Food
                    </h1>
                    <Input className="landing" placeholder="Search Resstourant Food" />
                </div>
                <div className={styles.bg}>
                    <div className={styles.mainimg}>
                        <Link href="detailvideo">
                            <img src="/image/egg.png" alt="" layout="fill" objectFit="cover" />
                            {/* <Image src={data.vidio} alt="" layout="fill" objectFit="cover" /> */}
                        </Link>
                    </div>
                <div className={styles.white}></div>
                <div className={styles.yellow}></div>
                </div>
            </div>

            <div className={styles.container2}>
                <h1>Popular For You !</h1>
                <div className={styles.popular}>
                    <div className={styles.popularing}>
                        <img src="/image/burger1.png" alt="" width={400} height={380} />
                    </div>
                    <div className={styles.popularing}>
                        <img src="/image/burger2.png" alt="" width={400} height={380} />
                    </div>
                </div>
            </div>

            <div className={styles.container3}>
                <div className={styles.new}>
                    <h1>New Recipe</h1>
                    <div className={styles.newimg}>
                        <img src="/image/burger1.png" alt="" width={450} height={450} />
                    </div>
                </div>
                <div className={styles.titlenew}>
                    <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                    <h6>Quick + Easy Chicken Bone Broth Ramen-
                        <br /> Healthy chicken ramen in a hurry? That’s right!
                    </h6>
                    <Button btn="btnlearn" title="Learn More" onClick={() => router.push("/detailRecipe")} />
                </div>
            </div>

            <div className={styles.container4}>
                    <h1>Popular Recipe</h1>
                <div className={styles.gbr}>
                    {data.data.map((recipe) => (
                    <div className={styles.popurecipe} key={recipe.id} onClick={() => router.push(`/detailRecipe/${recipe.id}`)}>
                        <img alt="" src={recipe.photo}  />
                    </div>
                    ))}
                </div>
            </div>
            <Footer className="footer" />
        {/* </Layouts> */}
    </>
     
    )
}


export default LandingPage;