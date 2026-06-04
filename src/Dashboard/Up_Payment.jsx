import Payment_card from "./payment_Card";

function Up_Payment(){
    return(
        <div className="mt-4">
         <div className="flex justify-between">
            <h1 className="font-bold">Upcoming Payements</h1>
            <h1 className="text-blue-700">See All</h1>
         </div>
        <Payment_card/>
        <Payment_card/>
        <Payment_card/>
        <Payment_card/>
        </div>
    )
}
export default Up_Payment;