import jwt from 'jwt-decode';
import {useNavigate} from "react-router-dom";
import "../App.css";
import { useEffect, useState } from 'react';




function Main(){
 
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[img,setimg]=useState();

const navigate=useNavigate()
 
useEffect(()=>{

    const auth_token=localStorage.getItem('auth');
     if(auth_token){
        const tokende=jwt(auth_token);
        setname(tokende.name);
        setemail(tokende.email);
        setimg(tokende.imgurl);
     }

},[name,email,img])


    const gname= localStorage.getItem('GAname')
    const gemail= localStorage.getItem('GAemail')
    const gimgurl= localStorage.getItem('GAimgurl')

 
  
    const logout=()=>{
        localStorage.removeItem('auth');
        localStorage.removeItem('GAname');
        localStorage.removeItem('GAemail');
        localStorage.removeItem('GAimgurl');
        navigate("/signin")
    }
return(
    <div id="container">
    <img  id="userimg"alt="user img" src={img || gimgurl}/>
    <h3 id="username">{name || gname}</h3><br/>
    <h3 id="useremail">{email ||gemail}</h3>
    <button onClick={()=>logout()}>Logout</button>
    </div>
)

}



export default Main