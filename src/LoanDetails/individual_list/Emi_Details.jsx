function Emi_Details(props){
    const {loan} =props;
    return(
       <div className="grid grid-cols-3 gap-4 mt-4">

  <div className="bg-blue-600 text-white p-5 rounded-2xl text-center">
    <h2>Total</h2>
    <h1 className="text-3xl font-bold">
      {loan.term}
    </h1>
  </div>

  <div className="bg-green-600 text-white p-5 rounded-2xl text-center">
    <h2>Paid</h2>
    <h1 className="text-3xl font-bold">
      {loan.paidCount}
    </h1>
  </div>

  <div className="bg-red-500 text-white p-5 rounded-2xl text-center">
    <h2>Pending</h2>
    <h1 className="text-3xl font-bold">
      {loan.term - loan.paidCount}
    </h1>
  </div>

</div>
    )
}
export default Emi_Details;