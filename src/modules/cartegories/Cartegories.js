import React from "react";
import Concept from "../../assets/concept.svg";
import Auction from "../../assets/auction.svg";
import Marketing from "../../assets/marketing.svg";
import Donations from "../../assets/donation.svg";
import Parties from "../../assets/parties.svg";
import Podcast from "../../assets/podcast.svg";
import Advert from "../../assets/advert.svg";
import Commerce from "../../assets/commerce.svg";

function Cartegories() {
    return (
        <div className="container">
            {/* header */}
                <div className="cat-header">
                    <p className="cat-text">
                        Choose 3 or more categories you would like to see live events in order of preference.
                    </p>
                </div>
            {/* header */}

            {/* body */}
                <div className="cat-body">
                    <div className="cat-img">
                        <img src={Concept} alt="" />
                        <img src={Auction} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={Marketing} alt="" />
                        <img src={Podcast} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={Parties} alt="" />
                        <img src={ Donations} alt="" />
                    </div>

                    <div className="cat-img">
                        <img src={Advert} alt="" />
                        <img src={Commerce} alt="" />
                    </div>
                    {/* button */}
                        <button className="cat-disabled">
                            Done
                        </button>
                    {/* button */}
                </div>
                
            {/* body */}
        </div>
    )
}

export default Cartegories;