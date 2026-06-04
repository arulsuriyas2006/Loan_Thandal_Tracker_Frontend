import Record from "./Record";

function Monthly_Record(){
    return(
    <div className="mt-4">
     <h1 className="text-blue-600 font-bold text-sm ">October 2026</h1>
     <div className="bg-white rounded-lg p-1 mt-2 shadow-lg">
     <Record/>
     <Record/>
     <Record/>
     </div>
    </div>
    )
}
export default Monthly_Record;