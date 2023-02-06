import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import Layouts from "../../components/Layouts";
import Footer from "../../components/Footer";
import styles from "./detailRecipe.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";

export async function getServerSideProps(context) {
    try {
      const { token } = context.req.cookies;
      // console.log(token,"my token")
      const id = context.params.id;
      // console.log(id, "params id");

      const res = await fetch(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe/${id}`);
      const data = await res.json();
      console.log(data,"data get recipe in detail");
      // console.log(data.data[0].photo, "photooo rsep")

      const user = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await fetch(`https://odd-ruby-sea-lion-toga.cyclic.app/users/data`, user);
      const dataUser = await result.json();
      console.log(dataUser,"data get usr in detail");
      // console.log(data.data[0].photo, "photooo rsep")

      
      return {
        props: {
          data,
          dataUser,
          id,
          token: token,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }

const DetailRecipe = ({ data, dataUser, id, token }) => {
  console.log(data, id, token, dataUser,"data dalam fungsi")
    const router = useRouter();
    const user = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  //  console.log(dataUser.data[0].id, "ssssssss") 

  // console.log(data[0].id, "data user")
  const recipe_id = data.data[0].id;
  const user_recipe_id = dataUser.data[0].id;
  console.log(user_recipe_id, "id userrr")
  console.log(recipe_id, "id recipe")

// Get comment by rcipe
    const [dataComment, setDataComment] = useState([]);
    useEffect(() => {
      axios
        .get(`https://odd-ruby-sea-lion-toga.cyclic.app/comment/${recipe_id}`)
        .then((res) => {
          console.log("Get comment by recipe success");
          console.log(res.data, );
          res.data && setDataComment(res.data.data);
        })
        .catch((err) => {
          console.log("Get comment by recipe fail");
          console.log(err);
        });
    }, []);

    // Post Like
  const handleLike = async (e) => {
    e.preventDefault();
    let form = {
      recipe_id : recipe_id,
      user_recipe_id : user_recipe_id
    };
    axios
      .post(`https://odd-ruby-sea-lion-toga.cyclic.app/like`, form, user)
      .then((res) => {
        console.log("Add like recipe success");
        console.log(res, "ress dari like");
        swal("Success", "Add like recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Add like recipe fail");
        console.log(err);
        swal("Warning", "Add like recipe fail", "error");
      });
  };

  // Post save 
  const handleSave = async (e) => {
    e.preventDefault();
    let form = {
      recipe_id : recipe_id,
      user_recipe_id : user_recipe_id
    };
    axios
    .post(
      `https://odd-ruby-sea-lion-toga.cyclic.app/save`,
      form,
      user
    )
    .then((res) => {
      console.log("Add save recipe success");
      console.log(res, "resss dari save");
      swal("Success", "Add save recipe success", "success");
      window.location.reload(false);
    })
    .catch((err) => {
      console.log("Add save recipe fail");
      console.log(err);
      swal("Warning", "Add save recipe fail", "error");
    });
};

// Post comment
    const [postData, setPostData] = useState([]);
        const handleChange = (e) => {
        setPostData({
        ...postData,
        [e.target.name]: e.target.value,
        });
    };

    const handleData = async (e) => {
      e.preventDefault();
      let form = {
        recipe_id : recipe_id,
        user_recipe_id : user_recipe_id,
        comment : postData.comment
      };
      console.log(form)
        axios
          .post(
            `https://odd-ruby-sea-lion-toga.cyclic.app/comment`,
            form,
            user
          )
          .then((result) => {
            console.log("Post comment success");
            console.log(result, "rss dari post comment");
            swal("Success", "Post comment success", "success");
            window.location.reload(false);
          })
          .catch((err) => {
            console.log("Post comment fail");
            console.log(err);
            swal("Warning", "Post comment failed", "error");
          });
    };

    return (
        <Layouts title="| Detail Recipe">
            <div className={styles.container}>
                <h1> {data.data[0].title} </h1>
                {/* <h1>Loream Sandwich</h1> */}
                <div onClick={() => router.push(`/editRecipe/${data.data[0].id}`)} className={styles.mainimg}>
                    {/* <Image src="/image/egg.png" width={900} height={500} alt="" /> */}
                    <img src= {data.data[0].photo} width={900} height={500} alt="" />
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <button type="submit"  onClick={(e) => handleSave(e)} className='btn btn-white border-warning me-2'>
                      <img src="/image/save.png" alt='' style={{width:'30px',height:'30px'}}/>
                    </button>
                    <button type="submit" onClick={(e) => handleLike(e)} className='btn btn-white border-warning'>
                      <img src="/image/like.png" alt='' style={{width:'30px',height:'30px'}}/>
                    </button>
                </div>
                <div className={styles.inggrediens}>
                    <h3>Ingredients</h3>
                    <p> {data.data[0].ingredients} </p>
                    {/* <p>- 2 Eggs
                    <br/>- 2 Tbsp Mayonnaise
                    <br/>- 3 Slice Bread
                    <br/>- 2 Eggs
                    <br/>- A Little Butter
                    <br/>- 1/3 Carton of Tomato or a Lettuce Leaf and a Slice of Ham or Cheese
                    <br/>- Crips, To Serve</p> */}
                </div>
                <div className={styles.vid}>
                    <h3>Video Step</h3>
                    <Button  onClick={() =>
                    router.push(`/detailVidio/${data.data[0].id}`)
                    } btn="btnVid" color="yellow" title="Play" />
                    {/* <Button btn="btnVid" color="yellow" title="Play" />
                    <Button btn="btnVid" color="yellow" title="Play" /> */}
                </div>
                <div className={styles.coment}>
                    <div>
                        <textarea className={styles.ingre} name="comment" id="comment" cols="105" rows="10" placeholder="Comment"  onChange={(e) => handleChange(e)} value={postData.comment} />
                    </div>
                    <Button title="simpan" btn="login" color="yellow" type="submit" onClick={(e) => handleData(e)}></Button>
                    <h3>Comment</h3>
                    {dataComment ? (
                        dataComment.map((item) => (
                    <div className={styles.boxcom} key={item.id}>
                    <div  className={styles.ruang}>
                        <img src={ dataUser.data[0].photo} alt='' className={styles.usercommen} />
                          <div className={styles.text}>
                            <span>{ dataUser.data[0].fullname}</span>
                            <h6> {item.comment} </h6>
                          </div>
                    </div>
                    </div>
                      ))
                      ) : (
                        <h1>...Loading</h1>
                      )}
                </div>
            </div>
          <Footer className="footer" />
        </Layouts>
    );
};
  
  export default DetailRecipe;