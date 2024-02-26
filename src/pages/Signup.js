import  React  from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({setisLoggedIn}) => {
    return (
        <Template 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setisLoggedIn={setisLoggedIn}>
        </Template>
    )
}

export default Signup