import { useState } from "react";

function Loan_Type(){
    const [type,setType]=useState("loan")
    return(
        <div className="bg-white flex justify-between rounded-2xl shadow-lg p-4">
         <div onClick={()=>setType("loan")}className={` w-full text-center ${type=="loan"?"bg-white":""} p-3 rounded-lg`}>
            <h1 className="font-bold text-blue-800">Active Loans</h1>
         </div>
        <div onClick={()=>setType("thandal")}className={`${type=="thandal"?"bg-white":""} w-full text-center p-3 rounded-lg`}>
            <h1 className="font-bold text-blue-800">Thandal Groups</h1>
         </div>
        </div>
    )
}
export default Loan_Type;