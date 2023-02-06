import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import axios from "axios";
import swal from "sweetalert";
import { useRouter } from "next/router";


export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log("my token", token);
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

const TabData = ({ token }) => {
  const [key, setKey] = useState("myrecipe");
  const router = useRouter();
  const [data, setData] = useState(null);
  const [sav, setSav] = useState(null);
  const [lik, setLik] = useState(null);

  const getData =() => {    
    axios
      .get(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  };
console.log(data,"data my recipe")
  useEffect(() => {
    getData()
  }, [])

  const deleteData = (e, id) => {
    axios.delete(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe/${id}`,  {
        headers: { Authorization: `Bearer ${token}` },
      })
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        swal("Success", "Delete recipe success", "success");
        getData()
        router.push("/profile");
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        swal("Warning", "Delete recipe failed", "error");
    })
  }

  const getDataSaved =() => {    
    axios
      .get(`https://odd-ruby-sea-lion-toga.cyclic.app/save`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setSav(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  };
  useEffect(() => {
    getDataSaved()
    console.log(sav, "data dari saveeeee")
  }, [])
  console.log(sav, "data dari saveeeee")

  const getDataLike =() => {    
    axios
      .get(`https://odd-ruby-sea-lion-toga.cyclic.app/like`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setLik(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  };
  useEffect(() => {
    getDataLike()
  }, [])
  console.log(lik, "data dari likeee")

  const deleteDataLike = (e, id) => {
    axios.delete(`https://odd-ruby-sea-lion-toga.cyclic.app/like/${id}`,  {
        headers: { Authorization: `Bearer ${token}` },
      })
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        swal("Success", "Delete recipe success", "success");
        getDataLike()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        swal("Warning", "Delete recipe failed", "error");
    })
  }

  const deleteDataSave = (e, id) => {
    axios.delete(`https://odd-ruby-sea-lion-toga.cyclic.app/save/${id}`,  {
        headers: { Authorization: `Bearer ${token}` },
      })
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        swal("Success", "Delete recipe success", "success");
        getDataSaved()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        swal("Warning", "Delete recipe failed", "error");
    })
  }

  return (
    <div className="container text-start rounded-2 mt-1 bg-white">
      <div className="row  rounded-3">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="myrecipe" title="My Recipe">
            <div className="row">
              {data ? (
                data.map((item) => (
                  <div  className="col-4" key={item.id}>
                    <div onClick={() => router.push(`/editRecipe/${item.id}`)}>
                    <img src={item.photo}
                      style={{ height: "300px", width:"300px", }}
                      alt="" />
                    <div style={{display:"flex", justifyContent:"space-between",}}>
                        <h4 style={{marginTop:"20px", marginBottom:"10px", }}>
                        {item.title}
                        </h4>
                        <button type="submit" onClick={(e) => deleteData(e, item.id)} 
                        style={{marginTop:"15px", marginRight:"15px", marginBottom:"10px", backgroundColor:"red"}}> X </button>
                    </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>

          </Tab>
          <Tab eventKey="savedrecipe" title="Saved Recipe">
            <div className="row">
            {sav ? (
                sav.map((item) => (
              <div className="col-3" key={item.id} onClick={() =>
                router.push(`/detailRecipe/${item.recipe_id}`)}>
                <img src={item.recipe_photo} height={300} width={300} alt="" />
                <h4
                  style={{marginTop: "-40px", marginLeft: "13px", color: "white",}}>
                  {item.recipe_name}
                </h4>
              </div>
                ))):(<h1>....loading</h1>)}
            </div>
          </Tab>

          <Tab eventKey="likedrecipe" title="Liked Recipe">
            <div className="row">
            {lik ? (
                lik.map((item) => (
              <div className="col-3" key={item.recipe_id}>
                <img src={item.recipe_photo} height={300} width={300} alt="" />
                <h4
                  style={{marginTop: "-40px",marginLeft: "13px", color: "white",}}>
                  {item.recipe_name}
                </h4>
              </div>
               ))):(<h1>....loading</h1>)}
              
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default TabData;