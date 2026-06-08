import { IndianRupee } from "lucide-react";

function Month(props){
    const {ln} =props;
    console.log(ln)
    const date = ln.date;
    const d= new Date(date)
    return(
        <div className="mt-3 max-w-full mx-auto bg-white flex justify-between p-4 rounded-lg shadow-lg">
        <div className="flex">
         <div className="bg-blue-100 p-4 rounded-full">
            <h1 className="font-bold text-blue-600">{d.getDate()}</h1>
         </div>
         <div className="p-1 ml-2">
            <h1 className="font-bold"> {d.toLocaleString("en-US",{month:"long"})}</h1>
            <h1 className="text-gray-700 text-sm">Due {d.toLocaleString("en-US",{month:"short"})} {d.getDate()},{d.getFullYear()}</h1>
         </div>
         </div>
         <div className="">
            <h1 className="text-blue-600 text-center flex items-center"><IndianRupee className="h-4 w-5"/>{ln.installmentamount}</h1>
            <div className="bg-red-200 rounded-full p-1 mt-1">
                <h4 className="text-red-800 text-sm">PENDING</h4>
            </div>
         </div>
        </div>
    )
}
export default Month;