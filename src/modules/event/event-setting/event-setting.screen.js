import React from "react";
import '../event-setting/event-setting.css';
import Close from "../../../assets/close.svg";
import RightArrow from "../../../assets/right-arrow.svg";

export default function EventSetting() {
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
                            Event setting
                        </p>

                        <p className="set-txt">Is this event free or paid?</p>

                            <input className="radio-free" type="radio"/>
                            <label className="radio-free-txt" htmlFor="free">Free</label>

                            <input className="radio-paid" type="radio"/> 
                            <label className="radio-paid-txt" htmlFor="free">Paid</label>

                        <hr className="hr-1" />

                        <p className="set-txt">Is this event private or public?</p>

                            <input className="radio-free" type="radio"/>
                            <label className="radio-free-txt" htmlFor="free">Private</label>

                            <input className="radio-paid" type="radio"/> 
                            <label className="radio-paid-txt" htmlFor="free">Public</label>

                        <hr className="hr-1" />

                        <p className="set-txt">Is this event to take place now or later?</p>

                            <input className="radio-free" type="radio"/>
                            <label className="radio-free-txt" htmlFor="free">Now (instant event)</label>

                            <input className="radio-paid-1" type="radio"/>
                            <label className="radio-paid-txt-1" htmlFor="free">Later</label>


                        <button className="event-disable">
                            Next
                        </button>
                    </form>
                </div>
            {/* body */}
        </div>
    )
}