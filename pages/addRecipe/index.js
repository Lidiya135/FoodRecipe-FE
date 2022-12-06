import React from "react";
import Button from "../../components/Button";
import styles from "./addRecipe.module.css";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";

const AddRecipe = () => {
    return (
        <Layouts title="| Add Recipe">
            <div>
                <form className={styles.container}>
                <div className={styles.photo}>
                    <input type="file" />
                </div>
                <div>
                    <input type="text" name="title" className={styles.inputrecipe} placeholder="Title"  />
                </div>
                <div>
                    <textarea className={styles.ingre} name="ingre" id="" cols="105" rows="10" placeholder="Ingredients" />
                </div>
                <div>
                    <input type="file" />
                </div>
                <Button title="Add Recipe" color="yellow" btn="post" />
                </form>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
}

export default AddRecipe;