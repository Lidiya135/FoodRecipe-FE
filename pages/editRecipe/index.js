import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import styles from "./addRecipe.module.css";
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";

const EditRecipe = () => {
    const router = useRouter()
    // const token = localStorage.getItem('token')
    // const userID = localStorage.getItem('id_user')
    
    const [input, setInput] = useState({
      
        name: "",
        description: "",
        video
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
        formData.append('name', input.name)
        formData.append('description', input.description)
        formData.append('photo', photo, photo.name)
        try {
            const result = await axios({
                method: 'POST',
                url: (`${process.env.apirec}`),
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            // console.log(result);
            alert('Add Data Sucess')
        } catch (error) {
            console.log('failed', error);
        }
    }

    return (
        <Layouts title="| Add Recipe">
            <div>
                <form onSubmit={postData} className={styles.container}>
                <div className={styles.photo}>
                    <input type="file" id="photo" name="photo" placeholder="photo" onChange={handlePhoto}/>
                </div>
                <div>
                    <input type="text" name="name" className={styles.inputrecipe} placeholder="Title" value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <textarea type="text" className={styles.ingre} name="description" id="" cols="105" rows="10" placeholder="Ingredients" value={input.description} onChange={handleChange} />
                </div>
                <div>
                    <input type="file" value={input.video} onChange={handleChange}/>
                </div>
                <Button title="Update Recipe" color="yellow" btn="post" />
                </form>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
}

export default EditRecipe;