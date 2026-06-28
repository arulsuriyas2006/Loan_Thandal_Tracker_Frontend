import { toast,ToastContainer } from "react-toastify"
import { ArrowLeft, Cross, CrosshairIcon, CrossIcon, IndianRupeeIcon,Plus, SquarePen } from "lucide-react";
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
        const res = await axios.get(`https://loan-thandal-tracker-backend.onrender.com/loan/getloan/${id}`,{withCredentials:true})
        console.log("edit")
        // console.log(res.data.loanidDetails);
        const loanData =res.data.loanidDetails;
        await setLoan({...loanData,date:loanData.date?loanData.date.split("T")[0]:""});
        console.log(res.data.loanidDetails);
        // toast.success("fetch loan details successfully");
        }catch(err){
            if(err.response?.status==401){
             navigate("/")       
            }
         toast.error("error to fetch loan details");
        }
}
    const handleEdit= async(e)=>{
        try{
        e.preventDefault();
        const res = await axios.put(`https://loan-thandal-tracker-backend.onrender.com/loan/editloan/${id}`,Loan,{withCredentials:true})
        toast.success("successfully updated")
        setTimeout(() => {
         navigate(`/details/${id}`)
        }, 2000);
        }catch(err){
            if(err.response?.status==401){
             navigate("/login")       
            }
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
<div className="max-w-4xl mx-auto mt-12 p-4 mb-10 lg:mt-0 lg:p-0 lg:mb-0">

    <button
        onClick={()=>navigate(`/details/${id}`)}
        className="text-blue-800 gap-1 mt-2 mb-2 cursor-pointer lg:text-lg lg:mb-4 font-bold flex items-center"
    >
        <ArrowLeft size={20}/>
        Back to Loans
    </button>

    <div className="bg-blue-100 rounded-xl p-6 shadow-md">
        <h1 className="text-sm text-gray-600">
            Edit Transaction
        </h1>

        <h1 className="text-3xl font-bold">
            Update Details
        </h1>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

        {/* <Type/> */}

        <form onSubmit={handleEdit}>

            <div className="mt-4">

                {/* Name */}
                <div className="mt-3">
                    <h1 className="font-bold">
                        Person or Company
                    </h1>

                    <input
                        type="text"
                        placeholder="e.g Suriya/Company"
                        value={Loan.name}
                        name="name"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                        outline-none"
                    />
                </div>

                {/* Amount */}
                <div className="mt-3">
                    <div className="flex items-center">
                        <h1 className="font-bold">
                            Total Amount
                        </h1>

                        <IndianRupeeIcon className="w-5 h-5 ml-2"/>
                    </div>

                    <input
                        type="number"
                        value={Loan.totalamount}
                        name="totalamount"
                        onChange={handleChange}
                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                        outline-none"
                    />
                </div>

                {/* Frequency + Date */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">

                    <div>
                        <h1 className="font-bold">
                            Frequency
                        </h1>

                        <select
                            value={Loan.frequency}
                            name="frequency"
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            rounded-xl
                            bg-gray-50
                            border
                            border-gray-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            outline-none"
                        >
                            <option value="d">Daily</option>
                            <option value="w">Weekly</option>
                            <option value="m">Monthly</option>
                            <option value="y">Yearly</option>
                        </select>
                    </div>

                    <div>
                        <h1 className="font-bold">
                            Start Date
                        </h1>

                        <input
                            type="date"
                            value={Loan.date}
                            name="date"
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            rounded-xl
                            bg-gray-50
                            border
                            border-gray-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            outline-none"
                        />
                    </div>

                </div>

                {/* Installment + Term */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">

                    <div>
                        <h1 className="font-bold">
                            Installment Amount
                        </h1>

                        <input
                            type="text"
                            placeholder="₹ 10,000"
                            value={Loan.installmentamount}
                            name="installmentamount"
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            rounded-xl
                            bg-gray-50
                            border
                            border-gray-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            outline-none"
                        />
                    </div>

                    <div>
                        <h1 className="font-bold">
                            Term (Months)
                        </h1>

                        <input
                            type="text"
                            placeholder="12"
                            value={Loan.term}
                            name="term"
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            rounded-xl
                            bg-gray-50
                            border
                            border-gray-200
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            outline-none"
                        />
                    </div>

                </div>

                <div className="border-t border-gray-300 mt-6"/>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">

                    <button
                        type="submit"
                        className="
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        transition
                        lg:p-4
                        p-2
                        rounded-xl
                        text-white
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        cursor-pointer
                        shadow-md"
                    >
                        <SquarePen
                            className="h-5 w-5"
                            strokeWidth={3}
                        />

                        Update Loan
                    </button>

                    <button
                        type="button"
                        onClick={()=>
                            navigate(`/details/${id}`)
                        }
                        className="
                        w-full
                        bg-red-500
                        hover:bg-red-600
                        transition
                        p-4
                        rounded-xl
                        text-white
                        font-semibold
                        shadow-md
                        cursor-pointer"
                    >
                        Cancel
                    </button>

                </div>

            </div>

            <ToastContainer/>

        </form>

    </div>

</div>
)
}

export default Edit_Loan;