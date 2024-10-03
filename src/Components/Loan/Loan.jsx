import React, { useEffect, useState } from 'react'
import '../Deposites/Deposites.css';
import axios from 'axios';
const Deposites = () => {
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
  getTotalLoan();
  getTotalLoanReturned();
},[])



  return (
    <div className='deposite-page'>
        <h2 className='depositeName'> All Users Loans Table </h2>
       
      <div className='table mt-[50px]'> 
        <table >
              
                <tr> 
                    <td style={{background:'orange'}}>Sr.No.</td>
                    <td style={{background:'orange'}}>Loan id</td>
                    <td style={{background:'orange'}}>user Name</td>
                    <td style={{background:'orange'}}>Loan Amount</td>     
                    <td style={{background:'orange'}}>Get Date</td>
                    <td style={{background:'orange'}}>Re-Date</td>
                    <td style={{background:'orange'}}>Loan Type</td>    
                    <td style={{background:'orange'}}>Status</td>
                       
                </tr>
               
                {data.map((name,index) => (
                 <tr> 
                 <td style={{background:'white'}}>{index+1}</td>
                 <td style={{background:'white'}}>{name.id}</td>
                 <td style={{background:'white'}}>{name.user_name}</td>
                 <td style={{background:'white'}}>{name.loan_amt}</td>  
                 <td style={{background:'white'}}>{name.get_date}</td>
                 <td style={{background:'white'}}>{name.r_date}</td>  
                 <td style={{background:'white'}}>{name.loan_type}</td>
                 <td style={{background:'white'}}>{name.loan_status}</td>             
             </tr>
      ))}
            <tr> 
                    <td colSpan="3" style={{background:'orange'}}>Total Geted Loan</td>
                  
                    <td style={{background:'orange'}}>{loan_amt}</td>     
                    <td colSpan="3" style={{background:'orange'}}>Total Returned Loan </td>
                    <td style={{background:'orange'}}>{loan_amt_returned}</td>
                 
                 
                       
                </tr>
           
        </table>
      </div> 
    </div>
  )
}

export default Deposites
