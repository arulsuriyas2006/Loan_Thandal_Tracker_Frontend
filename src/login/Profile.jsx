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
        const res = await axios.get("https://loan-thandal-tracker-backend.onrender.com/user/getuser",{withCredentials:true})
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
        const logout = await axios.post("https://loan-thandal-tracker-backend.onrender.com/user/logout",{},{withCredentials:true})
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
    const res = await axios.delete("https://loan-thandal-tracker-backend.onrender.com/user/deleteaccount",{withCredentials:true});
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
        const res =await axios.put("https://loan-thandal-tracker-backend.onrender.com/user/notification",{},{withCredentials:true})
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
  return (
  <div className="p-4 lg:px-8 lg:py-4 mt-12 mb-8 lg:mt-0">
    
    <h1 className=" text-3xl font-bold mb-4">
      My Profile
    </h1>

    <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-3 lg:gap-8">

      {/* Left Profile Card */}
      <div className="lg:col-span-1">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center h-full">

          <div className="bg-green-200 p-4 rounded-full w-fit mx-auto">
            <User size={80}/>
          </div>

          <h1 className="font-bold text-3xl mt-5">
            {user.name}
          </h1>

          <p className="text-gray-500 mt-2 break-all">
            {user.email}
          </p>

          <div className="mt-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              Active User
            </span>
          </div>

        </div>

      </div>

      {/* Right Settings Card */}
      <div className="lg:col-span-2 mt-6 lg:mt-0">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h1 className="text-3xl font-bold mb-2">
            Account Settings
          </h1>

          {/* Name */}
          <div className="flex gap-4 items-center py-5 border-b border-gray-100">

            <div className="bg-green-200 p-3 rounded-full">
              <User size={24}/>
            </div>

            <div>
              <h1 className="text-gray-500 text-sm">
                Name
              </h1>

              <h1 className="font-bold text-md lg:text-lg">
                {user.name}
              </h1>
            </div>

          </div>

          {/* Email */}
          <div className="flex gap-4 items-center py-5 border-b border-gray-100">

            <div className="bg-green-200 p-3 rounded-full">
              <Mail size={24}/>
            </div>

            <div>
              <h1 className="text-gray-500 text-sm">
                Email
              </h1>

              <h1 className="font-bold text-md break-all lg:text-lg">
                {user.email}
              </h1>
            </div>

          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between py-5 border-b border-gray-100">
           <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="bg-green-200 p-3 rounded-full">
              <Bell size={24}/>
            </div>

            <div className="min-w-0">
              <h1 className="font-bold">
                Email Notifications
              </h1>

              <p className="text-gray-500 text-sm">
                Receive loan and installment reminders
              </p>
            </div>
           </div>
            <button
              onClick={toggleNotification}
              className={`
                relative
                w-14
                h-8
                cursor-pointer
                rounded-full
                shrink-0
                transition
                ${
                  user.notifications
                    ? "bg-green-500"
                    : "bg-gray-400"
                }
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  w-6
                  h-6
                  bg-white
                  rounded-full
                  transition-all
                  ${
                    user.notifications
                      ? "left-7"
                      : "left-1"
                  }
                `}
              />
            </button>

          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">

            <button
              onClick={AskLogout}
              className="
                w-full
                flex
                justify-center
                items-center
                gap-2
                bg-red-100
                border
                border-red-300
                text-red-600
                rounded-xl
                p-4
                hover:bg-red-200
                transition
                cursor-pointer
              "
            >
              <LogOut />
              Logout
            </button>

            <button
              onClick={Askdelete}
              className="
                w-full
                flex
                justify-center
                items-center
                gap-2
                bg-red-600
                text-white
                rounded-xl
                p-4
                hover:bg-red-700
                transition
                cursor-pointer
              "
            >
              <LogOut />
              Delete Account
            </button>

          </div>

        </div>

      </div>

    </div>

    {/* Logout Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-bold mb-2">
            Logout?
          </h2>

          <p>
            Are you sure want to Logout?
          </p>

          <div className="flex gap-2 mt-4">

            <button
              className="w-full bg-gray-300 py-2 rounded cursor-pointer"
              onClick={() => setshowModal(false)}
            >
              Cancel
            </button>

            <button
              className="w-full bg-red-500 text-white py-2 rounded cursor-pointer"
              onClick={() => {
                LogoutAccount();
                setshowModal(false);
              }}
            >
              Confirm
            </button>

          </div>

        </div>
      </div>
    )}

    {/* Delete Modal */}
    {showdelete && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

        <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm">

          <h2 className="text-xl font-bold text-red-600 mb-2">
            Delete Account
          </h2>

          <p>
            Are you sure want to delete your account?
          </p>

          <p className="text-red-500 text-sm mt-3">
            This action cannot be undone.
            All loans, installments and history
            will be permanently deleted.
          </p>

          <div className="flex gap-2 mt-5">

            <button
              className="w-full bg-gray-300 py-2 rounded cursor-pointer"
              onClick={() => setShowdelete(false)}
            >
              Cancel
            </button>

            <button
              className="w-full bg-red-500 text-white py-2 rounded cursor-pointer"
              onClick={() => {
                deleteAccount();
                setShowdelete(false);
              }}
            >
              Delete
            </button>

          </div>

        </div>

      </div>
    )}

  </div>
);
}
export default Profile;