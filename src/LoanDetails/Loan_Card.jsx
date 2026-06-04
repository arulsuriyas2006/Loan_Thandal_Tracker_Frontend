import { House, IndianRupee } from "lucide-react";

function Loan_Card(){
    return(
        <div className="bg-white shadow-lg rounded-lg mt-3 cursor-pointer">
        <div className="flex justify-between p-3 items-center">
            <h1 className="font-bold text-md">Home Loan</h1>
            <h1 className=" text-sm bg-green-100 p-2 rounded-full">On Track</h1>
        </div>
        <div className="p-3 pt-0">
            <h1>Remaining Balance</h1>
            <div className="flex justify-between">
                <h1 className="flex text-3xl text-blue-600 font-bold items-center"><IndianRupee className="h-5 w-5 items-center" strokeWidth={2}/> 12,450</h1>
                <h1 className=" flex items-center text-sm">of<IndianRupee className="h-3 w-5"/>25,000</h1>
            </div>
            <div className="w-full bg-gray-300 mt-3 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full w-1/2"></div>
            </div>
            <div className="flex justify-between mt-4">
                <h1 className="flex text-sm items-center"> 50% paid</h1>
                <h1 className=" flex items-center font-bold text-sm text-blue-600">12 months left</h1>
            </div>
        </div>
        </div>
    )
}
export default Loan_Card;