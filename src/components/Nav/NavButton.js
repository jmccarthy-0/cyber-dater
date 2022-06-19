import React from "react";
import SmoochIcon from "../SmoochIcon/SmoochIcon";

import "./NavBtn.css";

function NavButton(props) {
    const iconMarkup =  <span>(<SmoochIcon /> x {props.cost})</span>

    return (
        <button onClick={() => {props.buttonAction(props.index)}}
                className={`nav-btn ${props.isActive ? 'is-active' : ''}`}
                >
            {props.value} {props.disabled && iconMarkup}<span className="nav-btn__extra"> {props.nsfw && '18+'}</span>
        </button>
    );
}

export default NavButton;