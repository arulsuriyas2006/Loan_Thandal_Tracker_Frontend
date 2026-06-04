import Details_Card from "./Details_Card";
import Emi_Details from "./Emi_Details";
import Monthly_Tracking from "./Monthly_Tracking";

function Details(){
    return(
        <div className="bg-gray-100 pt-0 p-4">
         <Details_Card/>
         <Emi_Details/>
         <Monthly_Tracking/>
        </div>
    )
}
export default Details;