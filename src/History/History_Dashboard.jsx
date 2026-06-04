import Monthly_Record from "./Monthly_Record";

function History_Dashboard(){
    return(
        <div className="bg-gray-100 p-4 pt-0">
         <div className="mt-4">
            <h1 className="font-bold text-2xl">History</h1>
            <h1 className="text-gray-700">Your complete record of Transaction</h1>
         </div>
         <Monthly_Record/>
         <Monthly_Record/>
         <Monthly_Record/>
        </div>
    )
}
export default History_Dashboard;