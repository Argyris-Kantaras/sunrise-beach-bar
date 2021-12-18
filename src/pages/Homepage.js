import { Link } from "react-router-dom";
import classes from "./Homepage.module.css";
import logo from "../images/favicon.png";
const openEventsPage = function () {
  window.location.href = "#/events";
};

function Homepage() {
  return (
    <div className={classes.openingPage}>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} alt="logo" src={logo} />
          <h1 className={classes.title}>Sunrise Bar</h1>
        </div>
        <nav className={classes.links}>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/events">
            Events
          </Link>
          <Link className={classes.link} to="/contact-us">
            Contact-us
          </Link>
        </nav>
      </header>
      <div className={classes.slogan} onClick={openEventsPage}>
        <h1 className={classes.firstSlogan}>We make your dream party</h1>
        <h1 className={classes.secondSlogan}>into a real party!</h1>
      </div>
      <p className={classes.arrow}>
        <i className={classes.up}></i>
      </p>
      <p className={classes.arrow}>
        <i className={classes.up}></i>
      </p>
      <span className={classes.checkOut} onClick={openEventsPage}>
        Check this out!!!
      </span>
      <footer className={classes.footer}>
        <div className={classes.footLink}>
          <p className={classes.textOne}>
            Don't hesitate to{" "}
            <Link className={classes.linkFoot} to="/contact-us">
              Contact us
            </Link>
            <br />
            <p className={classes.textTwo}>...and book for an epic party!!!</p>
          </p>
        </div>
        <section className={classes.credit}>
          <p>
            This website was designed and developed by{" "}
            <a
              className={classes.profile}
              href="https://www.linkedin.com/in/argyris-kantaras-291277219/"
            >
              @Argyris Kantaras
            </a>
            .
          </p>
        </section>
      </footer>
    </div>
  );
}
export default Homepage;
