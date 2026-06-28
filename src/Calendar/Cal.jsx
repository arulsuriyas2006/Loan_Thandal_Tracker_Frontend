import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
function Cal(props){
  const {paid,pending,selectedDate, setSelectedDate,month,setMonth}=props;
 const [calInstallments,setcalInstallments]=useState([]);
 const paidDates = paid;
 const pendingDates = pending;

    return(
<div className="mt-4 p-2">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        month={month}
        onMonthChange={setMonth}
        showOutsideDays
        components={{
          IconLeft: () => <ChevronLeft className="w-4 h-4 text-blue-600" />,
          IconRight: () => <ChevronRight className="w-4 h-4 text-blue-600" />,
        }}
        modifiers={{
          paid: paidDates,
          pending: pendingDates,
        }}
        modifiersClassNames={{
          paid: "paid-day",
          pending: "pending-day",
        }}
        className="custom-daypicker"
      />
        <div className='flex p-4 gap-2 mt-0'>
            <div className='flex items-center gap-2'><div className="bg-green-800 w-2 h-2 rounded-full"></div>Paid</div>
            <div className="flex items-center gap-2"><div className="bg-red-800 w-2 h-2 rounded-full"></div>Pending</div>
        </div>
    </div>
    )
}
export default Cal;