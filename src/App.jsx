import { useState } from 'react'
import Dashboard from './Dashboard/Dashboard'
import Loan from './AddLoan/Loan'
import Loan_Dashboard from './LoanDetails/Loan_Dashboard'
import Details from './LoanDetails/individual_list/Details'
import Calendar_view from './Calendar/Calendar_view'
import History_Dashboard from './History/History_Dashboard'
import { Calendar, History, Home, House, List, Plus, ReceiptIcon, User } from 'lucide-react'
import { NavLink, Routes,Route } from 'react-router-dom'
import Edit_Loan from './AddLoan/Edit_Loan'
import Login from './login/Login'
import Signup from './login/Signup'




function App() {
 const [active,setActive] = useState("home");
  return (
    
    <div className='bg-gray-100'>
      <div className='fixed top-0 w-full bg-white/10 backdrop-blur-md flex justify-between p-3 items-center rounded-b-lg border-b border-gray-200 z-50'>
        <div className='bg-green-100 p-2 rounded-full'><User/></div>
        <div className=''><h1 className='text-blue-600 font-bold'>FinFamily</h1></div>
      </div>
      <main className='pt-16 pb-18'>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/addloan" element={<Loan/>}/>
      <Route path="/editloan/:id" element={<Edit_Loan/>}/>
      <Route path="/loandashboard" element={<Loan_Dashboard/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/calendar" element={<Calendar_view/>}/>
      <Route path="/history" element={<History_Dashboard/>}/>
      </Routes>
      </main>
      <div className='fixed w-full flex justify-between bottom-0 bg-white rounded-t-lg p-1 mb-0 shadow-lg border-t border-gray-200 z-50'>
      <NavLink to="/dashboard"className={({isActive})=>isActive?"bg-blue-600 text-white rounded-3xl p-2":"p-2 cursor-pointer items-center"}>
          <House className='ml-2'/>
          <h1 className=' text-small'>Home</h1>
        </NavLink>
        <NavLink to="/addloan" className={({isActive})=>isActive?"bg-blue-600 text-white rounded-3xl p-2":"p-2 cursor-pointer"}>
          <Plus className='ml-6'/>
          <h1 className='text-small'>Add Loan</h1>
        </NavLink>
        <NavLink to="/loandashboard"className={({isActive})=>isActive?"bg-blue-600 text-white rounded-3xl p-2":"p-2 cursor-pointer"}>
          <List className='ml-2'/>
          <h1 className='text-small'>Loans</h1>
        </NavLink>
        <NavLink to="/calendar" className={({isActive})=>isActive?"bg-blue-600 text-white rounded-3xl p-2":"p-2 cursor-pointer"}>
          <Calendar className='ml-5'/>
          <h1 className='text-small'>Calendar</h1>
        </NavLink>
        <NavLink to="/history"className={({isActive})=>isActive?"bg-blue-600 text-white rounded-3xl p-2":"p-2 cursor-pointer"}>
          <History className='ml-3'/>
          <h1 className='text-small'>History</h1>
        </NavLink>
      </div>
    </div>
  )
}

export default App
