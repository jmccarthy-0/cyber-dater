import React from "react";

import "./Btn.css"; 

function Btn(props) {
    return (
        <button className={`btn ${props.classVal}`} onClick={props.handleClick} aria-label={props.label}>
            {props.content}
        </button>
    );
}

export default Btn;