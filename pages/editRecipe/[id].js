import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import styles from "../addRecipe/addRecipe.module.css";
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
    const id = context.params.id;
    console.log(id, "param update vidio");

    const result = await fetch(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe/${id}`,);
    const dataRecipe = await result.json();
    console.log(dataRecipe,"data get RECIP in add ssr");

    return {
        props: {
          isLogin: true,
          token: token,
          dataRecipe,
          id,
        },
      };
    };

    function EditRecipe({ token, dataRecipe, id }) {
        const router = useRouter()
        const [photo, setPhoto] = useState("");

        const [updateData, setUpdateData] = useState({
          title: dataRecipe.title,
          ingredients: dataRecipe.ingredients,
          vidio: dataRecipe.vidio,
      })

      const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
      };
      const handleChange = (e) => {
        setUpdateData({
          ...updateData,
          [e.target.name]:e.target.value
        })
        }

      const user = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }

      const postData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", updateData.title);
        formData.append("ingredients", updateData.ingredients);
        formData.append("vidio", updateData.vidio);
        formData.append("photo", photo);
        await 
        axios
          .put(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe/${id}`, formData, user)
          .then((res) => {
          console.log("Update recipe succes");
          console.log(res);
          swal("Success", "Update Recipes Success", "success");
          router.push(`/detailRecipe/${id}`)
        })
        .catch((err) => {
          console.log("Update data failed");
          console.log(err);
          swal("Warning", "Update recipe failed", "error");
        });
    };


    return (
        <Layouts title="| Edit Recipe">
            <div>
              <h2 style={{textAlign:"center"}}>Edit Recipe</h2>
                <form onSubmit={postData} className={styles.container}>
                <div className={styles.photo}>
                    <input type="file" id="photo" name="photo" placeholder="photo" onChange={handlePhoto}/>
                </div>
                <div>
                    <input type="text" name="title" className={styles.inputrecipe} placeholder="Title" value={updateData.title} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <textarea type="text" className={styles.ingre} name="ingredients" id="" cols="105" rows="10" placeholder="Ingredients" value={updateData.ingredients} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input type="text" name="vidio" value={updateData.vidio} onChange={(e) => handleChange(e)} className={styles.inputrecipe} placeholder="Input link vidio"/>
                </div>
                <Button type="submit" title="Update Recipe" color="yellow" btn="post" onClick={postData}/>
                </form>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
}

export default EditRecipe;