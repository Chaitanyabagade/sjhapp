import React, { useState } from 'react'
import './LoginPage.css'
import userimg from '../../assets/userimg.png'
import passimg from '../../assets/passimg.png'
import mobileimg from '../../assets/mobileimg.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const[name,setName]=useState("");
  const[mobile,setMobile]=useState("");
  const[pass,setPass]=useState("");
  let navigate= useNavigate("");
  const handleSubmit =() =>{
    
     if(name.length===0){
          alert("User Name is left");
     }
     else if(mobile.length===0){
      alert("Mobile no. is left");
     }
   
    else if(pass.length===0){
      alert("Password is left");
     }
    else{
       const url=`${process.env.REACT_APP_domain}/sjh-team-api/login.php`;
       let fData= new FormData();
       fData.append('name',name);
       fData.append('mobile',mobile);
       fData.append('pass',pass);


       axios.post(url,fData).then((result)=>{
          if(result.data.Status === '200'){
             window.localStorage.setItem('mobile_no',result.data.mobile_no);
             window.localStorage.setItem('user_name',result.data.user_name);
             window.localStorage.setItem('team',result.data.team);
             window.localStorage.setItem('reload_flag',"1");
             navigate('/dashboard');
          }
          else{
             alert("invalid user check the details..!");

          }
       }).catch(error=> alert(error," Try Again...!"));
       
       
    }
  }
  return (
    <div className='loginpage'>
       <div className="loginBox">
       <h1>Login</h1>
          <label className='flex' for=""><img src={userimg} alt=""/>User Name</label><br/>
          <input placeholder="Enter your name..." type="text"value={name} onChange={(e) => setName(e.target.value)}/><br/>
          <label className='flex' for=""><img src={mobileimg} alt=""/>Mobile No.</label><br/>
          <input placeholder="ex. 1234567890"type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}/><br/>
          <label className='flex' for=""><img src={passimg} alt=""/>Password</label><br/>
          <input placeholder="Password..."type="password"value={pass} onChange={(e) => setPass(e.target.value)}/><br/>
          <button  className="w-[40%] text-3xl mt-3 ml-[30%] bg-orange-400 rounded-full"type="submit" onClick={handleSubmit}>Submit</button>

       </div>
    </div>
  )
}

export default Login
