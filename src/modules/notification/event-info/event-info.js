import { useState } from "react";
import Pencil from "../../../assets/pencil.svg";
import ScreenPic from "../../../assets/pic.png";
import Files from "../../../assets/files.svg";
import './event-info.css';

export default function EventInfo() {
    const [showQR, toggleShowQR] = useState(false);

    function show() {
        toggleShowQR(true);
        console.log(showQR)
    }

    function hide() {
        toggleShowQR(false)
    }


    return (
        <div className="">
            {/* header */}
            <div className="header-text">
                <p className="blue-txt">
                    Event details
                </p>
                <p className="blak-txt">
                    You can access this in your notifications upcoming events.
                </p>
                <div className="edit-txt">
                    <img className="icon-edit" src={Pencil} alt="" />
                    <p>
                        Edit
                    </p>
                </div>
            </div>
            {/* header */}

            {/* body */}
            <div className="body-text">
                <img className="img-pic" src={ScreenPic} alt="" />

                <div className="info-text">
                    <h1 className="blak-txts">
                        Event name:
                        <p className="black-txts">
                            Tomiwa’s 26th birthday
                        </p>
                    </h1>
                    <h1 className="blak-txts">
                        Event type:
                        <p className="black-txts">
                            Private
                        </p>
                    </h1>
                    <h1 className="blak-txts">
                        Passcode:
                        <p className="black-txts">
                            234987
                        </p>
                        <img className="file-icon" src={Files} alt="" />
                    </h1>
                    <h1 className="blak-txts">
                        Date and time:
                        <p className="black-txts">
                            6:15 pm, 3rd August, 2022.
                        </p>
                    </h1>
                    <h1 className="blak-txts">
                        Event fee:
                        <p className="black-txts">
                            Free (for devs: amount shows here)
                        </p>
                    </h1>
                    <h1 className="blak-txts">
                        Event URL:
                        <p className="blu-text">
                            https://www.symble.com/events/23494
                        </p>
                        <img className="file-icon" src={Files} alt="" />
                    </h1>
                    <h1 className="blak-txts">
                        Co-hosts:
                        <p className="black-txts">
                            None
                        </p>
                    </h1>
                    <h1 className="blak-txts">
                        QR code:
                        <div>
                            {showQR ? 
                                <>
                                {/* to display the image */}
                                    <img src="" alt="" /> <button className="QR-btn" onClick={hide} >hide</button>
                                </>
                                :
                                <button className="QR-btn" onClick={show}>
                                    Generate QR Code
                                </button>
                            }
                        </div>

                    </h1>
                </div>

                <button className="btn-active">
                    Close
                </button>
            </div>
            {/* body */}
        </div>
    );
}