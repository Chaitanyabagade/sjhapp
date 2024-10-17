import React, { useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
const Remuneration = () => {
const [data,setData]=useState([]);



const[Remuneration_amt,setRemu_am]=useState(0);
function getTotalRemuneration(){
  
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/getTotalRemuneration.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));
  
  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
    setRemu_am(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));

}
 function getData(){

  const url=`${process.env.REACT_APP_domain}/sjh-team-api/remuneration.php`;
  let fData= new FormData();
  fData.append('name',localStorage.getItem('team'));

  axios.post(url,fData).then((response) => {
 
    const APIResponse = response.data;// This is response data from AXIOS
    setData(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));


  // get total renumaration
 

}  



useEffect(()=>{
   getData();
   getTotalRemuneration();
},[])



  return (
    <div className='deposite-page h-[100vh] pt-[100px] bg-gradient-to-r from-violet-200 to-pink-200 '>

        <h2 className='mt-9 text-3xl text-center w-[300px] rounded-full bg-orange-600 p-2 ml-auto mr-auto'> Remunerations</h2>
       
        <div className='overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'> 
        <table className='w-full mb-9'>
              
                <tr className='border-2 border-black'> 
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Sr.No.</td>
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Date</td>       
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Note</td>  
                    <td className='p-1 border-2 border-black text-center' style={{background:'orange'}}>Remuneration</td>          
                </tr>
               
                {data.map((item,index) => (
                 
                 <tr> 
                 <td className='p-1 border-2 border-black text-center' style={{background:'white'}}>{index+1}</td>
                 <td className='p-1 border-2 border-black text-center' style={{background:'white'}}>{item.Date}</td>   
                 <td className='p-1 border-2 border-black' style={{background:'white'}}>{item.note}</td>  
                 <td className='p-1 border-2 border-black text-right pr-2' style={{background:'white'}}>{item.remuneration}</td>              
             </tr>
      ))}
               <tr> 
                    <td className='p-1 border-2 border-black text-center' colSpan="3"style={{background:'orange'}}>Total</td>
                
                    <td className='p-1 border-2 border-black text-right pr-2'  style={{background:'orange'}}>{Remuneration_amt}</td>             
                </tr>
           
           
        </table>
        </div>
     
      </div> 
   
  )
}

export default Remuneration
