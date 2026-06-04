import { House, IndianRupee, TrendingUp } from "lucide-react";

function Details_Card(){
    return(
        <div className="bg-white shadow-lg rounded-lg mt-3">
        <div className="flex justify-between p-3 items-center">
            <h1 className="font-bold text-md ">Home Loan</h1>
            <h1 className=" text-sm bg-green-100 p-2 rounded-full flex gap-1"><TrendingUp className="h-5 w-5 text-green-600"/>On Track</h1>
        </div>
         <div className="p-3 pt-0">
            <h1 className="text-gray-700">Remaining Balance</h1>
            <div className="flex justify-between">
                <h1 className="flex text-3xl text-blue-600 font-bold items-center"><IndianRupee className="h-5 w-5 items-center" strokeWidth={2}/> 12,450</h1>
            </div>


            <div className="flex justify-between mt-4">
                <div className="">
                <h1 className="flex text-sm text-gray-700 items-center"> Total Amount</h1>
                <h1 className="flex text-black-100 font-bold items-center"><IndianRupee className="h-5 w-5 items-center" strokeWidth={2}/> 12,450</h1>
                </div>
                <div className="items-center">
                <h1 className="text-sm text-gray-700">Duration</h1>
                <h1 className=" flex items-center font-bold text-black-600">12 Months</h1>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Details_Card;