import React, { useEffect, useState } from 'react'

import axios from 'axios';
const Loan = () => {

  const [data, setData] = useState([]);

  const [names, setNames] = useState([]);
  function getTotalNames() {

    const url2 = `${process.env.REACT_APP_domain}/sjh-team-api/allUserName.php`;
    let fData2 = new FormData();
    fData2.append('name', localStorage.getItem('team'));

    axios.post(url2, fData2).then((response) => {
      const APIResponse = response.data;// This is response data from AXIOS
      setNames(APIResponse); // Only Response from API is set in state
    }).catch(error => alert(error, " Try Again...!"));


  }

  const[total_intrest_amt,setTotal_intrest_amt]=useState(0);
  function getTotalIntrest() {
    const url2 = `${process.env.REACT_APP_domain}/sjh-team-api/getTotalIntrest.php`;
    let fData2 = new FormData();
    fData2.append('name', localStorage.getItem('team'));

    axios.post(url2, fData2).then((response) => {
      const APIResponse = response.data;// This is response data from AXIOS
      setTotal_intrest_amt(APIResponse); // Only Response from API is set in state
    }).catch(error => alert(error, " Try Again...!"));

  }



  const [loan_amt_returned, setloan_amt_returned] = useState(0);
  function getTotalLoanReturned() {
    const url2 = `${process.env.REACT_APP_domain}/sjh-team-api/getTotalLoanReturned.php`;
    let fData2 = new FormData();
    fData2.append('name', localStorage.getItem('team'));

    axios.post(url2, fData2).then((response) => {
      const APIResponse = response.data;// This is response data from AXIOS
      setloan_amt_returned(APIResponse); // Only Response from API is set in state
    }).catch(error => alert(error, " Try Again...!"));

  }



  const [loan_amt, setloan_amt] = useState(0);
  function getTotalLoan() {
    const url2 = `${process.env.REACT_APP_domain}/sjh-team-api/getTotalLoan.php`;
    let fData2 = new FormData();
    fData2.append('name', localStorage.getItem('team'));

    axios.post(url2, fData2).then((response) => {
      const APIResponse = response.data;// This is response data from AXIOS
      setloan_amt(APIResponse); // Only Response from API is set in state
    }).catch(error => alert(error, " Try Again...!"));

  }


  function getData() {
    const url = `${process.env.REACT_APP_domain}/sjh-team-api/user_loan.php`;
    let fData = new FormData();
    fData.append('name', localStorage.getItem('team'));

    axios.post(url, fData).then((response) => {

      const APIResponse = response.data;// This is response data from AXIOS
      setData(APIResponse); // Only Response from API is set in state
    }).catch(error => alert(error, " Try Again...!"));
  }

useEffect(()=>{
  getData();
  getTotalLoanReturned();
  getTotalLoan();
  getTotalNames();
  getTotalIntrest();

},[])

  return (
    <div className='deposite-page w-full h-[100vh] pt-[100px] bg-gradient-to-r from-violet-200 to-pink-200'>
       
        
      <h2 className='depositeName  text-center text-green-500 text-4xl font-bold '> All Users Loan </h2>
      <div className=' overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1400px]'>

        <table className='w-full text-[25px]' >

          <tr>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Sr.No.</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Loan id</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>user Name</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Loan Amt</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Loan Amt Returned</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Intrest Amt</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Intrest Amt Returened</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Loan Type</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>EMI Amt</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>EMI Duration</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>EMI Count</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>EMI Rate</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Loan Date</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Last EMI Paid Date</td>
            <td className="font-bold p-2 pl-3 pr-3 border-2 border-black text-center" style={{ background: 'orange' }}>Status</td>
          </tr>

          {data.map((item, index) => (
            <tr>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{index+1}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.id}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.user_name}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.loan_amt}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.loan_amt_returned}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.loan_amt_intrest}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.loan_amt_intrest_returned}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.loan_type}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.EMI_amt}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.EMI_duration}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.EMI_count}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.EMI_rate}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.Loan_date}</td>
              <td className="pl-1 pr-1 border-2 border-black text-center" style={{ background: 'orange' }}>{item.last_paid_date}</td>
              <td className={`pl-1 pr-1 border-2 border-black text-center ${item.status=='Clear'?"bg-green-500":"bg-red-400"}`} >{item.status}</td>
            </tr>
          ))}

          <tr>

               <td colSpan="3" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>Total Returned Loan</td>
               <td colSpan="2" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>{loan_amt_returned}</td>
          
               <td colSpan="3" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>Total Dispatched Loan</td>
               <td colSpan="2" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>{loan_amt}</td>
        
               <td colSpan="3" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>Total Intrest ==></td>
               <td colSpan="2" className="pl-1 pr-1 border-2 border-black text-center font-bold p-2" style={{ background: 'orange' }}>{total_intrest_amt}</td>

          </tr>

        </table>
      </div>
    </div>
  )
}

export default Loan
