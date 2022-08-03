import React from "react";
import Home from '../../assets/Home.svg';
import Explore from '../../assets/Explore.svg';
import Profile from '../../assets/profile.svg';
import Subscriptions from '../../assets/Subscriptions.svg';

import './app-footer.styles.css'


export default function AppFooter(){
    return(
        <div className="containe">
            <main className="footer-container">
                <div className="footer-item">
                    <img src={Home}/>
                    <p>Feed</p>
                </div>
                <div className="footer-item">
                <img src={Subscriptions} />
                <p>Subscriptions</p>


                </div>
                <div className="footer-item">
                <img src={Explore}/>
                <p>Explore</p>

                </div>
                <div className="footer-item">
                <img src={Profile}/>
                <p>Profile</p>

                </div>
            </main>
        </div>
    )
}