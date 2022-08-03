import AppFooter from "../../components/app-footer/app.footer.screen";
import Categories from "../../components/categories/categories-screen";
import EventCard from "../../components/event-card/event-cards.screen";
import './home.styles.css'

export default function Home(){
    return(
        <div className="home-container">
        <section className="categories-section">
            <div className="categories-header">
                <h1>Categories</h1>
                <p> + Create event</p>
            </div>
            <Categories/>
        </section>
        <p className="preference-text">
        Based on your preferences
        </p>
        <section className="eventCard-section">
            <div className="eventCard-header">
                <h1>Live events </h1>
                <p> View all  </p>
            </div>
            <EventCard/>
        </section>
        <section className="eventCard-section">
            <div className="eventCard-header">
                <h1>Upcoming events </h1>
            </div>
            <EventCard/>
        </section>
        <section className="eventCard-section">
            <div className="eventCard-header">
                <h1>Events you missed</h1>
            </div>
            <EventCard/>
        </section>
        
        <section className="footer-section">
            <AppFooter/>
        </section>
        </div>
    )
}