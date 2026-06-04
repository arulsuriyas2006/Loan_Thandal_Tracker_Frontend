import Add_Loan from "./Add_Loan";
import Type from "./Type";

function Loan(){
    return(
        <div className="max-w-full mx-auto bg-gray-100 p-4">
         <div className="bg-blue-100 rounded-lg p-4 shadow-md">
            <h1>New Transaction</h1>
            <h1 className="text-3xl font-bold">Enter Details</h1>
         </div>
         <Type/>
         <Add_Loan/>
        </div>
    )
}
export default Loan;