import {useEffect} from "react";
import NotFound from "../../../assets/not-found.svg";
import '../notification-main/notification.css';
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Notifications() {
    const navigate = useNavigate();
    useEffect(
        function() {
            navigate('general');
        },
        []
    )
    return (
        <div>
            {/* header */}
            <div className="notification-header">
                <p className="blak-title">
                    Notification
                </p>
            </div>
            <div className="notification-info">
                <NavLink className={({ isActive }) => {
                    return isActive ? "blu-txts" : "gry-txts"
                }} to='/notifications/general'>General (0)</NavLink>
                <hr className="notification-line" />
                <NavLink className={({ isActive }) => {
                    return isActive ? "blu-txts" : "gry-txts"
                }} to='/notifications/upcoming'>Upcoming Event (0)</NavLink>
            </div>
            {/* header */}
            {/* body */}
            <Outlet />
            {/* body */}
        </div>
    );
}