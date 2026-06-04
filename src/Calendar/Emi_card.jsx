import { IndianRupee } from "lucide-react";

function Emi_card(){
    return(
  <div className=" mt-3">
    <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
        <div className="flex justify-between">
        <div className="">
            <h1>Home Loan</h1>
            <h1 className="flex text-sm"><IndianRupee className="h-5 w-3"/>4,500</h1>
        </div>
        <div className="">
            <div className="bg-green-100 rounded-lg p-2">
                <h1 className="text-green-600">Paid</h1>
            </div>
        </div>
        </div>
        <div className="">

        </div>
    </div>
  </div>
    )
}
export default Emi_card;