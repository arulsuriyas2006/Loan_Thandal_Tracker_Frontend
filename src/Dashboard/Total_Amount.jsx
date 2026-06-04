import { IndianRupee } from "lucide-react";

function Total_Amount(){
 return(
<div className="bg-white mt-4 max-w-full mx-auto  rounded-3xl shadow-lg p-6">
  <div className="flex justify-between items-center">
   <div className="">
   <h1 className="">Total Remaining</h1>
   <h1 className="text-lg font-bold text-blue-700 flex items-center"><IndianRupee className="h-4 w-5"/>12,450.00</h1>
  </div>
  <div className="bg-white-300 p-4 rounded-full border-4 border-blue-800">
    <h1 className="font-bold">85%</h1>
  </div>
  </div>
  <div className="flex justify-between mt-10">
    <div className="">
        <h1>Total Loans</h1>
        <h1 className="text-lg font-bold text-gray-700 flex items-center"><IndianRupee className="h-4 w-5"/>18,000</h1>
    </div>
    <div className="">
        <h1>Total Paid</h1>
        <h1 className="text-lg font-bold text-green-700 flex items-center"><IndianRupee className="h-4 w-5"/>5,550</h1>
    </div>
  </div>
</div>
 )
}
export default Total_Amount;