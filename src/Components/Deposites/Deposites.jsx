import React, { useEffect, useState } from 'react'
import './Deposites.css'
import axios from 'axios';
const Deposites = () => {
const [data,setData]=useState([]);

const[dep_amt,setDep_amt]=useState(0);
function getTotalDeposite(){
  
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/getTotalDeposite.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));

  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
  setDep_amt(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));

}
 function getData(){

  const url=`${process.env.REACT_APP_domain}/sjh-team-api/deposite2.php`;
  let fData= new FormData();
  fData.append('name',localStorage.getItem('team'));

  axios.post(url,fData).then((response) => {

    const APIResponse = response.data;// This is response data from AXIOS
    setData(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));


  // get total deposite
  getTotalDeposite();

}  


useEffect(()=>{
  getData();
},[])



  const[name,setName]=useState("");
  const[amount,setAmount]=useState();
  

   
  return (
    <div className='deposite-page'>
        <h2 className='depositeName'> All Users Deposites Table </h2>
        <div className='add-deposite'>
        <div className='table2'> 
        <table >
              
                <tr> 
                    <td style={{background:'orange'}}>Sr.No.</td>
                    <td style={{background:'orange'}}>user Name</td>
                    <td style={{background:'orange'}}>Deposite</td>             
                </tr>
               
                {data.map((name,index) => (
                 
                 <tr> 
                 <td style={{background:'white'}}>{index+1}</td>
                 <td style={{background:'white'}}>{name.user_name}</td>
                 <td style={{background:'white'}}>{name.deposite}</td>             
             </tr>
      ))}
               <tr> 
                    <td style={{background:'orange'}}>Total</td>
                    <td style={{background:'orange'}}>-</td>
                    <td style={{background:'orange'}}>{dep_amt}</td>             
                </tr>
           
           
        </table>
        </div>
     
      </div> 
    </div>
  )
}

export default Deposites
