
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import Main from './components/main';


function App() {
  
  const auth_token=localStorage.getItem('auth');
 
  const googleuser=localStorage.getItem('GAname');
  
 
  return (
    <>
  
 <Routes>
  <Route exact path="/" element={auth_token || googleuser?<Main/>:<Signin/>} /> 
  <Route exact path="/main" element={auth_token ||googleuser?<Main/>:<Signin/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
  <Route exact path="/signin" element={<Signin/>}/>
  <Route exact path="/" element={<Signin/>}/>
 </Routes>
 

    </>

  );
}

export default App;
