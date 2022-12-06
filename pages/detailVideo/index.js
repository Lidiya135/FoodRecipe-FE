import React from "react";
import Layouts from "../../components/Layouts";
import Image from "next/image";
import styles from "./detailVideo.module.css";

const DetailVideo = () => {
    return (
        <Layouts title="| Detail Video">
        <div className= {styles.container}>
            <div className={styles.main}>
                <div className={styles.mainvid}>
                    <Image src="/image/cuttingp.png" alt="" width={850} height={500} />
                </div>
                <h2>Beef Steak with Curry Sauce - [Step 4]</h2>
                <h2>Cut the condiment and then mix it</h2>
            </div>
            <div className={styles.sub}>
                <h6>Next</h6>
                <div className={styles.nextvid}>
                    <div className={styles.vid}>
                        <Image src="/image/fry.png" alt="" width={319} height={160} />
                    </div>
                    <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
                </div>
                <div className={styles.nextvid}>
                    <div className={styles.vid}>
                        <Image src="/image/fry.png" alt="" width={319} height={160} />
                    </div>
                    <p>Beef Steak with Curry Sauce - [Step 6] Saute condiments together until turn brown</p>
                </div>
                <div className={styles.nextvid}>
                    <div className={styles.vid}>
                        <Image src="/image/fry.png" alt="" width={319} height={160} />
                    </div>
                    <p>Beef Steak with Curry Sauce - [Step 7] Saute condiments together until turn brown</p>
                </div>
            </div>
        </div>
        </Layouts>
    );
};

export default DetailVideo;