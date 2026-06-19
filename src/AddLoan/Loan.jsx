import { useEffect, useState } from "react";
import Add_Loan from "./Add_Loan";
import Type from "./Type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Loan(){
    const navigate = useNavigate();
    const checkAuth =async()=>{
        try{
            const res = await axios.get("http://localhost:5000/user/checkauth",{withCredentials:true})
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
        <div className="max-w-full mx-auto bg-gray-100 p-4">
         <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <h1>New Transaction</h1>
            <h1 className="text-3xl font-bold">Enter Details</h1>
         </div>
         <Type/>
         <Add_Loan/>
        </div>
    )
}
export default Loan;