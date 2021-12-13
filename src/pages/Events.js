import { Link } from "react-router-dom";

import classes from "./Events.module.css";
import sports from "../images/water-sports.png";
import sunset from "../images/Sunset.jpg";
import nightParty from "../images/night-party.jpg";
import proposal from "../images/proposal.jpg";
import wedding from "../images/wedding.jpg";
import EventsItem from "./EventItem";

function Events() {
  return (
    <div className={classes.events}>
      <h1 className={classes.title}>Our Events</h1>
      <div>
        <EventsItem
          title="Party 4 All"
          image={sports}
          text="We can offer you a daytime party with many water sport options. This
            package is ideal when guests have kids with them. A time for
            everyone to enjoy holidays and have fun."
        />
      </div>

      <div id="item2" className={classes.right}>
        <EventsItem
          title="Great Sunset"
          image={sunset}
          text="Our specialty to create romance. The best time to start a great night
          and relax before the real party set sail. Ideal for groups that look
          for some romance time as well!!!"
        />
      </div>
      <div id="item3">
        <EventsItem
          title="Night Party"
          image={nightParty}
          text="  As the night falls, we wake up. Don't stop dancing and having fun in
          our place with music by #1 DJ of the area. This contains a buffet with
          a large variety of food and drinks.(* This package also can contain
          professional dancers female/male as an addition. Just let us know!!!"
        />
      </div>
      <div id="item4" className={classes.right}>
        <EventsItem
          title="Proposals"
          image={proposal}
          text=" Like we already said we have the skill to create romance. Prepare a
            proposal to your love, with our help can be unforgetable!"
        />
      </div>
      <div id="item5">
        <EventsItem
          title="Weddings"
          image={wedding}
          text=" Also get your wedding by the beach. If you are looking for a wedding
            that never imagined then just come to us. We take care of all the
            setup according to your taste. All you have to do is get dressed...
            (*You have your first wedding night in a luxury villa from us.)"
        />
      </div>

      <footer className={classes.footer}>
        <div className={classes.footLink}>
          <p className={classes.text}>
            We can do also events that are not listed. Just{" "}
            <Link className={classes.linkFoot} to="/contact-us">
              Contact us
            </Link>{" "}
            and let us know what you need
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

export default Events;
