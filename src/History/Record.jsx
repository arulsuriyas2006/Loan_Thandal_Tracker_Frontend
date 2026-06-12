import { BadgeCheck, Building, CircleDollarSign, HandCoins, IndianRupee, Receipt, Wallet } from "lucide-react";

function Record({record}){
    return(
     <div className="bg-white flex justify-between p-4">
      <div className="flex gap-4 items-center">
        <div className=" bg-green-200 rounded-full text-center p-4 "><HandCoins className="h-5 w-5"/></div>
        <div className="">
            <h1 className="font-bold">{record.loanId.name}</h1>
            <h1> Paid on {
              new Date(record.paidDate).toLocaleString("en-GB",{
              day:"2-digit",
              month:"short",
              year:"numeric"
              })}</h1>
        </div>
      </div>
      <div className="">
        <h1 className="flex  items-center"><IndianRupee className="h-4 w-4 items-center"/>{record.installmentamount.toLocaleString()}</h1>
        <div className=" bg-green-200 rounded-full p-1 text-center text-sm mt-1"><h1>Paid</h1></div>
      </div>
     </div>
    )
}
export default Record;