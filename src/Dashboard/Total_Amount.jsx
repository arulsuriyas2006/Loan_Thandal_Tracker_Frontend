import { IndianRupee } from "lucide-react";

function Total_Amount(props){
  const {loan}=props;
  const totalamount = loan.reduce((sum,item)=>sum+item.totalamount,0)
  const totalpaidamount = loan.reduce((sum,item)=>sum+item.paidAmount,0)
  const remaining = totalamount-totalpaidamount
  const percentage = totalamount>0?(totalpaidamount/totalamount)*100:0;
return (
  <div className="bg-white rounded-3xl shadow-md p-4 lg:p-8">

    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 items-center">

      {/* Left Side */}
      <div className="grid grid-cols-2  gap-3 lg:gap-4">

        {/* Remaining */}
        <div className="bg-red-50 rounded-2xl p-3 lg:p-5 min-w-[120px]">
          <h2 className="text-gray-500 text-xs lg:text-sm">
            Total Remaining
          </h2>

          <h1 className="text-lg lg:text-3xl font-bold text-red-600 mt-2 flex items-center">
            <IndianRupee className="w-5 h-5" />
            {remaining.toLocaleString()}
          </h1>
        </div>

        {/* Paid */}
        <div className="bg-green-50 rounded-2xl p-3 lg:p-5 min-w-[120px]">
          <h2 className="text-gray-500 text-xs lg:text-sm">
            Total Paid
          </h2>

          <h1 className="text-lg lg:text-3xl font-bold text-green-600 mt-2 flex items-center">
            <IndianRupee className="w-5 h-5" />
            {totalpaidamount.toLocaleString()}
          </h1>
        </div>

        {/* Total Amount */}
        <div className="bg-blue-50 rounded-2xl p-3 lg:p-5 col-span-2">
          <h2 className="text-gray-500 text-sm">
            Total Loan Amount
          </h2>

          <h1 className="text-xl lg:text-3xl font-bold text-blue-700 mt-2 flex items-center">
            <IndianRupee className="w-5 h-5" />
            {totalamount.toLocaleString()}
          </h1>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex justify-center">

        <div className="text-center">

          <div
            className="w-28 h-28 lg:w-52 lg:h-52 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                #2563eb ${percentage * 3.6}deg,
                #e5e7eb 0deg
              )`
            }}
          >
            <div className="w-20 h-20 lg:w-40 lg:h-40 bg-white rounded-full flex flex-col items-center justify-center shadow">

              <h1 className="text-xl lg:text-5xl font-bold">
                {Math.round(percentage)}%
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                Paid
              </p>

            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
);
}
export default Total_Amount;