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
     const res = await axios.get("http://localhost:5000/loan/getloan",{withCredentials:true})
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
      <div className=' bg-gray-100 mb-4'>
      <Total_Amount loan={LoanDetails}/>
      <Loan_Type/>
      <Up_Payment/>
    </div>
    )
}
export default Dashboard;