import { IndianRupee } from "lucide-react";

function Emi_card(props){
    const {installment}=props
    console.log(installment)
    return(
  <div className="mb-3">
    <div className={`bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl border-l-4 ${installment.paid?"border-green-600":"border-red-600"}`}>
        <div className="flex justify-between">
        <div className="flex gap-2 items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <h1 className="font-bold text-blue-600  ">{String(new Date(installment.dueDate).getDate()).padStart(2,"0")}</h1>
           </div>
           <div>
            <h1 className="font-bold">{installment.loanId.name}</h1>
            <h1 className="flex text-sm font-semibold text-blue-700"><IndianRupee className="h-5 w-3"/>{installment.installmentamount}</h1>
          </div>
        </div>
        <div className="">
            {installment.paid ?(<div className="bg-green-100 rounded-lg p-2">
                <h1 className="text-green-600">Paid</h1>
            </div>):(<div className="bg-green-100 rounded-lg p-2">
                <h1 className="text-red-600">Pending</h1>
            </div>)
            }
        </div>
        </div>
        <div className="">

        </div>
    </div>
  </div>
    )
}
export default Emi_card;