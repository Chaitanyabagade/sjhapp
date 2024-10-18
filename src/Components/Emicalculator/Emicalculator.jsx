import React, { useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';

import axios from 'axios';
const Emicalculator = () => {

    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [EMI_amount, setEmiamount] = useState(0);
    const [intrestRate, setIntrestRate] = useState(0);
    const [totalIntrest, setTotalIntrest] = useState(0);

    const handleCalculate = () => {

        setEmiamount(0);
        setIntrestRate(0);
        if (duration > 0) {
            if (duration < 4) {
                setIntrestRate(2.0);
            }
            else if (duration < 7) {
                setIntrestRate(2.3);
            }
            else if (duration < 9) {
                setIntrestRate(2.6);
            }
            else if (duration < 11) {
                setIntrestRate(3.0);
            }
            else if (duration < 12) {
                setIntrestRate(3.5);
            }
            else {
                setIntrestRate(4.0);
            }
        }

    }


    useEffect(() => {
        handleCalculate();
    }, [duration])


    return (
        <div className=' overflow-scroll  h-[100vh] pt-[100px] bg-gradient-to-r from-violet-200 to-pink-200'>

            <div className="flex items-center justify-center h-fit  m-[20px] ">

                <div className=" text-xl  bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">EMI Calculator</h2>

                    {/* Select Field 1 */}
                    <div className="mb-4 mr-9">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none" />
                    </div>
                    {/* Select Field 2 */}
                    <div className="mb-4 mr-9">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Duration</label>
                        <input value={duration} onChange={(e) => setDuration(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none" />
                    </div>

                    {/* Select Field 2 */}

                </div>
            </div>

            <h2 className='mt-9 text-3xl text-center  rounded-full text-green-700 font-extrabold p-2 ml-auto mr-auto'> EMI Details  </h2>

            <div className='overflow-x-scroll text-[15px] sm:text-2xl md:text-3xl lg:text-4xl ml-auto mr-auto mt-5 bg-black w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'>
                <table className='w-full bg-white '>
                    <tr>
                        <td className='text-center bg-green-400 font-bold border-2 border-black'>Total Amount</td>
                        <td className='text-center bg-green-400 font-bold border-2 border-black'>Duration</td>
                        <td className='text-center bg-green-400 font-bold border-2 border-black'>EMI Amount</td>
                        <td className='text-center bg-green-400 font-bold border-2 border-black'>Intrest Rate</td>
                    </tr>
                    <tr>
                        <td className='text-center  font-bold border-2 border-black'>{amount}</td>
                        <td className='text-center  font-bold border-2 border-black'>{duration}</td>
                        <td className='text-center  font-bold border-2 border-black'>{Math.round((parseFloat(amount / 100 * intrestRate * duration) + parseFloat(amount)) / duration)}</td>
                        <td className='text-center  font-bold border-2 border-black'>{intrestRate}</td>
                    </tr>

                </table>
            </div>

        </div>

    )
}




export default Emicalculator
