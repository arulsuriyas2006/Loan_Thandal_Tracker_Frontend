import axios from "axios";
import Monthly_Record from "./Monthly_Record";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function History_Dashboard(){
    const navigate =useNavigate()
    const [history,setHistory] =useState([])

const fetchHistory=async()=>{
    try{
        console.log("fetchhistory")
       const res =await axios.get("https://loan-thandal-tracker-backend.onrender.com/loan/history",{withCredentials:true});
       console.log("afterfetch")
       setHistory(res.data.history)
    }catch(err){
     if(err.response?.status==401){
      navigate("/login")
     }
      console.log(err);
    }
}

const groupedHistory = history.reduce((acc,item)=>{
    const month = new Date(item.paidDate).toLocaleString("en-US",{month:"long",year:"numeric"})
    if(!acc[month]){
        acc[month]=[];
    }
    acc[month].push(item)
    return acc;
},{})
  console.log(history);
  console.log(groupedHistory)
useEffect(()=>{
    fetchHistory();
},[])
    return(
        <div className="bg-gray-100 min-h-screen p-4 lg:p-1 mt-6 lg:mt-0">
            <div className="max-w-5xl mx-auto">
         <div className="mt-4 mb-6">
            <h1 className="font-bold text-3xl lg:text-3xl">History</h1>
            <h1 className="text-gray-700">Your complete record of Transaction</h1>
         </div>
        {   history.length>0?(
            Object.entries(groupedHistory).map(
                ([month,records])=>(
                    <Monthly_Record key={month} month={month} records={records}/>
                )
            )
        ):(<div className="bg-white rounded-xl p-12 mt-2 shadow-lg text-center">
                <h1 className="text-xl font-semibold">No Transaction History</h1>
                </div>
                )
        }
        </div>
        </div>
    )
}
export default History_Dashboard;