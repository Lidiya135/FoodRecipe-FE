import React from "react";
import Input from "../components/input/index.js";
import Button from "../components/Button/index.js";
import Card from "../components/Card/index.js"
import styles from "../pages/landingPage/landingPage.module.css";
import Image from "next/image";
import Link from "next/link"
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index.js";
import Layouts from "../components/Layouts"

const Home = () => {
  
    return (
        <>
            <Layouts title="| Home">
            {/* <Navbar/> */}
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
                            <image src="/image/egg.png" alt="" layout="fill" objectFit="cover"/>
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
                        <Image src="/image/blueberry.png" alt="" width={400} height={380} />
                    </div>
                    <div className={styles.popularing}>
                        <Image src="/image/burger1.png" alt="" width={400} height={380} />
                    </div>
                </div>
            </div>

            <div className={styles.container3}>
                <div className={styles.new}>
                    <h1>New Recipe</h1>
                    <div className={styles.newimg}>
                        <Image src="/image/burger1.png" alt="" width={450} height={450} />
                    </div>
                </div>
                <div className={styles.titlenew}>
                    <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                    <h6>Quick + Easy Chicken Bone Broth Ramen-
                        <br /> Healthy chicken ramen in a hurry? That’s right!
                    </h6>
                    <Button btn="btnlearn" title="Learn More" onClick={() => router.push("/detailrecipe")} />
                </div>
            </div>

            <div className={styles.container4}>
                <h1>Popular Recipe</h1>
                <div className={styles.popurecipe}>
                    <Card />
                </div>
            </div>
            <Footer className="footer" />
        </Layouts>
    </>
     
    )
}


export default Home;