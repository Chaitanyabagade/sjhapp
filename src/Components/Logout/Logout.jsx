import React, { useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

      var navigate= useNavigate(); 
      function logout(){
        if(window.confirm("Do you want to Logout?")){
           localStorage.removeItem("mobile_no");
           localStorage.removeItem("user_name");  
           localStorage.removeItem("team"); 
           
           navigate("/");
           localStorage.setItem('reload_flag',1);
        }
         navigate("/dashboard")
      }
       
      useEffect(()=>{
         logout();
      });
    
  return (
  <></>
  )
}

export default Logout
