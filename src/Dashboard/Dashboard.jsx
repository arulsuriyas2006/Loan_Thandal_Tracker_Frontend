import Total_Amount from './Total_Amount'
import Loan_Type from './Loan_Type'
import Up_Payment from './Up_Payment'

function Dashboard(){
    return(
      <div className=' bg-gray-100 mb-4'>
      <Total_Amount/>
      <Loan_Type/>
      <Up_Payment/>
    </div>
    )
}
export default Dashboard;