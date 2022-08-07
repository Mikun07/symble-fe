import React from 'react';
import NotFound from "../../../assets/not-found.svg";


function upcoming() {
    return (
        <>
            <img className="display-img" src={NotFound} alt="" />
            <p className="display-txt">
                You have no new upcoming events.
            </p>
        </>
    )
}

export default upcoming