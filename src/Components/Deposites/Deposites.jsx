import React, { useEffect, useState } from 'react'

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

  

}  


useEffect(()=>{
  getTotalDeposite();
  getData();
},[]);



  return (
    <div className='deposite-page pt-[100px] justify-center w-[100%] h-[100vh] bg-yellow-300'>
        <h1 className='depositeName'> All Users Deposites  </h1>
       
      
        <div className=' overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'> 
        <table className='w-full '>
                <tr className='font-bold'> 
                    <td className='p-1 border-2 border-black text-center'style={{background:'orange'}}>Sr.No.</td>
                    <td className='p-1 border-2 border-black text-center'style={{background:'orange'}}>user Name</td>
                    <td className='p-1 border-2 border-black text-center'style={{background:'orange'}}>Deposite</td>             
                </tr>
               
                {data.map((name,index) => (
                 
                 <tr> 
                 <td className='p-1 border-2 border-black text-center'style={{background:'white'}}>{index+1}</td>
                 <td className='p-1 border-2 border-black text-'style={{background:'white'}}>{name.user_name}</td>
                 <td className='p-1 border-2 border-black text-right'style={{background:'white'}}>{name.deposite}</td>             
             </tr>
      ))}
               <tr className='font-bold'> 
                    <td colSpan="2"className='p-1 border-2 border-black text-center'style={{background:'orange'}}>Total</td>
                    <td className='p-1 border-2 border-black text-right'style={{background:'orange'}}>{dep_amt}</td>             
                </tr>
           
           
        </table>
      </div> 
    </div>
  )
}

export default Deposites
