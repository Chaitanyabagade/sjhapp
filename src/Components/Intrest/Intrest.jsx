import React, { useEffect, useState } from 'react'
import './Intrest.css'
import axios from 'axios';
const Intrest = () => {
const [data,setData]=useState([]);

const[intrest_amt,setInt_amt]=useState(0);

const [names,setNames]=useState([]);

function getTotalNames(){
  
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/allUserName.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));
  
  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
    setNames(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));
 

}

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
  getTotalNames();
},[])



  return (
    <div className='deposite-page'>
    
        <h2 className='mt-9 text-3xl text-center w-[300px] rounded-full bg-orange-600 p-2 ml-auto mr-auto'> All Users  Intrest</h2>
       
        <div className=' overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'> 
        <table className='w-full '>
              
                <tr className='border-2 border-black'> 
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Sr.No.</td>
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>user Name</td>
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Date</td>       
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Note</td>  
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Intrest</td>          
                </tr>
               
                {data.map((item,index) => (
                 
                 <tr> 
                 <td className='p-1 border-2 border-black text-center' style={{background:'white'}}>{index+1}</td>
                 <td className='p-1 border-2 border-black' style={{background:'white'}}>{item.user_name}</td>
                 <td className='p-1 border-2 border-black text-center' style={{background:'white'}}>{item.Date}</td>   
                 <td className='p-1 border-2 border-black' style={{background:'white'}}>{item.note}</td>  
                 <td className='p-1 border-2 border-black text-right pr-2' style={{background:'white'}}>{item.intrest}</td>              
             </tr>
      ))}
               <tr> 
                    <td className='p-1 border-2 border-black text-center' colSpan="4"style={{background:'orange'}}>Total</td>
                
                    <td className='p-1 border-2 border-black text-right pr-2'  style={{background:'orange'}}>{intrest_amt}</td>             
                </tr>
           
           
        </table>
        </div>
     
      </div> 
    
  )
}

export default Intrest
