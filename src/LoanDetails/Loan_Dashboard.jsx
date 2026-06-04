import { NavLink } from "react-router-dom";
import Loan_Card from "./Loan_Card";

function Loan_Dashboard(){
    return(
        <div className="bg-gray-100 pt-0 p-4">
            <div className="">
                <h1 className="text-blue-800 font-bold">Overwiew</h1>
                <h1 className="text-2xl font-bold">Active Loans</h1>
            </div>
            <NavLink to="/details"><Loan_Card/></NavLink>
            <NavLink to="/details"><Loan_Card/></NavLink>
            <NavLink to="/details"><Loan_Card/></NavLink>
            <NavLink to="/details"><Loan_Card/></NavLink>

        </div>
    )
}
export default Loan_Dashboard;