import { useState } from "react";
import Details_Card from "./Details_Card";
import Emi_Details from "./Emi_Details";
import Monthly_Tracking from "./Monthly_Tracking";
import { useParams } from "react-router-dom";
import axios from "axios"
import { toast,ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { SquarePen, Trash2 } from "lucide-react";
function Details(){
    const {id} = useParams();
    const [LoanDetails,setLoanDetails]=useState([])
    const getLoan = async()=>{
        try{
         const res = await axios.get(`http://localhost:5000/loan/getloan/${id}`);
         setLoanDetails(res.data.loanidDetails)
        }catch(err){
         toast.error("error in fetch loanDetails")
        }
    }

    console.log(LoanDetails);
    useEffect(()=>{
        getLoan();
    },[])
    return(
        <div className="bg-gray-100 pt-0 p-4">
         <Details_Card loan ={LoanDetails}/>
         <Emi_Details loan={LoanDetails}/>
         <Monthly_Tracking loan ={LoanDetails} id={id}/>

         <ToastContainer/>
        </div>
    )
}
export default Details;