import React, { useState } from 'react'
import './LoginPage.css'
import { FaUser, FaMobileAlt, FaLock } from 'react-icons/fa';

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
    <>
        
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 loginpage">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        <div className='text-xl'>
          {/* User Name Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
              User Name
            </label>
            <span className="absolute left-3 top-10 text-gray-500 text-xl">
              <FaUser />
            </span>
            <input
              value={name} onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Mobile No. Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
              Mobile No.
            </label>
            <span className="absolute left-3 top-10 text-gray-500 text-xl">
              <FaMobileAlt />
            </span>
            <input
            value={mobile} onChange={(e) => setMobile(e.target.value)}
              type="tel"
              id="mobile"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <span className="absolute left-3 top-10 text-gray-500 text-xl">
              <FaLock />
            </span>
            <input
            value={pass} onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
          >
            Login
          </button>

         
        </div>

       
      </div>
    </div>
</>
  )
}

export default Login
