import { IndianRupee } from "lucide-react";

function Total_Amount(props){
  const {loan}=props;
  const totalamount = loan.reduce((sum,item)=>sum+item.totalamount,0)
  const totalpaidamount = loan.reduce((sum,item)=>sum+item.paidAmount,0)
  const remaining = totalamount-totalpaidamount
  const percentage = totalamount>0?(totalpaidamount/totalamount)*100:0;
 return(
<div className="bg-white mt-4 max-w-full mx-auto  rounded-3xl shadow-lg p-6">
  <div className="flex justify-between items-center">
   <div className="">
   <h1 className="text-gray text-sm">Total Remaining</h1>
   <h1 className="text-lg font-bold text-red-600 flex items-center"><IndianRupee className="h-4 w-5"/>{remaining.toLocaleString()}</h1>
  </div>
<div
  className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700"
  style={{
    background: `conic-gradient(
      #2563eb ${percentage * 3.6}deg,
      #e5e7eb 0deg
    )`
  }}
>
  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
    <h1 className="font-bold text-sm">
      {Math.round(percentage)}%
    </h1>
  </div>
</div>
  </div>
  <div className="flex justify-between mt-6">
    <div className="">
        <h1 className="text-gray text-sm">Total Amount</h1>
        <h1 className="text-lg font-bold text-blue-800 flex items-center"><IndianRupee className="h-4 w-5"/>{totalamount.toLocaleString()}</h1>
    </div>
    <div className="">
        <h1 className="text-gray text-sm">Total Paid</h1>
        <h1 className="text-lg font-bold text-green-600 flex items-center"><IndianRupee className="h-4 w-5"/>{totalpaidamount.toLocaleString()}</h1>
    </div>
  </div>
</div>
 )
}
export default Total_Amount;