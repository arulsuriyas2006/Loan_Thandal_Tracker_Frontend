import axios from 'axios';
import Cal from './Cal';
import Emi_card from './Emi_card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Calendar_view(){
     const [loading,setLoading] = useState(true);
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
      const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/loan/getCalendarInstallments",{withCredentials:true})
      setcalInstallments(res.data.calInstallments)
      }catch(err){
        if(err.response?.status==401){
            navigate("/login")
        }
       console.log(err)
      }finally{
      setLoading(false);
    }
  }
     
     useEffect(()=>{
      fetchCalendar()
     },[])
     console.log(calInstallments)
if(loading){
        return(
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600">Loading Calender View...</p>
        </div>
        )
}
    return(
        <div className=" px-6 py-4 min-h-screen mt-12 mb-8 lg:mt-0 lg:mb-0 ">
                <h1 className=" text-3xl font-bold mb-4">
      Calender View
    </h1>
<div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5 lg:gap-6">

    {/* Calendar Section */}
    <div className="lg:col-span-2">

        <div className="bg-white rounded-2xl shadow-lg">

            <Cal
              paid={paidDates}
              pending={pendingDates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              month={Month}
              setMonth={setMonth}
            />

        </div>

    </div>

    {/* Installment Section */}
    <div className="lg:col-span-3 mt-4 lg:mt-0">

        <div className="bg-white rounded-2xl shadow-lg p-6 h-full">

            <div className="flex justify-between items-center mb-4">

                <h1 className="font-bold text-xl">
                    Details of {
                        Month.toLocaleString("en-US",{
                            month:"long",
                            year:"numeric"
                        })
                    }
                </h1>

                <button
                  onClick={()=>setSelectedDate(null)}
                  className="text-blue-600 font-semibold cursor-pointer"
                >
                    Show Entire Month
                </button>

            </div>

            {
                sortInstallments.length > 0 ? (
                    sortInstallments.map(item=>(
                        <Emi_card
                          key={item._id}
                          installment={item}
                        />
                    ))
                ) : (
                    <div className="bg-gray-50 rounded-xl p-10 text-center">

                        <h1 className="font-semibold text-gray-700">
                            No installments found
                        </h1>

                        <p className="text-sm text-gray-500 mt-2">
                            No EMI payments scheduled
                        </p>

                    </div>
                )
            }

        </div>

    </div>

</div>
        </div>
    )
}
export default Calendar_view;