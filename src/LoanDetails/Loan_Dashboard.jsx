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
    const [loading,setLoading] = useState(true);
    const [LoanDetails,setLoanDetails] =useState([])
    const TotalLoan = LoanDetails.length;
    const completedLoans = LoanDetails.filter(loan=>loan.paidCount == loan.term).length
    const fetchLoanDetails = async()=>{
        try{
        const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/loan/getloan",{withCredentials:true})
        await setLoanDetails(res.data.allLoanDetails);
        console.log(res.data.allLoanDetails);
        toast.success("fetch loan details successfully");
        }catch(err){
            if(err.response?.status==401){
                navigate("/login")
            }
         toast.error("error to fetch loan details");
        }finally{
      setLoading(false);
    }
    }
    useEffect(()=>{
     fetchLoanDetails();
    },[])
    if(loading){
        return(
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600">Loading your loans...</p>
        </div>
        )
    }
    return(
    <div className="bg-gray-100 pt-1 p-4 mt-14 lg:mt-2">
    <div className="">
        <h1 className=" text-3xl lg:text-3xl font-bold">Overwiew</h1>
    {/* <div className="flex justify-between mt-6"> */}
<div className="grid grid-cols-2 gap-4 mt-5">

  <div className="bg-white rounded-3xl p-5 shadow-md border">
    <p className="text-gray-500 text-sm">Total Loans</p>
    <h1 className="text-4xl font-bold text-orange-500 mt-2">
      {TotalLoan}
    </h1>
  </div>

  <div className="bg-white rounded-3xl p-5 shadow-md border">
    <p className="text-gray-500 text-sm">Active Loans</p>
    <h1 className="text-4xl font-bold text-blue-600 mt-2">
      {TotalLoan - completedLoans}
    </h1>
  </div>

  <div className="col-span-2 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-5 shadow-lg text-white">
    <p className="text-sm">Closed Loans</p>
    <h1 className="text-5xl font-bold mt-2">
      {completedLoans}
    </h1>
    <p className="text-xs mt-2">
      Successfully Completed Loans
    </p>
  </div>

</div>
  <div className="flex justify-between items-center mt-3">
   <h1 className="text-2xl font-bold"> ALL Loans</h1>
   <button onClick={()=>navigate("/addloan")} className="bg-blue-800 text-white p-2 rounded-lg flex gap-1 cursor-pointer"><Plus/>Add Loan</button>
  </div>
                
            </div>
{
  LoanDetails.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4 mb-8">
      {LoanDetails.map((loan) => (
        <NavLink
          to={`/details/${loan._id}`}
          key={loan._id}
        >
          <Loan_Card loan={loan}/>
        </NavLink>
      ))}
    </div>
  ) : (
    <div className="bg-white rounded-xl p-10 mt-4 shadow text-center mb-8 lg:mb-0">
      <h1 className="text-xl font-semibold">
        No Loan Details Found
      </h1>
    </div>
  )
}
        <ToastContainer/>
        </div>
    )
}
export default Loan_Dashboard;