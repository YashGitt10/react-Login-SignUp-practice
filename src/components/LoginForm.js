import  React, { useState }  from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({setisLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
    })
    const [showPass, setShowPass] = useState(false);
    function changeH(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }
    function submitH(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged in Successfully");
        navigate("/dashboard");
    }
    return (
        <form onSubmit={submitH} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input required type="email" value={formData.email} placeholder="Enter Email Address" onChange={changeH} name="email" className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]"></input>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200">*</sup>
                </p>
                <input required type={showPass ? ("text") : ("password")} value={formData.password} placeholder="Enter Password" onChange={changeH} name="password" className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]"></input>

                <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label> 

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm