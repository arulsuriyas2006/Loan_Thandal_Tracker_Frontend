import { IndianRupee } from "lucide-react";

function Month(){
    return(
        <div className="mt-3 max-w-full mx-auto bg-white flex justify-between p-4 rounded-lg shadow-lg">
        <div className="flex">
         <div className="bg-blue-100 p-4 rounded-full">
            <h1 className="font-bold text-blue-600">08</h1>
         </div>
         <div className="p-1 ml-2">
            <h1 className="font-bold"> August</h1>
            <h1 className="text-gray-700 text-sm">Due Aug 10,2026</h1>
         </div>
         </div>
         <div className="">
            <h1 className="text-blue-600 text-center flex items-center"><IndianRupee className="h-4 w-5"/>450.00</h1>
            <div className="bg-red-200 rounded-full p-1 mt-1">
                <h4 className="text-red-800 text-sm">PENDING</h4>
            </div>
         </div>
        </div>
    )
}
export default Month;