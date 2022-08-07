import React from 'react';
import NotFound from "../../../assets/not-found.svg";


function general() {
    return (
        <>
            <img className="display-img" src={NotFound} alt="" />
            <p className="display-txt">
                You have no new general notifications.
            </p>
        </>
    )
}

export default general