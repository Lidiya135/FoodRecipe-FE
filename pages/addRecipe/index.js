import React, { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Button from "../../components/Button";
import styles from "./addRecipe.module.css";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";
import swal from "sweetalert";

export const getServerSideProps = async (context) => {
    const { token } = context.req.cookies;
    console.log(token);
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    }

     const user = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await fetch(`https://odd-ruby-sea-lion-toga.cyclic.app/users/data`, user);
      const dataUser = await result.json();
      console.log(dataUser,"data get usr in add ssr");

    return {
        props: {
          isLogin: true,
          token: token,
          dataUser,
        },
      };
    };

    function AddRecipe({ token, dataUser }) {
        const router = useRouter()
        const [title, setTitle] = useState("");
        const [ingredients, setIngredients] = useState("");
        const [photo, setPhoto] = useState("");
        const [vidio, setVidio] = useState("");

    
      const user_recipe_id = dataUser.data[0].id;
      console.log(user_recipe_id, "data user id")
      const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
      };

        const postData = async (e) => {
            e.preventDefault();
            console.log(title);
            console.log(ingredients);
            console.log(photo);
            console.log(vidio);
            let data = {
              title,
              ingredients,
              photo,
              vidio,
              user_recipe_id
            };
            const user = {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            };
            await axios.post(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe`, data, user);
            swal("Success", "Add Recipes Success", "success");
            router.push("/profile")
          };


    return (
        <Layouts title="| Add Recipe">
            <div>
                <form onSubmit={postData} className={styles.container}>
                <div className={styles.photo}>
                    <input type="file" id="photo" name="photo" placeholder="photo" onChange={handlePhoto}/>
                </div>
                <div>
                    <input type="text" name="title" className={styles.inputrecipe} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <textarea type="text" className={styles.ingre} name="ingredients" id="" cols="105" rows="10" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="vidio" value={vidio} onChange={(e) => setVidio(e.target.value)} className={styles.inputrecipe} placeholder="Input link vidio"/>
                </div>
                <Button type="submit" title="Add Recipe" color="yellow" btn="post" />
                </form>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
}

export default AddRecipe;