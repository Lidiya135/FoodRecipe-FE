import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import axios from "axios";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
    const { token } = context.req.cookies;
    // console.log(token,"SSR modal");
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

function ModalProfile({token}) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [photo, setPhoto] = useState("");
    const [data, setData] = useState([])
    // console.log(token,"my token in modal pprofil")
    useEffect(() => {
      axios
        .get("https://odd-ruby-sea-lion-toga.cyclic.app/users/data", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("get data success");
          console.log(res.data);
          res.data && setData(res.data.data[0]);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
    }, []);
    // console.log(data,"data profil modal")

    
    const [updateData, setUpdateData] = useState({
        fullname: data.fullname
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
    const postData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", updateData.fullname);
        formData.append("photo", photo);
        // console.log(formData)
        const user = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
        },
      };

      await axios
        .put(`http://localhost:3009/users/profile`, formData, user)
        .then((res) => {
          console.log("Update profile succes");
          console.log(res);
          window.location.reload(false);
          swal("Success", "Update profile success", "success");
        })
        .catch((err) => {
          console.log("Update data profile failed");
          console.log(err);
          swal("Warning", "Update profile failed", "error");
        });
    };

    return (
      <>
        <Button
          color="primary"
          type="button"
          onClick={() => setModalOpen(!modalOpen)}
        >
          Edit Profile
        </Button>
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className=" modal-header">
            <h5 className=" modal-title" id="exampleModalLabel">
              Data diri
            </h5>
            <button
              aria-label="Close"
              className=" close"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <ModalBody>
            <form>
                <input type="file" id="photo" name="photo" onChange={handlePhoto}/>
                <span style={{}} className="d-flex mt-3">Fullname</span>
                <input type="text" placeholder={data.fullname} name="fullname" value={updateData.fullname} onChange={(e) => handleChange(e)}/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Close
            </Button>
            <Button onClick={postData} color="primary" type="button">
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
  
  export default ModalProfile;