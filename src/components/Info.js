import React from "react";

function Info(props){
    return(
        <>
        <h1>{props.courseName}</h1>
        <h2>{props.title}</h2>
        <h3>{props.studentID}</h3>
        <h4>{props.fnm} {props.lnm}</h4>
        <h5>{props.college}, {props.city}</h5>
        </>
    );
}

export default Info;