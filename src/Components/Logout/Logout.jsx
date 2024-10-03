import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {

      var navigate= useNavigate(); 
      function logout(){
        if(window.confirm("Do you want to Logout?")){
           localStorage.removeItem("mobile_no");
           localStorage.removeItem("user_name");  
           localStorage.removeItem("team"); 
           
        }
         navigate("/dashboard")
      }
       
      useEffect(()=>{
         logout();
      },[]);
    
  return (
  <></>
  )
}

export default Logout
