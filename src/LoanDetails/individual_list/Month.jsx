import { BookCheck, IndianRupee } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Month(props){
    const navigate = useNavigate()
    const {ln} =props;
    const [showModal,setshowModal]=useState(false)
    console.log(ln)
    const date = ln.dueDate;
    const d= new Date(date)

    const markPaid =async()=>{
        try{
            const res = await axios.put(`https://loan-thandal-tracker-backend.onrender.com/loan/markpaid/${ln._id}`,{},{withCredentials:true});
            setshowModal(false);
            toast.success("successfully updated")
            setTimeout(()=>{
                navigate(`/details/${ln.loanId}`)
            },2000)
        }catch(err){
            if(err.response?.status==401){
                navigate("/login")
            }
            
          toast.error("error in mark as paid")
        }
    }
    return(
        <div className={`mt-3 bg-white flex justify-between items-center p-4 rounded-xl shadow-lg border-l-[6px] lg:px-8 lg:py-6 ${ln.paid?"border-green-400":"border-yellow-400"}`}>
        <div className="flex items-center lg:gap-4 lg:flex-1">
         <div className="bg-blue-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
            <h1 className="font-bold text-blue-600  ">{String(d.getDate()).padStart(2,"0")}</h1>
         </div>
         <div className="p-1 ml-2">
            <div className="flex lg:gap-3 gap-1 items-center">
                 <h1 className="font-bold"> {d.toLocaleString("en-US",{month:"short"})}</h1>
                <h1 className="text-blue-600 text-center flex items-center font-bold "><IndianRupee className="h-4 w-5"/>{(ln.installmentamount||0).toLocaleString()}</h1>
            </div>
            <h1 className="text-gray-700 text-sm whitespace-nowrap">Due {d.toLocaleString("en-US",{month:"short"})} {d.getDate()},{d.getFullYear()}</h1>
            
         </div>
         </div>
         <div className="flex flex-col items-center lg:items-end justify-center lg:w-60">
            {/* <h1 className="text-blue-600 text-center flex items-center"><IndianRupee className="h-4 w-5"/>{ln.installmentamount}</h1> */}
            <div className="p-1 mt-1">
                {ln.paid?(<h1 className="font-bold bg-green-300 border border-green-700 text-sm rounded-lg px-4 whitespace-nowrap text-center py-3">Paid ✓</h1>):(<button className="font-bold bg-blue-700 text-white rounded-lg px-3 py-2  lg:px-6 lg:py-3 lg:text-base transition hover:bg-blue-800" onClick={()=>{
                    setshowModal(true)
                }}> Mark as Paid</button>)}
            </div>
            {
                 ln.paid && ln.paidDate && (
                <p className="text-xs text-green-600 text-center mt-1">
                Paid on {
                new Date(ln.paidDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })
                 }
            </p>
        )
        }
         </div>
    {showModal &&(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-1">Mark Installment as Paid?</h2>
                <p>Are you sure you have paid this installment ?</p>
                <div className="py-2 pb-0 mt-1 flex justify-between gap-2 w-full">
                 <button className="cursor-pointer w-full px-4 py-2 bg-gray-300 rounded" onClick={()=>{setshowModal(false)}}>Cancel</button>
                 <button className=" cursor-pointer w-full px-4 py-2 bg-red-500 rounded text-white" onClick={markPaid}>Confirm</button>
                </div>
            </div>
        </div>
    )} <ToastContainer/>
        </div>
    )
}
export default Month;