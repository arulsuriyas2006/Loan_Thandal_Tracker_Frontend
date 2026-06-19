import axios from "axios";
import { Bell, LogOut, Mail, User } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile(){
      const [showModal,setshowModal] = useState(false);
      const [showdelete,setShowdelete]=useState(false)
      const [user,setUser]=useState([])
    const navigate=useNavigate()


    const fetch =async()=>{
        try{
        const res = await axios.get("http://localhost:5000/user/getuser",{withCredentials:true})
        setUser(res.data.iamuser)
        console.log(user)
        }catch(err){
     if(err.response?.status==401){
        navigate("/login")
       }
        }

    }
    const AskLogout=()=>{
    setshowModal(true)
    }
    const LogoutAccount=async()=>{
        try{
        const logout = await axios.post("http://localhost:5000/user/logout",{},{withCredentials:true})
        toast.success("Account Logout successfully")
        setTimeout(()=>{
         navigate("/login")
        },2000)
       
        }catch(err){
            toast.error(err.response.data.message)
        }
    }

    const Askdelete =()=>{
      setShowdelete(true)
    }
    const deleteAccount=async()=>{
    try{
    const res = await axios.delete("http://localhost:5000/user/deleteaccount",{withCredentials:true});
    toast.success("Successfully Account deleted ")
    setTimeout(()=>{
        navigate("/login")
    },2000)
    }catch(err){
    if(err.response?.status==401){
                navigate("/login")
    }
    console.log(err);
    }
    }
 const toggleNotification =async()=>{
    try{
        const res =await axios.put("http://localhost:5000/user/notification",{},{withCredentials:true})
        setUser({...user,notifications:res.data.notifications})
    }catch(err){
        if(err.response?.status==401){
                navigate("/login")
        }
        console.log(err)
    }
    
 }
    useEffect(()=>{
        fetch();
    },[])
  return(
    <div className="mt-4 p-4">
        <div className="w-full flex justify-center items-center">
             <div className='bg-green-200 p-3 rounded-full'>
                <User size={80}/>
                </div>
                </div>
                <div className="flex gap-2 bg-white rounded-lg items-center mt-4 p-2">             
                <div className='bg-green-200 p-3 rounded-full flex justify-center items-center '>
                <User size={22}/>
                </div>
                <div className="">
                 <h1 className="">Name</h1>
                 <h1 className="text-center font-bold">{user.name}</h1>
                </div>
                </div>

                <div className="flex gap-2  bg-white rounded-lg items-center p-2">             
                <div className='bg-green-200 p-3 rounded-full flex justify-center items-center '>
                <Mail size={22}/>
                </div>
                <div className="">
                 <h1 className="">Email</h1>
                 <h1 className="text-center font-bold">{user.email}</h1>
                </div>
                </div>

                <div className="flex gap-2  bg-white rounded-lg items-center p-2">             
                <div className='bg-green-200 p-3 rounded-full flex justify-center items-center '>
                <Bell size={22}/>
                </div>
                <div className="">
                 <h1 className="">Email Notification</h1>
                 <p className="text-sm text-gray-500">
                  Receive loan and installment reminders
                 </p>
                </div>
                <button onClick={toggleNotification}className={`cursor-pointer px-5 py-2 rounded-lg text-white ${user.notifications?"bg-green-500":"bg-gray-400"}`}>{user.notifications?"ON":"OFF"}</button>
                </div>
                <div className="p-4">
                    <button onClick={AskLogout} className="w-full flex gap-2 bg-red-100 p-3 rounded-full border border-red-400 justify-center item-center text-red-600"><LogOut/>Logout</button>
                </div>
                <div className="p-4 ">
                    <button onClick={Askdelete} className="w-full flex gap-2 bg-red-600 p-3 rounded-full border border-red-400 justify-center item-center text-white"><LogOut/>Delete Account</button>
                </div>
        {showModal &&(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-1">Logout?</h2>
                <p>Are you sure want to Logout?</p>
                <div className="py-2 pb-0 mt-1 flex justify-between gap-2 w-full">
                 <button className="cursor-pointer w-full px-4 py-2 bg-gray-300 rounded" onClick={()=>{setshowModal(false)}}>Cancel</button>
                 <button className=" cursor-pointer w-full px-4 py-2 bg-red-500 rounded text-white" onClick={()=>{
                    LogoutAccount();
                    setshowModal(false);
                    }}>Confirm</button>
                </div>
            </div>
        </div>
    )}

            {showdelete &&(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
                <h2 className="text-lg font-bold text-red-600 mb-2">Delete Account</h2>
                <p className="text-gray-700">Are you sure want to delete your account?</p>
                     <p className="text-sm text-red-500 mt-2">
This action cannot be undone. All your account information, loans, installment history, and related data will be permanently deleted.
      </p>
                <div className="py-2 mt-4 flex justify-between gap-2">
                 <button className="cursor-pointer w-full px-4 py-2 bg-gray-300 rounded" onClick={()=>{setshowModal(false)}}>Cancel</button>
                 <button className=" cursor-pointer w-full px-4 py-2 bg-red-500 rounded text-white" onClick={()=>{
                    deleteAccount();
                    setShowdelete(false);
                    }}>Delete Account</button>
                </div>
            </div>
        </div>
    )}
    </div>
  )
}
export default Profile;