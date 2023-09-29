import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login"
import MyFooter from "../components/MyFooter"

const LoginPage = () => {
    return(
    <div>
        <NavBar />
        <Login />
        <MyFooter />
    </div> 
    );
};

export default LoginPage;