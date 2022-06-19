import React from "react";

function SmoochCredits() {
    return (
        <p className="smooch-meter">
            <img src={`${process.env.PUBLIC_URL}/img/smooch.webp`} alt="Available smooch tokens" /> x 0
        </p>
    );
}

export default SmoochCredits;