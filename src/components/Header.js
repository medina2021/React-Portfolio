import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
       <div className="header-wrapper">
         <div className="main-info">
            <h1>Skills</h1>
            <Typed
            className="typed-text"
            strings={["HTML","CSS","JAVASCRIPT","REACT","MONGODB"]}
            typeSpeed={60}
            backspeed={60}
            loop
            />
        </div>
       </div>
    )
}

export default Header;