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
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-5">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
  <h1 className="text-2xl font-bold">
    Monthly Tracking
  </h1>

  <select
    className="border border-gray-300 bg-white rounded-xl px-4 py-2 mt-3 md:mt-0"
    value={filter}
    onChange={(e)=>setFilter(e.target.value)}
  >
    <option value="all">All Installments</option>
    <option value="paid">Paid</option>
    <option value="unpaid">Pending</option>
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