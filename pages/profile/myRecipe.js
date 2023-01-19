import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import styles from "./profile.module.css"

export const getServerSideProps = async (context) => {
    const { token } = context.req.cookies;
    console.log(token,"yuhuuu");
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: true,
        },
      };
    }
  
    return {
      props: {
        isLogin: true,
        token: token,
      },
    };
  };

const myRecipe = ({ token }) => {
    const user= {
    headers: {
    Authorization: `Bearer ${token}`,
    }};
    console.log(user, "token usr in m rcip")
    const [data, setData] = useState ([])
    
const myRec = () =>{
    axios
    .get("http://localhost:3009/recipe/user", user)
    .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data[0]);
    })
    .catch((err) => {
        console.log("get data fail");
        console.log(err);
        });
    }

    useEffect(() => {
        myRec()
        console.log(data,"myRecipe")
    }, []);
      
     const handleDelete = (id) => {
        axios.delete(`http://localhost:3009/recipe/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then((result) => {
              myRec()
              alert('delete recipe success');
            })
            .catch((err) => {
              console.log(err)
              alert('delete recipe fail');
            })
        }

    return (
        <div className={styles.container}>
             <div className={styles.box}>
            {data.map((recipe) => (
              <>
                <div className={styles.list} key={recipe.id}>
                    <img src={recipe.photo} alt='' width={200} height={200} />
                    <button onClick={()=> handleDelete(recipe.id)}>Delete</button>
                    <button onClick={()=>router.push(`/detailRecipe/${recipe.id}`)} className='btn btn-warning text-white'>View</button>
                </div>
              </>
            ))}
          </div>
        </div>

    )
    }

    export default myRecipe;
        