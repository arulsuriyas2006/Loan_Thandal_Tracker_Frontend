import Record from "./Record";

function Monthly_Record({month,records}){
    return(
    <div className="mt-4">
     <h1 className="text-blue-600 font-bold text-sm ">{month}</h1>
     <div className="bg-white rounded-lg p-1 mt-2 shadow-lg">
     {
        records.map((record)=>(
            <Record key={record._id} record={record}/>
        ))
     }
     </div>
    </div>
    )
}
export default Monthly_Record;