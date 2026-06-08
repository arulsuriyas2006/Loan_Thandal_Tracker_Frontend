import { Filter, SlidersHorizontal } from "lucide-react";
import Month from "./Month";

function Monthly_Tracking(props){
  const {loan} = props;
  console.log(loan)
    return(
        <div className="mt-4">
          <div className="flex justify-between">
            <h1 className="font-bold">Monthly Tracking</h1>
            <h1 className="text-blue-700 flex items-center gap-1">Filter<SlidersHorizontal className="h-4 w-4"/></h1>
          </div>
          <Month ln={loan}/>
          <Month  ln={loan}/>
          <Month ln={loan}/>
          <Month ln={loan}/>

        </div>
    )
}
export default Monthly_Tracking;