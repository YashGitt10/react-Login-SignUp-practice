import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setisLoggedIn}) => {
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 gap-x-12 mx-auto gap-y-0 justify-between">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="font-semibold text-richblack-5 text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>
                {formtype === "signup" ? (<SignupForm setisLoggedIn={setisLoggedIn}></SignupForm>) : (<LoginForm setisLoggedIn={setisLoggedIn}></LoginForm>)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] bg-richblack-700 w-full"></div>
                    <p className="font-medium text-richblack-700 leading-[1.375rem]">OR</p>
                    <div className="h-[1px] bg-richblack-700 w-full"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ">
                    <FcGoogle></FcGoogle>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} width={558} height={504}
                loading="lazy" alt=""></img>

                <img src={image} width={558} height={504} loading="lazy" alt="" className="absolute right-4 -top-4"></img>
            </div>
        </div>
    )
}

export default Template