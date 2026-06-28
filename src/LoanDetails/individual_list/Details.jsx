import { useState } from "react";
import Details_Card from "./Details_Card";
import Emi_Details from "./Emi_Details";
import Monthly_Tracking from "./Monthly_Tracking";
import { useParams } from "react-router-dom";
import axios from "axios"
import { toast,ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Backpack, SquarePen, Trash2 } from "lucide-react";
function Details(){
    const navigate =useNavigate()
    const {id} = useParams();
    const [LoanDetails,setLoanDetails]=useState([])
    const getLoan = async()=>{
        try{
         const res = await axios.get(`http://localhost:5000/loan/getloan/${id}`,{withCredentials:true});
         setLoanDetails(res.data.loanidDetails)
        }catch(err){
             if(err.response?.status==401){
             navigate("/login")       
            }
         toast.error("error in fetch loanDetails")

        }
    }

    console.log(LoanDetails);
    useEffect(()=>{
        getLoan();
    },[])
return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 mt-10 mb-5 lg:mt-0 lg:mb-0">
       <button onClick={()=>navigate("/loandashboard")}className="text-blue-800  gap-1 mt-2 mb-2 cursor-pointer lg:text-lg lg:mb-4 font-bold flex items-center"> <ArrowLeft/>Back to Loans</button>
      {/* Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Side */}
        <div className="lg:col-span-1">
          <Details_Card loan={LoanDetails} />
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2">
          <Emi_Details loan={LoanDetails} />
          <Monthly_Tracking loan={LoanDetails} id={id} />
        </div>

      </div>

      <ToastContainer />
    </div>
  );
}
export default Details;