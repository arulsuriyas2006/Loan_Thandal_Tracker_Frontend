import { Building, IndianRupee } from "lucide-react";

function Record(){
    return(
     <div className="bg-white flex justify-between p-4">
      <div className="flex gap-4 items-center">
        <div className=" bg-green-200 rounded-full text-center p-4 "><Building className="h-5 w-5"/></div>
        <div className="">
            <h1>Home Loan</h1>
            <h1>Oct 22,2026</h1>
        </div>
      </div>
      <div className="">
        <h1 className="flex  items-center"><IndianRupee className="h-4 w-4 items-center"/>14,000</h1>
        <div className=" bg-green-200 rounded-full p-1 text-center text-sm mt-1"><h1>Paid</h1></div>
      </div>
     </div>
    )
}
export default Record;