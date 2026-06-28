import { IndianRupee, User } from "lucide-react";

function Payment_card(props){
    const {payment}=props;
    const dueDate = new Date(payment.dueDate);
    const today =new Date();
    const diffDays = Math.ceil((dueDate-today)/(1000*60*60*24))
    return(
            <div className="bg-gray-50 hover:bg-gray-100 transition rounded-2xl p-4 border border-gray-200">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="bg-green-100 p-3 rounded-full">
            <User className="h-5 w-5 text-green-600" />
          </div>

          <div>
            <h2 className="font-bold lg:text-lg">
              {payment.loanId?.name || "Loan Deleted"}
            </h2>

            <p className="text-gray-500">
              Due in {diffDays} days •{" "}
              {dueDate.toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric"
                }
              )}
            </p>
          </div>

        </div>

        <div className="text-right">

          <h2 className="text-xl font-bold text-blue-700 flex items-center justify-end">
            <IndianRupee className="h-4 w-4" />
            {payment.installmentamount}
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium
            ${
              diffDays >= 0
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {diffDays >= 0
              ? "PENDING"
              : "OVERDUE"}
          </span>

        </div>

      </div>

    </div>
    )
}
export default Payment_card;