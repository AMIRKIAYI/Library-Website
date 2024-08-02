import { Link } from "react-router-dom";
import Clock from "./Clock";
import "./Nav1.css";

function Nav1() {
    return (
        <>
            <div className="top-links">
            <Link to="/repository">Institutional Repository</Link>
                <span>|</span>
                <Link to="/epaper">E-Paper Dailies</Link>
                <span>|</span>
                <Link to="/quickreads">Short Loan Books</Link>
                <span>|</span>
                <Link to="/openhours">Opening Hours</Link>
                <span>|</span>
                <Link to="https://app.myloft.xyz/user/login?institute=ckel2vfcjsh3209388qwmzl1v">Past Exam Papers</Link>
                <span>|</span>
                <Link to="/..">Library Exit Survey</Link>
                <span>|</span>
                <Clock />
                <span>|</span>
                <div className="email">
                <Link to="/ask-librarian">Email: library@gau.ac.ke</Link>
                </div>
            </div>
        </>
    );
}

export default Nav1;
