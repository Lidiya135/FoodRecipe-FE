import axios from "axios";
import swal from "sweetalert";
import Router from "next/router";

export const  registerUser = (data, url) => async (dispact) =>{
    try{
        dispact({type:"REGISTER_LOGIN_PENDING"})
        const result = await axios.post(`${url}`,data)
        const user = result.data.data
        dispact({type:"USER_REGISTER_SUCCESS",payload: user})
        swal("Success", "Register success", "success");
        Router.push("/login");
        console.log("user register success")
    } catch(err){
        console.log("user register err")
        console.log(err)
        swal("Warning", "Register failed", "error");
    }
}