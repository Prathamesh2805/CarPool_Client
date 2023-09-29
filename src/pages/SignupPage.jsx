import React from "react";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp"
import MyFooter from "../components/MyFooter"

const SignupPage = () => {
    return(
    <div>
        <NavBar />
        <SignUp />
        <MyFooter />
    </div> 
    );
};

export default SignupPage;