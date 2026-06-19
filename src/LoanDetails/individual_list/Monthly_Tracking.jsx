import { Filter, SlidersHorizontal } from "lucide-react";
import Month from "./Month";
import { useState } from "react";
import { useEffect } from "react";
import {toast} from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Monthly_Tracking(props){
  const {loan,id} = props;
  const navigate = useNavigate()
  const [filter,setFilter]=useState("all")
  console.log(id)
      const [InstallmentDetails,setInstallmentDetails]=useState([])
      const getInstallments = async()=>{
          try{
            console.log("installments")
           const res = await axios.get(`http://localhost:5000/loan/getinstallments/${loan._id}`,{withCredentials:true});
           console.log("after get details")
           setInstallmentDetails(res.data.installments)
          }catch(err){
            if(err.response?.status==401){
             navigate("/login")       
            }
            console.log(err)
           toast.error("error in fetch loanDetails")
          }
      }
      console.log(InstallmentDetails);
      useEffect(()=>{
        if(loan._id){
          getInstallments();
        }
      },[loan])
  console.log(InstallmentDetails)

   const filteredInstallments = InstallmentDetails.filter(item=>{
    if(filter=="paid"){
      return item.paid
    }
    if(filter=="unpaid"){
      return !item.paid;
    }
    return true;
   })
    return(
        <div className="mt-4">
          <div className="flex justify-between">
            <h1 className="font-bold">Monthly Tracking</h1>
            {/* <h1 className="text-blue-700 flex items-center gap-1">Filter<SlidersHorizontal className="h-4 w-4"/></h1> */}
             <select className="border border-2 border-blue-600 rounded p-1" value={filter} onChange={(e)=>setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
             </select>
          </div>
        {
          filteredInstallments.map((item)=>(
            <Month key={item._id} ln={item}/>
          ))
        }

        </div>
    )
}
export default Monthly_Tracking;