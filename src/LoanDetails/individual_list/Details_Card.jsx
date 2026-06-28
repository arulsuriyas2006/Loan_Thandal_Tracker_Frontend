import { House, IndianRupee, SquarePen, Trash2, TrendingUp } from "lucide-react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
function Details_Card(props){
    const {loan} = props;
    const [showModal,setshowModal] = useState(false);
    const [selectedId,setselectedId]=useState(null);
    const navigate = useNavigate();

    const EditLoan =async(id)=>{
     navigate(`/editloan/${id}`)
    }
    const deleteLoan =async(id)=>{
        try{
        const res =await axios.delete(`http://localhost:5000/loan/deleteloan/${id}`,{withCredentials:true});
        console.log("deleted")
        toast.success("successfully deleted")

        setTimeout(()=>{
        navigate("/loandashboard")
        },2000)

        }catch(err){
            if(err.response?.status==401){
             navigate("/login")       
            }
            console.log(err)
        toast.error(err)
        }
 }
const progress =
loan.term > 0
? (loan.paidCount / loan.term) * 100
: 0;

 const Askdelete=(id)=>{
    console.log("askdelete")
     setshowModal(true);
   setselectedId(id);
 }

    return(
        <div className="bg-white shadow-xl rounded-2xl p-2 sticky top-4">
        <div className="flex justify-between p-3 items-center">
            <h1 className="font-bold text-md ">{loan.name}</h1>
            {/* <h1 className=" text-sm bg-green-100 p-2 rounded-full flex gap-1"><TrendingUp className="h-5 w-5 text-green-600"/>On Track</h1> */}
                <div className="flex mt-2 justify-end gap-1">
                <button className=" cursor-pointer text-sm bg-green-200 p-2 rounded-full flex font-bold items-center" onClick={()=>EditLoan(loan._id)}><SquarePen className="mr-1" size={16}/>Edit</button>
                <button className=" cursor-pointer text-sm font-bold bg-red-400 p-2 rounded-full flex items-center" onClick={()=>Askdelete(loan._id)}><Trash2 className="mr-1" size={16}/>Delete</button>
            </div>
        </div>
         <div className="p-3 pt-0">
            <h1 className="text-gray-700">Remaining Balance</h1>
            <div className="flex justify-between">
                <h1 className="flex text-3xl text-blue-600 font-bold items-center justify-center"><IndianRupee className="h-5 w-5" strokeWidth={2}/>{((loan.totalamount||0)-(loan.paidAmount||0)).toLocaleString()}</h1>
            </div>
  <div className="mt-4">
  <div className="flex justify-between text-sm mb-1">
    <span>Loan Progress</span>
    <span>{Math.round(progress)}%</span>
  </div>

  <div className="w-full bg-gray-200 rounded-full h-3">
    <div
      className="bg-green-500 h-3 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>

            <div className="flex justify-between mt-4">
                <div className="">
                <h1 className="flex text-sm text-gray-700 items-center"> Total Amount</h1>
                <h1 className="flex text-black-100 font-bold items-center"><IndianRupee className="h-4 w-5 items-center" strokeWidth={2}/>{(loan.totalamount||0).toLocaleString()}</h1>
                </div>
                <div className="items-center">
                <h1 className="text-sm text-gray-700">Duration</h1>
                <h1 className=" flex items-center font-bold text-black-600">{loan.term} Months</h1>
                </div>
            </div>
        </div>
    {showModal &&(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-1">Delete Loan?</h2>
                <p>Are you sure want to delete this loan?</p>
                <div className="py-2 pb-0 mt-1 flex justify-between gap-2 w-full">
                 <button className="cursor-pointer w-full px-4 py-2 bg-gray-300 rounded" onClick={()=>{setshowModal(false)}}>Cancel</button>
                 <button className=" cursor-pointer w-full px-4 py-2 bg-red-500 rounded text-white" onClick={()=>{
                    deleteLoan(selectedId);
                    setshowModal(false);
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )}

        <ToastContainer/>
        </div>
    )
}
export default Details_Card;