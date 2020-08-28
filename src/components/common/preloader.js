import React from "react";
import img from "../../assets/111.jpg";
import loader from "../../assets/1128x128.gif";

const Preloader = (props) => {
    return <>
        <img src={loader}/>
    </>
}

export default Preloader