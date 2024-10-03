import React, { useEffect, useState } from 'react'
import './Intrest.css'
import axios from 'axios';
const Intrest = () => {
const [data,setData]=useState([]);

const[intrest_amt,setInt_amt]=useState(0);
function getTotalIntrest(){
  
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/getTotalIntrest.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));
  
  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
  setInt_amt(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));

}
 function getData(){

  const url=`${process.env.REACT_APP_domain}/sjh-team-api/intrest.php`;
  let fData= new FormData();
  fData.append('name',localStorage.getItem('team'));

  axios.post(url,fData).then((response) => {

    const APIResponse = response.data;// This is response data from AXIOS
    setData(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));


  // get total deposite
 

}  


useEffect(()=>{
  getData();
  getTotalIntrest();
},[])



  return (
    <div className='deposite-page'>
        <h2 className='depositeName'> All Users Intrets Table </h2>
       
        <div className='table2'> 
        <table >
              
                <tr> 
                    <td style={{background:'orange'}}>Sr.No.</td>
                    <td style={{background:'orange'}}>user Name</td>
                    <td style={{background:'orange'}}>Date</td>       
                    <td style={{background:'orange'}}>Note</td>  
                    <td style={{background:'orange'}}>Intrest</td>          
                </tr>
               
                {data.map((item,index) => (
                 
                 <tr> 
                 <td style={{background:'white'}}>{index+1}</td>
                 <td style={{background:'white'}}>{item.user_name}</td>
                 <td style={{background:'white'}}>{item.Date}</td>   
                 <td style={{background:'white'}}>{item.note}</td>  
                 <td style={{background:'white'}}>{item.intrest}</td>              
             </tr>
      ))}
               <tr> 
                    <td colSpan="4"style={{background:'orange'}}>Total</td>
                
                    <td style={{background:'orange'}}>{intrest_amt}</td>             
                </tr>
           
           
        </table>
        </div>
     
      </div> 
   
  )
}

export default Intrest
