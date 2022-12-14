import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import styles from "./addRecipe.module.css";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";

const AddRecipe = () => {
    const router = useRouter()
    
    const [input, setInput] = useState({
        id_recipe: "7",
        name_recipe: "",
        description: "",
        video:"",
        id_user: 2
        // photo: ""
    })

    const [photo, setPhoto] = useState([])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // console.log(e)
    }

    const handlePhoto = (e) => {
        const handle = e.target.files[0]
        setPhoto(handle);
        // console.log(handle);
    }

    const postData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id_recipe', input.id_recipe)
        formData.append('name_recipe', input.name_recipe)
        formData.append('description', input.description)
        formData.append('photo', photo, photo.name)
        formData.append('video', input.video)
        formData.append('id_user', input.id_user)
        

        axios.post('http://localhost:4000/recipe',formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
             })
              .then(res => {console.log(res, 'input data success')
                alert('input data success');
              })
              .catch( (err) => {
              console.log(err.message, 'input data fail')
              alert('input data fail');
              })
        }

    return (
        <Layouts title="| Add Recipe">
            <div>
                <form onSubmit={postData} className={styles.container}>
                <div className={styles.photo}>
                    <input type="file" id="photo" name="photo" placeholder="photo" onChange={handlePhoto}/>
                </div>
                <div>
                    <input type="text" name="name_recipe" className={styles.inputrecipe} placeholder="Title" value={input.name_recipe} onChange={handleChange} />
                </div>
                <div>
                    <textarea type="text" className={styles.ingre} name="description" id="" cols="105" rows="10" placeholder="Ingredients" value={input.description} onChange={handleChange} />
                </div>
                <div>
                    <input type="file" value={input.video} onChange={handleChange}/>
                </div>
                <Button type="submit" title="Add Recipe" color="yellow" btn="post" />
                </form>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
}

export default AddRecipe;