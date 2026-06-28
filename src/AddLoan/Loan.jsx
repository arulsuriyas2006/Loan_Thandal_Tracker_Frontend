import { useEffect, useState } from "react";
import Add_Loan from "./Add_Loan";
import Type from "./Type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
function Loan(){
    const navigate = useNavigate();
    const checkAuth =async()=>{
        try{
            const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/user/checkauth",{withCredentials:true})
            console.log(res.data)
        }catch(err){
            if(err.response?.status==401){
            navigate("/login")
            }
        }
    }
    useEffect(()=>{
      checkAuth();
    },[])
    return(
        <div className="max-w-4xl mx-auto min-w-8xl mt-12 p-4 mb-10 lg:mt-0 lg:mb-0">
                           <button onClick={()=>navigate("/loandashboard")}className="text-blue-800  gap-1 mt-2 mb-2 cursor-pointer lg:text-lg lg:mb-4 font-bold flex items-center"> <ArrowLeft/>Back to Loans</button>
         <div className="bg-blue-100 rounded-xl p-6 shadow-md">
            <h1 className="text-sm text-gray-600">New Transaction</h1>
            <h1 className="text-3xl font-bold">Enter Details</h1>
         </div>
         <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
         {/* <Type/> */}
         <Add_Loan/>
         </div>
        </div>
    )
}
export default Loan;