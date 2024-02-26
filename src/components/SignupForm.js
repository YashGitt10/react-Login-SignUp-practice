import  React, { useState }  from "react";
import toast from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setisLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname:"", lastname:"", email:"", password:"", confirmPassword:""
    })
    const [showPass, setShowPass] = useState(false);
    const [showcPass, setShowcPass] = useState(false);
    const [accType, setAccType] = useState("student");
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
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setisLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }
    return (
        <div>
            {/* student-instructor */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button className={`${accType === "student" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccType("student")}>
                    Student
                </button>
                <button className={`${accType === "instructor" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitH}>
                <div className="flex justify-between w-full mt-4">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]" required type="text" name="firstname" onChange={changeH} placeholder="Enter first name" value={formData.firstname}></input>
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]" required type="text" name="lastname" onChange={changeH} placeholder="Enter last name" value={formData.lastname}></input>
                    </label>
                </div>

                <div className="mt-[20px]"></div>

                <label className="w-full mt-4">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]" required type="email" name="email" onChange={changeH} placeholder="Enter email" value={formData.email}></input>
                </label>

                <div className="flex justify-between w-full mt-4">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                        <input className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]" required type={showPass ? ("text") : ("password")} name="password" onChange={changeH} placeholder="Enter password" value={formData.password}></input>
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPass((prev) => !prev)}>
                        {!showPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
                        </span>
                    </label>

                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 w-full p-[12px]" required type={showcPass ? ("text") : ("password")} name="confirmPassword" onChange={changeH} placeholder="Confirm password" value={formData.confirmPassword}></input>
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowcPass((prev) => !prev)}>
                        {!showcPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm