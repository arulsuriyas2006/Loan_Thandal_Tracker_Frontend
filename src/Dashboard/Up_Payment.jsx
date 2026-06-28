import { useEffect, useState } from "react";
import Payment_card from "./payment_Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Up_Payment(){
    const navigate=useNavigate()
    const [payments,setpayments] =useState([]);
    const[allDetails,setallDetails]=useState(false)
    const fetchpayments =async()=>{
        try{
        const res = await axios.get("http://localhost:5000/loan/getupcomingpayments",{withCredentials:true})
        setpayments(res.data.payments)
        console.log(payments)
        }catch(err){
            if(err.response?.status==401){
             navigate("/login")       
            }
            console.log(err);
        }
    }
    const seeAll =()=>{
       setallDetails(!allDetails)
    }
    useEffect(()=>{
        fetchpayments()
    },[])
    return(
<div className="bg-white rounded-3xl shadow-md p-6">

  <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">
      Upcoming Payments
    </h1>

    <button
      onClick={seeAll}
      className="text-blue-600 font-semibold text-center mt-1 cursor-pointer"
    >
      {allDetails ? "Show Less" : "See All"}
    </button>
  </div>
  <div className="space-y-4">
        {   payments.length>0?(
            (allDetails?payments:payments.slice(0,4)).map(payment=>(
                <Payment_card key={payment._id} payment={payment}/>
            ))
        ):(<div className="bg-white rounded-lg p-8 mt-2 shadow-lg text-center">
                <h1 className="text-xl">No Upcoming Payments Found</h1>
            </div>
            )
        }
        </div>
        </div>
    )
}
export default Up_Payment;