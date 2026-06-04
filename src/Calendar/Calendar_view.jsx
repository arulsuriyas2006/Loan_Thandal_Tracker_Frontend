import Cal from './Cal';
import Emi_card from './Emi_card';

function Calendar_view(){
    return(
        <div className="bg-gray-200 p-4 pt-2 mb-0">
        <Cal/>
        <h1 className='mt-2'>Details of May</h1>
        <Emi_card/>
        <Emi_card/>
        <Emi_card/>
        <Emi_card/>
        </div>
    )
}
export default Calendar_view;