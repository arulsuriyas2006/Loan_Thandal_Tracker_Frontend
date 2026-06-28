import { useEffect, useState } from "react";
import Payment_card from "./Payment_Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Up_Payment(){
    const navigate=useNavigate()
    const [loading,setLoading] = useState(true);
    const [payments,setpayments] =useState([]);
    const[allDetails,setallDetails]=useState(false)
    const fetchpayments =async()=>{
        try{
        const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/loan/getupcomingpayments",{withCredentials:true})
        setpayments(res.data.payments)
        console.log(payments)
        }catch(err){
            if(err.response?.status==401){
             navigate("/login")       
            }
            console.log(err);
        }finally{
      setLoading(false);
    }
    }
    const seeAll =()=>{
       setallDetails(!allDetails)
    }
    useEffect(()=>{
        fetchpayments()
    },[])

      if(loading){
        return(
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600">Loading Upcoming Payments...</p>
        </div>
        )
    }
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