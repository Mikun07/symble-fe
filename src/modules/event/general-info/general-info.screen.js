import React from "react";
import Close from "../../../assets/close.svg";
import Image from "../../../assets/image.svg";
import CloseSM from "../../../assets/close-sm.svg";
import '../general-info/general-info.css';

export default function GeneralInfo() {
    return (
        <div className="container">
        {/* header */}
            <div className="event-header">
                <img className="close-btn" src={Close} alt="" />

                <p className="event-title">
                    New event
                </p>
            </div>
        {/* header */}

        {/* body */}
            <div className="event-body">
                <form>
                    <p className="form-title">
                        General information
                    </p>

                    <label className="info-label" htmlFor="Event title">Event title<span> (required)</span></label>
                    <input className="info-input" type="text" placeholder="Enter event title"/>

                    <label className="des-label" htmlFor="Description">Description<span> (required)</span></label>
                    <input className="des-input" type="text"/>
                    
                    <label className="Cat-info-label" htmlFor="Category">Category<span> (required)</span></label>
                    <input className="Cat-info-input" type="text" placeholder="Select catrgory"/>

                    <label className="image-label" htmlFor="image">Image</label>

                    <div className="image-box">
                        <img className="image-logo" src={Image} alt="" />
                        <p className="image-txt">Upload a cover image for the event</p>
                        <p className="blu-txt">Upload image</p>
                        <div className="gry-txt">
                            <img src={CloseSM} alt="" /><p> Somethingsomething.jpg (for after upload)</p>
                        </div>
                    </div>

                    <button className="event-submit">
                        Next
                    </button>
                </form>
            </div>
        {/* body */}
    </div>
    )
}