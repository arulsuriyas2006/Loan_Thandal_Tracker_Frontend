import { BadgeCheck, Building, CircleDollarSign, HandCoins, IndianRupee, Receipt, Wallet } from "lucide-react";

function Record({record}){
    return(
     <div className=" flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gary-50 transition">
      <div className="flex gap-4 items-center">
        <div className=" bg-green-200 rounded-full p-4 "><HandCoins className="h-5 w-5 text-green-700"/></div>
        <div className="">
            <h1 className="font-bold">{record.loanId.name}</h1>
            <h1 className="text-gary-600 text-sm"> Paid on {
              new Date(record.paidDate).toLocaleString("en-GB",{
              day:"2-digit",
              month:"short",
              year:"numeric"
              })}</h1>
        </div>
      </div>
      <div className="text-right">
      <h1 className="flex  items-center justify-end font-bold text-green-700"><IndianRupee className="h-4 w-4" />{record.installmentamount.toLocaleString()}</h1>
        <div className=" bg-green-100 text-green-700 rounded-full px-3 py-1 tex-xs mt-1 inline-block"><h1>Paid</h1></div>
      </div>
     </div>
    )
}
export default Record;