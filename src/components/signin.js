import "../App.css";
import {useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom";





function Signin(){

    const[logemail,setlogemail]=useState("");
    const[logpwd,setlogpwd]=useState("");
    const[error,seterror]=useState("");
     
    const navigate=useNavigate();


  const  logindata=async(e)=>{
    e.preventDefault()
   
       const res= await axios.post("https://karthicklogin-system.herokuapp.com/api/login",{
          email:logemail,
          password:logpwd,
        })
        try{
         
            setlogemail("");
            setlogpwd("");
            localStorage.setItem('auth',res.data)
            navigate("/main")
            window.location.reload()
          }
          catch(err){
            if(err.res && err.res.status>=404 && err.res.status<=500){
                  seterror(err.res.data.message);
            }
          }
  }
    return (
        <div id="container">
          <h3 id="title">Signin</h3>
         <form encType="multipart/form-data" onSubmit={logindata}>
          <input type="email" value={logemail} placeholder="Enter the email" required onChange={(e)=>{setlogemail(e.target.value)}}/>
          <input type="password" value={logpwd} placeholder="Enter the password" required onChange={(e)=>{setlogpwd(e.target.value)}}/>
          <h3>{error}</h3>
          <button>signin</button>
      </form>
      <div id="detiles"><h5>Don't have an account</h5><Link className="a" to="/signup">Signup</Link></div>  
        </div>
    
      );


}
export default Signin;