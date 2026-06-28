import Record from "./Record";

function Monthly_Record({month,records}){
    return(
    <div className="mt-4">
     <h1 className="text-blue-600 font-bold text-sm uppercase">{month}</h1>
     <div className="bg-white rounded-xl mt-2 shadow-lg overflow-hidden">
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