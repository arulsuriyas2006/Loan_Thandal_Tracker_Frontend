import { useState } from "react";

function Type(){
    const[type,setType] = useState("loan")
    return(
        <div className="mt-4">
            <h1 className="font-bold text-xl">Loan Type</h1>
        <div className="flex bg-blue-100 rounded-xl p-1 mt-4">
         <div onClick={()=>setType("loan")}className={`${type=="loan"?"bg-white shadow text-blue-600 font-semibold":""} cursor-pointer w-full py-3 rounded-xl transition-all`}>
            <h1 className="text-center text-blue-800">Loan</h1>
         </div>
         <div onClick={()=>setType("thandal")}className={`${type=="thandal"?"bg-white shadow text-blue-600 font-semibold":""} cursor-pointer w-full py-3 rounded-xl transition-all`}>
            <h1 className="text-center text-blue-800">Thandal</h1>
         </div>
         </div>
        </div>
    )
}
export default Type;