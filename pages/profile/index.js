import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";
import Card from "../../components/Card1";
import styles from "./profile.module.css";
import Image from "next/image";

const Profile = () => {
    return (
        <Layouts title="| Profile">
            <div className={styles.container}>
                <div className={styles.profile}>
                <div className={styles.profimg}>
                    <Image src="/image/photo.png" alt="image" width={100} height={100} />
                </div>
                <h2>Garneta Sharina</h2>
                </div>
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
                </div>
                </div>
            </div>
            <Footer className="footer" />
        </Layouts>
      );
    };
    
    export default Profile;
