function Emi_Details(){
    return(
        <div className="flex mt-4 gap-3 ">
         <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Paid</h1>
         <h1 className="text-2xl font-bold text-green-800">10</h1>
         </div>
        
        <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Missed</h1>
         <h1 className="text-2xl font-bold text-red-800">10</h1>
         </div>
        
        <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Pending</h1>
         <h1 className="text-2xl font-bold text-blue-800">10</h1>
         </div>
        </div>
    )
}
export default Emi_Details;