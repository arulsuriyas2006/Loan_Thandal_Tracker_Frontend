import axios from 'axios';
import Cal from './Cal';
import Emi_card from './Emi_card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Calendar_view(){
     const [selectedDate, setSelectedDate] = useState(new Date());
     const [currentMonth,setCurrentMonth] = useState(new Date());
     const [Month,setMonth] = useState(new Date());
     const [calInstallments,setcalInstallments]=useState([]);
     const paidDates = calInstallments.filter(item=>item.paid).map(item=>new Date(item.dueDate));
     const pendingDates = calInstallments.filter(item=>!item.paid).map(item=>new Date(item.dueDate));
     const navigate=useNavigate()
     const monthInstallments = calInstallments.filter(item=>{
       const due = new Date(item.dueDate);
       return(due?.getMonth()==Month?.getMonth() && due?.getFullYear()== Month?.getFullYear())
     })
     
    const dateInstallments = calInstallments.filter(item=>{
        const duedate = new Date(item.dueDate);
        return(duedate?.toDateString()===selectedDate?.toDateString())
    })
    const displayInstallments = selectedDate?dateInstallments:monthInstallments
    const sortInstallments = [...displayInstallments].sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate))
     const fetchCalendar = async()=>{
      try{
      const res = await axios.get("http://localhost:5000/loan/getCalendarInstallments",{withCredentials:true})
      setcalInstallments(res.data.calInstallments)
      }catch(err){
        if(err.response?.status==401){
            navigate("/login")
        }
       console.log(err)
      }
     }
     useEffect(()=>{
      fetchCalendar()
     },[])
     console.log(calInstallments)
    return(
        <div className="bg-gray-200 p-4 pt-2 mb-0">
        <Cal paid={paidDates} pending={pendingDates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} month={Month} setMonth={setMonth}/>
        <div className='flex justify-between'>
        <h1 className='flex items-center justify-center font-bold'>Details of {
            Month.toLocaleString("en-US",{
                month:"long",
                year:"numeric"
            })}</h1>
         <h1 className="text-blue-800 font-bold  flex items-center justify-center cursor-pointer" onClick={()=>setSelectedDate(null)}>Show Entire Month</h1>
            </div>
        {   sortInstallments.length>0?(
            sortInstallments.map(item=>(
                <Emi_card key={item._id} installment={item}/>
            ))
        ):(
        <div className='bg-white rounded-lg p-6 mt-2 shadow-lg text-center'>
        <h1 className='font-medium text-gray-700'>No installments found</h1>
        <p className='text-sm text-gray-500 mt-1'>No EMI payments scheduled for this date</p>
        </div>
    )
        }
        </div>
    )
}
export default Calendar_view;