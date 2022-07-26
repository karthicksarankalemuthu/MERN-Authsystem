import "../App.css";
import {useState } from 'react';
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom";
import {signinwithgoogle} from "./firebase";



function Signup(){

    const[name,setname]=useState("");
    const[e_mail,setemail]=useState("");
    const[pwd,setpwd]=useState("");
    const[error,seterror]=useState("");
   const navigate=useNavigate();
     const googlelogo="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
  const  sumbitdata=async(e)=>{
    e.preventDefault()
          await axios.post(process.env.REACT_APP_CREATE,{
          name:name,
          email:e_mail,
          password:pwd
        })
        .then(()=>{
          setname("");
          setpwd("");
          setemail("");
         navigate("/signin")

        }).
        catch((err)=>{
          console.log(err);
            seterror();
          
    })
  }
    return (
        <div id="container-signup">
          <h3 id="title">Signup</h3>
      <form  encType="multipart/form-data" onSubmit={sumbitdata}>
          <input type="text" value={name} placeholder="Enter the name" required onChange={(e)=>{setname(e.target.value)}}/>
          <input type="email" value={e_mail} placeholder="Enter the email" required onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="password" value={pwd} placeholder="Enter the password" required onChange={(e)=>{setpwd(e.target.value)}}/>
          <h3>{error}</h3>
          <button>signup</button>
      </form>
      <div id="detiles"><h5>You have an account</h5><Link className="a" to="/signin">Signin</Link></div>  
      <h3 id="or">(OR)</h3>
       <button id="googlebtn"onClick={signinwithgoogle}><img width="40px" height="40px" alt="google-img" src={googlelogo}/>oogle</button>
        
        </div> 
    
      );


};
export default Signup;