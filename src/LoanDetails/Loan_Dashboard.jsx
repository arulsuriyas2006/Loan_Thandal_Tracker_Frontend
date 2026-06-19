import { NavLink } from "react-router-dom";
import Loan_Card from "./Loan_Card";
import axios from "axios";
import { useState } from "react";
import {toast,ToastContainer} from "react-toastify"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
function Loan_Dashboard(){
    const navigate = useNavigate()
    const [LoanDetails,setLoanDetails] =useState([])
    const TotalLoan = LoanDetails.length;
    const completedLoans = LoanDetails.filter(loan=>loan.paidCount == loan.term).length
    const fetchLoanDetails = async()=>{
        try{
        const res = await axios.get("http://localhost:5000/loan/getloan",{withCredentials:true})
        await setLoanDetails(res.data.allLoanDetails);
        console.log(res.data.allLoanDetails);
        toast.success("fetch loan details successfully");
        }catch(err){
            if(err.response?.status==401){
                navigate("/login")
            }
         toast.error("error to fetch loan details");
        }
    }
    useEffect(()=>{
     fetchLoanDetails();
    },[])
    return(
    <div className="bg-gray-100 pt-1 p-4">
    <div className="">
        <h1 className="text-blue-800 font-bold">Overwiew</h1>
    {/* <div className="flex justify-between mt-6"> */}
    <div className="flex gap-3 justify-center items-center mt-3">
    <div className="bg-white p-2 rounded-lg">
      <h1 className="font-bold text-gray text-sm">Total Loans</h1>
      <h1 className="text-lg font-bold text-orange-400 flex items-center justify-center">{TotalLoan}</h1>
    </div>
    <div className="font-bold bg-white p-2 rounded-lg">
        <h1 className="text-gray text-sm">Active loans</h1>
        <h1 className="text-lg font-bold text-blue-800 flex items-center justify-center">{TotalLoan-completedLoans}</h1>
    </div>
    <div className="bg-white p-2 rounded-lg">
        <h1 className="font-bold text-gray text-sm">Closed Loans</h1>
        <h1 className="text-lg font-bold text-green-600 flex items-center justify-center">{completedLoans}</h1>
    </div>
  </div>
  <div className="flex justify-between items-center mt-3">
   <h1 className="text-2xl font-bold"> ALL Loans</h1>
   <button onClick={()=>navigate("/addloan")} className="bg-blue-800 text-white p-2 rounded-lg flex gap-1"><Plus/>Add Loan</button>
  </div>
                
            </div>
            {
             LoanDetails.length>0?(
                LoanDetails.map((loan,ind)=>(
            <NavLink to={`/details/${loan._id}`} key={loan._id}><Loan_Card loan={loan} /></NavLink>
                ))
            ):(<div className="bg-white rounded-lg p-8 mt-2 shadow-lg text-center">
                <h1 className="text-xl">Loan Details empty</h1>
                </div>
                )
            }
        <ToastContainer/>
        </div>
    )
}
export default Loan_Dashboard;