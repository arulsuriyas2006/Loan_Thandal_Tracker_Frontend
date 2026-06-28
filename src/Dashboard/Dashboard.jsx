import Total_Amount from './Total_Amount'
import Loan_Type from './Loan_Type'
import Up_Payment from './Up_Payment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Dashboard(){
  const navigate =useNavigate();
  const [LoanDetails,setLoanDeatils]=useState([]);
  const fetchDetails = async()=>{
    try{
     const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/loan/getloan",{withCredentials:true})
     setLoanDeatils(res.data.allLoanDetails)
    }catch(err){
      if(err.response?.status==401){
    navigate("/login")
     }
     console.log(err)
    }
  }

  console.log(LoanDetails)
  useEffect(()=>{
    fetchDetails()
  },[])
return(
<div className="bg-gray-100 min-h-screen p-4 lg:px-8 lg:mb-0 mt-10 mb-7 lg:mt-0">

  <div className="max-w-7xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">
      Dashboard
    </h1>

    <Total_Amount loan={LoanDetails}/>

    {/* <div className="lg:grid lg:grid-cols-3 lg:gap-6 mt-6"> */}

      {/* <div className="lg:col-span-1">
        <Loan_Type/>
      </div> */}

      <div className="mt-6">
        <Up_Payment/>
      </div>

    {/* </div> */}

  </div>

</div>
)
}
export default Dashboard;