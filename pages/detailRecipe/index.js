import React from "react";
import Button from "../../components/Button";
import Layouts from "../../components/Layouts";
import Footer from "../../components/Footer";
import styles from "./detailRecipe.module.css";
import Image from "next/image";
import play from "../../public/image/play.png"

const DetailRecipe = () => {
    return (
        <Layouts title="| Detail Recipe">
            <div className={styles.container}>
                <h1>Loream Sandwich</h1>
                <div className={styles.mainimg}>
                    <Image src="/image/egg.png" width={900} height={500} alt="" />
                </div>
                <div className={styles.inggrediens}>
                    <h3>Ingredients</h3>
                    <p>- 2 Eggs
                    <br/>- 2 Tbsp Mayonnaise
                    <br/>- 3 Slice Bread
                    <br/>- 2 Eggs
                    <br/>- A Little Butter
                    <br/>- 1/3 Carton of Tomato or a Lettuce Leaf and a Slice of Ham or Cheese
                    <br/>- Crips, To Serve</p>
                </div>
                <div className={styles.vid}>
                    <h3>Video Step</h3>
                    <Button btn="btnVid" color="yellow" title="|>" />
                    <Button btn="btnVid" color="yellow" title="|>" />
                    <Button btn="btnVid" color="yellow" title="|>" />
                </div>
                <div className={styles.coment}>
                    <div>
                        <textarea className={styles.ingre} name="comment" id="" cols="105" rows="10" placeholder="Comment" />
                    </div>
                    <Button title="simpan" btn="login" color="yellow"></Button>
                    <h3>Comment</h3>
                </div>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
};
  
  export default DetailRecipe;