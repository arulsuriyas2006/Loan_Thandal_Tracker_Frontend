import { ClipboardEdit, Delete, DeleteIcon, Edit2, Edit2Icon, Edit3, FileEdit, FileEditIcon, FolderEdit, House, IndianRupee, LucideDelete, LucideEdit3, SquarePen, Trash, Trash2, Trash2Icon, TrashIcon, TrendingUp } from "lucide-react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
const Loan_Card=(props)=>{
    const {loan} = props;
    return(
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl h-full p-2">
        <div className="flex justify-between p-3 items-center">
            <h1 className="font-bold text-md">{loan.name}</h1>
            { loan.term!=loan.paidCount?(<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
        ):(<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>)
        }
        </div>
        <div className="p-3 pt-0">
            <h1>Remaining Balance</h1>
            <div className="flex justify-between">
                <h1 className="flex text-3xl text-blue-600 font-bold items-center"><IndianRupee className="h-5 w-5 items-center" strokeWidth={2}/>{((loan.totalamount||0)-(loan.paidAmount||0)).toLocaleString()}</h1>
                <h1 className=" flex items-center text-sm">of<IndianRupee className="h-3 w-5"/>{(loan.totalamount||0).toLocaleString()}</h1>
            </div>
            <div className="w-full bg-gray-200 mt-3 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style ={{width:`${((loan.paidCount/loan.term)*100)}%`}}></div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
                <span className="font-medium text-green-600"> {loan.paidCount} paid</span>
                <span className="font-medium textt-red-500">{loan.term-loan.paidCount} left</span>
            </div>
        </div>
        <ToastContainer/>
        </div>
    )
}
export default Loan_Card;