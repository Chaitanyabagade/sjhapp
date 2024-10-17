import React, { useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';

import axios from 'axios';
const LoanRequest = () => {
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(0);
   
    const [loanReqests_amt, set_req_amt] = useState(0);
    function getTotalloanReqests() {

        const url2 = `${process.env.REACT_APP_domain}/sjh-team-api/getTotalloanRequests.php`;
        let fData2 = new FormData();
        fData2.append('name', localStorage.getItem('team'));

        axios.post(url2, fData2).then((response) => {
            const APIResponse = response.data;// This is response data from AXIOS
            set_req_amt(APIResponse); // Only Response from API is set in state
        }).catch(error => alert(error, " Try Again...!"));

    }
    function getData() {

        const url = `${process.env.REACT_APP_domain}/sjh-team-api/loanRequests.php`;
        let fData = new FormData();
        fData.append('name', localStorage.getItem('team'));
   
        axios.post(url, fData).then((response) => {

            const APIResponse = response.data;// This is response data from AXIOS
            setData(APIResponse); // Only Response from API is set in state
        }).catch(error => alert(error, " Try Again...!"));


        // get total deposite


    }
    const [amount, setAmount] = useState();
    const [duration,setDuration]=useState();
    const [needDate,setNeedDate]=useState("");
   

    const handleAddLoanRequests = () => {

        if (amount.length <= 0) {
            alert("amount is left");
        }
        else if (duration.length === 0) {
            alert("duration is left");
        }
        else if (needDate.length === 0) {
            alert("need date is left");
        }       
        else {
            if (confirm(`Conferm to Add Loan request of Amount => ${amount}...`)) {
                setSpinner(1);
                const url = `${process.env.REACT_APP_domain}/sjh-team-api/Add_Loan_Request.php`;
                let fData = new FormData();
                fData.append('amount', amount);
                fData.append('duration', duration);
                fData.append('needDate', needDate);
                fData.append('username', localStorage.getItem('user_name'));

                fData.append('team', localStorage.getItem('team'));
               
                axios.post(url, fData).then((result) => {
                    getData();
                    setSpinner(0);
                    if (result.status == 200) {
                        alert("sucessfuly add..",)
                    }
                    else {
                        alert(result.data);
                    }
                    getData();
                })
                    .catch(error => alert(error, " Try Again...!"));
            }
        }

    }


    useEffect(() => {
        getData();
        getTotalloanReqests();

    });



    return (
        <div className=' overflow-scroll  h-[100vh] pt-[100px] bg-gradient-to-r from-violet-200 to-pink-200'>
            <div role="status" className={`${spinner ? "block" : "hidden"} absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2`}>
                <svg aria-hidden="ture" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="flex items-center justify-center h-fit  m-[20px] ">

                <div className=" text-xl  bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Request</h2>

                    {/* Select Field 1 */}
                    <div className="mb-4 mr-9">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"/>
                    </div>
                     {/* Select Field 2 */}
                     <div className="mb-4 mr-9">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Duration</label>
                        <input value={duration} onChange={(e) => setDuration(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"/>
                    </div>
                    {/* Select Field 2 */}
                    <div className="mb-4 mr-9">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Need Date</label>
                        <input value={needDate} onChange={(e) => setNeedDate(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"/>
                    </div>
                    {/* Select Field 2 */}
                   
                    {/* Submit Button */}
                    <button
                        onClick={handleAddLoanRequests}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300"
                    >
                        <FaPaperPlane className="mr-2" />
                        Submit
                    </button>
                </div>
            </div>

            <h2 className='mt-9 text-3xl text-center  rounded-full text-green-700 font-extrabold p-2 ml-auto mr-auto'> All Users loanReqests  </h2>

            <div className='overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'>
                <table className='w-full '>

                    <tr className='border-2 border-black font-bold'>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Sr.No.</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Request id</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>user Name</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Amount</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Duration</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Need Date</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Request Date</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Status</td>
                        <td className='p-1 border-2 border-black text-center' style={{ background: 'orange' }}>Reply</td>
                    </tr>

                    {data.map((item, index) => (

                        <tr>
                            <td className='p-1 border-2 border-black text-center' style={{ background: 'white' }}>{index + 1}</td>
                            <td className='p-1 border-2 border-black text-center' style={{ background: 'white' }}>{item.id}</td>
                            <td className='p-1 border-2 border-black' style={{ background: 'white' }}>{item.user_name}</td>
                            <td className='p-1 border-2 border-black text-center' style={{ background: 'white' }}>{item.amount}</td>
                            <td className='p-1 border-2 border-black text-center' style={{ background: 'white' }}>{item.EMI_duration}</td>
                            <td className='p-1 border-2 border-black text-right pr-2' style={{ background: 'white' }}>{item.need_date}</td>
                            <td className='p-1 border-2 border-black text-center' style={{ background: 'white' }}>{item.request_date}</td>
                            <td className='p-1 border-2 border-black' style={{ background: `${item.status=='Approved..'?'green':item.status=='Seeing..'?'yellow':'red'}` }}>{item.status}</td>
                            <td className='p-1 border-2 border-black text-right pr-2' style={{ background: 'white' }}>{item.reply}</td>

                        </tr>
                    ))}
                    <tr className='font-bold'>
                        <td className='p-1 border-2 border-black text-center' colSpan="6" style={{ background: 'orange' }}>Total</td>

                        <td className='p-1 border-2 border-black text-right pr-2' colSpan="3" style={{ background: 'orange' }}>{loanReqests_amt}</td>
                    </tr>


                </table>
            </div>

        </div>

    )
}


export default LoanRequest
