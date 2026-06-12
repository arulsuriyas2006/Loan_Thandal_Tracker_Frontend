import Total_Amount from './Total_Amount'
import Loan_Type from './Loan_Type'
import Up_Payment from './Up_Payment'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Dashboard(){
  const [LoanDetails,setLoanDeatils]=useState([]);
  const fetchDetails = async()=>{
    try{
     const res = await axios.get("http://localhost:5000/loan/getloan")
     setLoanDeatils(res.data.allLoanDetails)
    }catch(err){

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