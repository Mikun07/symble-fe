import React from "react";
import Close from "../../../assets/close.svg";
import RightArrow from "../../../assets/right-arrow.svg";
import Search from "../../../assets/search.svg";
import '../other-event/other-event.css';

export default function OtherEvent() {
    return(
        <div className="container">
            {/* header */}
                <div className="event-header">
                    <img className="close-btn" src={Close} alt="" />

                    <img className="back-btn" src={RightArrow} alt="" />

                    <p className="setting-title">
                        New event
                    </p>
                </div>
            {/* header */}

            {/* body */}
                <div className="event-body">
                    <form>
                        <p className="form-title">
                            Other details
                        </p>

                        <label className="other-label" htmlFor="Event title">Physical location address<span> (if applicable)</span></label>
                        <input className="des-input" type="text"/>

                        <label className="tag-label" htmlFor="Event title">Tags</label>
                        <input className="tag-input" type="text"/>

                        <label className="other-label-1" htmlFor="Event title">Add co-host<span> (if applicable)</span></label>
                        <input className="tag-input-1" type="text"/>

                        <button className="event-submit">
                            Create event
                        </button>
                    </form>
                </div>
            {/* body */}
        </div>
    )
}