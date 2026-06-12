function Emi_Details(props){
    const {loan} =props;
    return(
        <div className="flex mt-4 gap-3 ">
         <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Total</h1>
         <h1 className="text-2xl font-bold text-blue-800">{loan.term}</h1>
         </div>
        
        <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Paid</h1>
         <h1 className="text-2xl font-bold text-green-800">{loan.paidCount}</h1>
         </div>
        
        <div className="w-full bg-white p-4 rounded-lg text-center shadow-lg">
         <h1 className="text-gray-700">Pending</h1>
         <h1 className="text-2xl font-bold text-red-800">{loan.term-loan.paidCount}</h1>
         </div>
        </div>
    )
}
export default Emi_Details;