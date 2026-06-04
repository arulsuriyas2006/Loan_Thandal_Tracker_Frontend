import { useState } from "react";

function Type(){
    const[type,setType] = useState("loan")
    return(
        <div className="mt-4">
            <h1 className="font-bold text-xl">Loan Type</h1>
        <div className="flex bg-blue-100 rounded-full p-2 mt-4">
         <div onClick={()=>setType("loan")}className={`${type=="loan"?"bg-white rounded-full":""} w-full p-4`}>
            <h1 className="text-center text-blue-800">Loan</h1>
         </div>
         <div onClick={()=>setType("thandal")}className={`${type=="thandal"?"bg-white rounded-full":""} w-full p-4`}>
            <h1 className="text-center">Thandal</h1>
         </div>
         </div>
        </div>
    )
}
export default Type;