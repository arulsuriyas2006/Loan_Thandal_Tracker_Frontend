import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Cal(){
 const [selected, setSelected] = useState(new Date());
 const paidDates = [new Date(2023, 9, 3)];
 const pendingDates = [new Date(2023, 9, 6), new Date(2023, 9, 18)];
    return(
<div className="mt-4">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
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