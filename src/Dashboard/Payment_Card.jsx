import { IndianRupee, User } from "lucide-react";

function Payment_card(){
    return(
        <div className="mt-4 max-w-full mx-auto bg-white flex justify-between p-4 rounded-lg border-r-4 border-red-400">
         <div className="bg-green-200 p-4 rounded-full">
            <User className="h-5 w-5 text-green-600" strokeWidth={2}/>
         </div>
         <div className="p-1">
            <h1 className="font-bold"> Robert Fox</h1>
            <h1> Due in 2 days .Oct 24</h1>
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
export default Payment_card;