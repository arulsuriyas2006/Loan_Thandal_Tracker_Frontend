import { toast,ToastContainer } from "react-toastify"
import { Cross, CrosshairIcon, CrossIcon, IndianRupeeIcon,Plus, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import Type from "./Type";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Edit_Loan=()=>{
    const {id} =useParams();
    const [Loan,setLoan]=useState({
        name:"",
        totalamount:"",
        frequency:"",
        date:"",
        installmentamount:"",
        term:""
    })
    const navigate =useNavigate();

    const fetchLoan = async()=>{
        try{
        console.log("hi")
        const res = await axios.get(`http://localhost:5000/loan/getloan/${id}`)
        console.log("edit")
        // console.log(res.data.loanidDetails);
        const loanData =res.data.loanidDetails;
        await setLoan({...loanData,date:loanData.date?loanData.date.split("T")[0]:""});
        console.log(res.data.loanidDetails);
        // toast.success("fetch loan details successfully");
        }catch(err){
         toast.error("error to fetch loan details");
        }
}
    const handleEdit= async(e)=>{
        try{
        e.preventDefault();
        const res = await axios.put(`http://localhost:5000/loan/editloan/${id}`,Loan)
        toast.success("successfully updated")
        setTimeout(() => {
         navigate("/loandashboard")
        }, 2000);
        }catch(err){
        toast.error("error to update")
        }
    }
    const handleChange =(e)=>{
        setLoan({...Loan,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        fetchLoan();
    },[id])
    return(
    <div className="max-w-full mx-auto bg-gray-100 p-4">
         <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <h1>Edit Transaction</h1>
            <h1 className="text-3xl font-bold">Enter Details</h1>
         </div>
         <Type/>
  <form action="" onSubmit={handleEdit}>
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
            <input type="date" value={Loan.date} name="date" onChange={handleChange} className=" w-full bg-blue-100 rounded-lg p-4 mt-2 outline-none border-none"/>
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
        <div className="flex gap-1">
        <button type="submit" className="w-full bg-blue-700 p-4 cursor-pointer rounded-full mt-8 text-white font-bold flex items-center justify-center gap-2"><SquarePen className="h-5 w-5" strokeWidth={3}/>Edit Loan</button>
        <button type="submit" className="w-full bg-red-700 p-4 cursor-pointer rounded-full mt-8 text-white font-bold flex items-center justify-center gap-2"onClick={()=>{navigate("/loandashboard")}}>Cancel</button>
     </div>
     </div>
      <ToastContainer/>
     </form>
     </div>      
    )
}

export default Edit_Loan;