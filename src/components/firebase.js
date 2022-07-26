
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyDpagBtonPKYNlMK8QyOj5EgUH0__h0Zi0",
  authDomain: "auth-karthick.firebaseapp.com",
  projectId: "auth-karthick",
  storageBucket: "auth-karthick.appspot.com",
  messagingSenderId: "1000065726861",
  appId: "1:1000065726861:web:df07a54bc7383bcec9a5c4"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

const provider =new GoogleAuthProvider();

 export const signinwithgoogle=()=>{
  

  signInWithPopup(auth,provider).then((res)=>{
  console.log(res)
  localStorage.setItem('GAname',res.user.displayName)
  localStorage.setItem('GAemail',res.user.email)
  localStorage.setItem('GAimgurl',res.user.photoURL)
 window.location="/main"
 
  }).catch((err)=>{
    console.log(err)
  })
}