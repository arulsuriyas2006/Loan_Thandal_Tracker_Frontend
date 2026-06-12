import axios from "axios";
import Monthly_Record from "./Monthly_Record";
import { useEffect, useState } from "react";

function History_Dashboard(){
    const [history,setHistory] =useState([])

const fetchHistory=async()=>{
    try{
        console.log("fetchhistory")
       const res =await axios.get("http://localhost:5000/loan/history");
       console.log("afterfetch")
       setHistory(res.data.history)
    }catch(err){
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
        <div className="bg-gray-100 p-4 pt-0">
         <div className="mt-4">
            <h1 className="font-bold text-2xl">History</h1>
            <h1 className="text-gray-700">Your complete record of Transaction</h1>
         </div>
        {
            Object.entries(groupedHistory).map(
                ([month,records])=>(
                    <Monthly_Record key={month} month={month} records={records}/>
                )
            )
        }
        </div>
    )
}
export default History_Dashboard;