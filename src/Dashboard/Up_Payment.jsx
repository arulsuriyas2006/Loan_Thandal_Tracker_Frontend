import { useEffect, useState } from "react";
import Payment_card from "./payment_Card";
import axios from "axios";

function Up_Payment(){
    const [payments,setpayments] =useState([]);
    const[allDetails,setallDetails]=useState(false)
    const fetchpayments =async()=>{
        try{
        const res = await axios.get("http://localhost:5000/loan/getupcomingpayments")
        setpayments(res.data.payments)
        console.log(payments)
        }catch(err){
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
        <div className="mt-4">
         <div className="flex justify-between">
            <h1 className="font-bold">Upcoming Payements</h1>
            <h1 className="font-bold text-blue-700" onClick={seeAll}>{allDetails?"show less":"See All"}</h1>
         </div>
        {
            (allDetails?payments:payments.slice(0,4)).map(payment=>(
                <Payment_card key={payment._id} payment={payment}/>
            ))
        }
        </div>
    )
}
export default Up_Payment;