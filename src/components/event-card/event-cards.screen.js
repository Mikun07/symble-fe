import React from "react";
import AppFooter from "../app-footer/app.footer.screen";
import './event-cards.styles.css'


export default function EventCard(){
    return(
        <>
        <main className="cards-flex-scroll">
            <div className="card-container">
                <p className="event-status">5.3k | Live</p>
                <div className="event-info">
                    <p className="username-price">Esther Shoo <span className="event-price">. #500 per month</span></p>
                    <p className="event-name">Plant party</p>
                </div>
            </div>
            <div className="card-container">
                <p className="event-status">5.3k | Live</p>
                <div className="event-info">
                    <p className="username-price">Esther Shoo <span className="event-price">. #500 per month</span></p>
                    <p className="event-name">Plant party</p>
                </div>
            </div>
            <div className="card-container">
                <p className="event-status">5.3k | Live</p>
                <div className="event-info">
                    <p className="username-price">Esther Shoo <span className="event-price">. #500 per month</span></p>
                    <p className="event-name">Plant party</p>
                </div>
            </div>
            <div className="card-container">
                <p className="event-status">5.3k | Live</p>
                <div className="event-info">
                    <p className="username-price">Esther Shoo <span className="event-price">. #500 per month</span></p>
                    <p className="event-name">Plant party</p>
                </div>
            </div>
        </main>
        </>
    )
}