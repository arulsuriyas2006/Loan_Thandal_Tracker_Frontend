import { NavLink } from "react-router-dom";
import Loan_Card from "./Loan_Card";
import axios from "axios";
import { useState } from "react";
import {toast,ToastContainer} from "react-toastify"
import { useEffect } from "react";
function Loan_Dashboard(){
    const [LoanDetails,setLoanDetails] =useState([])

    const fetchLoanDetails = async()=>{
        try{
        const res = await axios.get("http://localhost:5000/loan/getloan")
        await setLoanDetails(res.data.allLoanDetails);
        console.log(res.data.allLoanDetails);
        toast.success("fetch loan details successfully");
        }catch(err){
         toast.error("error to fetch loan details");
        }
    }
    useEffect(()=>{
     fetchLoanDetails();
    },[])
    return(
        <div className="bg-gray-100 pt-0 p-4">
            <div className="">
                <h1 className="text-blue-800 font-bold">Overwiew</h1>
                <h1 className="text-2xl font-bold">Active Loans</h1>
            </div>
            {
             LoanDetails.length>0?(
                LoanDetails.map((loan,ind)=>(
            <NavLink to={`/details/${loan._id}`} key={loan._id}><Loan_Card loan={loan} /></NavLink>
                ))
            ):(
                <h1>Loan Details empty</h1>
                )
            }
        <ToastContainer/>
        </div>
    )
}
export default Loan_Dashboard;