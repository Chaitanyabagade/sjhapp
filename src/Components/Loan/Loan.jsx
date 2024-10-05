import React, { useEffect, useState } from 'react'

import axios from 'axios';
const Loan = () => {

const [data,setData]=useState([]);

const[loan_amt_returned,setloan_amt_returned]=useState(0);
function getTotalLoanReturned(){
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/getTotalLoanReturned.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));

  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
  setloan_amt_returned(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));

}


const[loan_amt,setloan_amt]=useState(0);
function getTotalLoan(){
  const url2=`${process.env.REACT_APP_domain}/sjh-team-api/getTotalLoan.php`;
  let fData2= new FormData();
  fData2.append('name',localStorage.getItem('team'));

  axios.post(url2,fData2).then((response) => {
    const APIResponse = response.data;// This is response data from AXIOS
  setloan_amt(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));

}


 function getData(){
  const url=`${process.env.REACT_APP_domain}/sjh-team-api/user_loan.php`;
  let fData= new FormData();
  fData.append('name',localStorage.getItem('team'));

  axios.post(url,fData).then((response) => {

    const APIResponse = response.data;// This is response data from AXIOS
    setData(APIResponse); // Only Response from API is set in state
  }).catch(error=> alert(error," Try Again...!"));
}  
useEffect(()=>{
  getData();
  getTotalLoanReturned();
  getTotalLoan();

},[])

  return (
    <div className='deposite-page'>
       
        <h2 className='depositeName'> All Users Loans  </h2>
        <div className=' overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1400px]'> 
       
        <table className='w-full' >
              
        <tr> 
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Sr.No.</td>
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Loan id</td>
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>user Name</td>
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Loan Amount</td>     
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Get Date</td>
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Re-Date</td>
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Loan Type</td>    
                    <td  className="p-1 border-2 border-black text-center" style={{background:'orange'}}>Status</td>
                       
                </tr>
               
                {data.map((name,index) => (
                
                 <tr> 
                 <td className="p-1 border-2 border-black text-center" style={{background:'white'}}>{index+1}</td>
                 <td className="p-1 border-2 border-black"style={{background:'white'}}>{name.id}</td>
                 <td className="p-1 border-2 border-black"style={{background:'white'}}>{name.user_name}</td>
                 <td className="p-1 border-2 border-black text-right"style={{background:'white'}}>{name.loan_amt}</td>  
                 <td className="p-1 border-2 border-black text-center"style={{background:'white'}}>{name.get_date}</td>
                 <td className="p-1 border-2 border-black text-center"style={{background:'white'}}>{name.r_date}</td>  
                 <td className="p-1 border-2 border-black text-center"style={{background:'white'}}>{name.loan_type}</td>
                 <td className="p-1 border-2 border-black text-center"style={{background:'white'}}>{name.loan_status}</td>             
             </tr>
      ))}
              <tr> 
                    <td colSpan="3" style={{background:'orange'}}>Total Geted Loan</td>
                  
                    <td className="p-1 border-2 border-black text-right"style={{background:'orange'}}>{loan_amt}</td>     
                    <td className="p-1 border-2 border-black "colSpan="3" style={{background:'orange'}}>Total Returned Loan </td>
                    <td className="p-1 border-2 border-black text-right"style={{background:'orange'}}>{loan_amt_returned}</td>
                 
                 
                       
                </tr>
           
           
        </table>
      </div> 
    </div>
  )
}

export default Loan
