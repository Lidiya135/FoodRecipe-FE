import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/base/button/index.js";
import Footer from "../../components/base/footer/index.js";
import MyLayout from "../../components/layout/MyLayout.js";
import landingPage from "./index.js";
import Image from "next/image";
import styles from "./detail.module.css";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  const router = useRouter();
  const [ingredient, setIngredient] = useState("");
  const id = router.query.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3009/recipe//${id}`)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log("data food", data);
  return (
    <MyLayout>
      <div className={styles.container}>
        <h1>{data.title}</h1>
        <div className={styles.mainimg}>{<Image src={data.img ? data.img : "/assets/food2.svg"} width={400} height={300} alt="" />}</div>
        <div className={styles.inggrediens}>
          <h3>Ingredients</h3>
          <p>
            {data.ingre?.split(",").map((item) => (
              <p key={item.id}>- {item}</p>
            ))}
          </p>
        </div>
        <div className={styles.vid}>
          <h3>Video Recipe</h3>
          <Button btn="btnVid" color="yellow" title="Cek Recipe on Video" onClick={() => router.push(`/detailvideo/${data.idrecipe}`)} />
        </div>
        {/* <div className={styles.coment}>
          <div>
            <textarea className={styles.ingre} name="comment" id="" cols="105" rows="10" placeholder="Comment" />
          </div>
          <Button title="simpan" btn="login" color="yellow"></Button>
          <h3>Comment</h3>
        </div> */}
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default ProductDetail;