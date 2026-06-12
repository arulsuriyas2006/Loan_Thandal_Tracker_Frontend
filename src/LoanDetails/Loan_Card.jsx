import { ClipboardEdit, Delete, DeleteIcon, Edit2, Edit2Icon, Edit3, FileEdit, FileEditIcon, FolderEdit, House, IndianRupee, LucideDelete, LucideEdit3, SquarePen, Trash, Trash2, Trash2Icon, TrashIcon, TrendingUp } from "lucide-react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
const Loan_Card=(props)=>{
    const {loan} = props;
    return(
        <div className="bg-white shadow-lg rounded-lg mt-3 cursor-pointer">
        <div className="flex justify-between p-3 items-center">
            <h1 className="font-bold text-md">{loan.name}</h1>
            { loan.term!=loan.paidCount?(<h1 className="font-bold text-sm bg-green-200 p-2 rounded-full flex gap-1">Active</h1>
        ):(<h1 className="font-bold text-sm bg-yellow-200 p-2 rounded-full flex gap-1">Completed</h1>)
        }
        </div>
        <div className="p-3 pt-0">
            <h1>Remaining Balance</h1>
            <div className="flex justify-between">
                <h1 className="flex text-3xl text-blue-600 font-bold items-center"><IndianRupee className="h-5 w-5 items-center" strokeWidth={2}/>{((loan.totalamount||0)-(loan.paidAmount||0)).toLocaleString()}</h1>
                <h1 className=" flex items-center text-sm">of<IndianRupee className="h-3 w-5"/>{(loan.totalamount||0).toLocaleString()}</h1>
            </div>
            <div className="w-full bg-gray-300 mt-3 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-in-out" style ={{width:`${((loan.paidCount/loan.term)*100)}%`}}></div>
            </div>
            <div className="flex justify-between mt-4">
                <h1 className="flex text-sm items-center font-bold"> {loan.paidCount}  months paid</h1>
                <h1 className=" flex items-center font-bold text-sm text-blue-600">{loan.term-loan.paidCount} months left</h1>
            </div>
        </div>
        <ToastContainer/>
        </div>
    )
}
export default Loan_Card;