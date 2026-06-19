import { IndianRupeeIcon,Plus } from "lucide-react";
import { useState } from "react";
import {toast,ToastContainer}  from 'react-toastify';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react";
function Add_Loan(props){
    const {setLogin}=props;
    const [Loan,setLoan] =  useState({
        name:"",
        totalamount:"",
        frequency:"d",
        date:"",
        installmentamount:"",
        term:""
    })
const navigate = useNavigate();
    const handleChange =(e)=>{
        setLoan({...Loan,[e.target.name]:e.target.value})
    }
    
    const handleSubmit =async(e)=>{
        try{
        e.preventDefault();
        if(Loan.name==""){
            return toast.error("Plesae fill the name");
        }
            if(Loan.totalamount==""){
           return toast.error("Plesae fill the totalamount");
        }
            if(Loan.date==""){
            return toast.error("Plesae fill the date");
        }
            if(Loan.installmentamount==""){
            return toast.error("Plesae fill the installmentamount");
        }
            if(Loan.term==""){
            return toast.error("Plesae fill the term");
        }    
        console.log(Loan);
        console.log("hi")
        const res = await axios.post("http://localhost:5000/loan/addloan",Loan,{withCredentials:true});
        console.log(Loan);
        toast.success(res.data.message)
        setLoan(
            {
                name:"",
                totalamount:"",
                frequency:"",
                date:"",
                installmentamount:"",
                term:""
            }
        )
        setTimeout(()=>{
          navigate("/loandashboard")
        },2000)
        }catch(err){
            if(err.response?.status==401){
                navigate("/login")
            }
         toast.error(err.response.data.message)
        }
    }


    return(
     <form action="" onSubmit={handleSubmit}>
     <div className="mt-4">
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Person or Company</h1>
            <input type="text" placeholder="e.g Suriya/Company" value={Loan.name} name="name" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg mt-2 outline-none border-none"/>
        </div>
        <div className="mt-3">
            <div className="flex items-center">
            <h1 className="text-1xl font-bold">Total Amount</h1>
            <IndianRupeeIcon className="w-5 h-5 ml-2"/>
            </div>
            <input type="number" placeholder="0" value={Loan.totalamount} name="totalamount" onChange={handleChange} className=" w-full max-w-full mx-auto bg-blue-100 p-4 rounded-lg mt-2 outline-none border-none"/>
        </div>
        <div className="w-full mx-auto flex justify-between gap-3 mt-3">
            <div className="w-full">
            <h1 className="text-1xl font-bold">Frequency</h1>
            <select value={Loan.frequency} name="frequency" onChange={handleChange} className="w-full bg-blue-100 rounded-lg p-4 mt-2 outline-none border-none">
                <option value="d">Daily</option>
                <option value="w">weekly</option>
                <option value="m">Monthly</option>
                <option value="y">Yearly</option>
            </select>
            </div>
            <div className="w-full">
            <h1 className="text-1xl font-bold">Start Date</h1>
            <input type="date" value={Loan.date} name="date" onChange={handleChange} className=" w-full max-w-full bg-blue-100 rounded-lg p-4 mx-auto mt-2 outline-none border-none"/>
            </div>
        </div>
        <div className="w-full mx-auto flex justify-between gap-3 mt-3">
            <div className="w-full">
            <h1 className="text-1xl font-bold">Installment AMount</h1>
            <input type="text" placeholder="₹ 10,000" value={Loan.installmentamount} name="installmentamount" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg mt-2 outline-none border-none"/>
            </div>
            <div className="w-full">
            <h1 className="font-bold">Term(Months)</h1>
            <input type="text" placeholder="12" value={Loan.term} name="term" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg mt-2 outline-none border-none"/>
            </div>
        </div>
        <div className="border-t border-gray-300  mt-6"></div>
        <button type="submit" className="w-full bg-blue-700 p-4 cursor-pointer rounded-full mt-8 text-white font-bold flex items-center justify-center gap-2"><Plus className="h-5 w-5" strokeWidth={5}/>Add Loan</button>
     </div>
      <ToastContainer/>
     </form>
    
    )
}
export default Add_Loan;