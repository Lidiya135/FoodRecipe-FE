import React from "react";
import { useRouter } from "next/router";
import Layouts from "../../components/Layouts";
import Image from "next/image";
import styles from "./detailVideo.module.css";
import ReactPlayer from 'react-player'

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    console.log(id, "params id vidio");
    const res = await fetch(`http://localhost:3009/recipe/${id}`);
    const data = await res.json();
    console.log(data,"data get recipe in detail");
    console.log(data.data[0].photo, "photooo rsep vidio")
    const { token } = context.req.cookies;
    console.log(token,"my token")
    return {
      props: {
        data,
        id,
        token: token,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

const DetailVidio = ({ data }) => {
    // const [dataRecipe, setDataRecipe] = useState([]);
    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:3009/recipe`)
    //     .then((res) => {
    //       console.log("Get recipe success");
    //       console.log(res.data, );
    //       res.data && setDataRecipe(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log("Get comment by recipe fail");
    //       console.log(err);
    //     });
    // }, []);

    return (
        <Layouts title="| Detail Video">
        <div className= {styles.container}>
            <div className={styles.main}>
                <div className={styles.mainvid}>
                    {/* <Image src="/image/cuttingp.png" alt="" width={850} height={500} /> */}
                    {/* <image src={data.data[0].photo} alt="" width={850} height={500} /> */}
                      <ReactPlayer width={850} height={500} url={data.data[0].vidio} />
                </div>
                <h2> {data.data[0].title} </h2>
                <h2>Cut the condiment and then mix it</h2>
            </div>
            <div className={styles.sub}>
                <h6>Next Video</h6>

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

export default DetailVidio;