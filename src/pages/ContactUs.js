import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./ContactUs.module.css";

function ContactUs(props) {
  const forAll = useRef();

  const getCheckedBox = function (e) {
    console.log(e.target.checked);
    console.log(e.target.value);
  };

  return (
    <div className={classes.main}>
      <Link className={classes.link} to="/">
        Home
      </Link>
      <Link className={classes.link} to="/events">
        Events
      </Link>
      <div className={classes.inputs}>
        <h3 className={classes.contTitle}>Speak to us and leave the rest...</h3>
        <input className={classes.inpName} placeholder="Name" />
        <input className={classes.inpName} placeholder="Surname" />
        <input className={classes.inpName} type="email" placeholder="email" />
        <div className={classes.date}>
          <h3>Date that you would like to book</h3>
          <input className={classes.inpDate} type="date" placeholder="" />
        </div>
        <div className={classes.events}>
          <h3 className={classes.eventsTitle}>Choose an event</h3>
          <div className={classes.inp}>
            <label>Party 4 All</label>
            <input
              ref={forAll}
              onChange={getCheckedBox}
              checked={props.checked}
              name="events"
              value="Party 4 All"
              type="radio"
            />
          </div>
          <div className={classes.inp}>
            <label>Great Sunset</label>
            <input
              onChange={getCheckedBox}
              checked={props.checked}
              name="events"
              value="Great Sunset"
              type="radio"
            />
          </div>
          <div className={classes.inp}>
            <label>Night Party</label>
            <input
              onChange={getCheckedBox}
              checked={props.checked}
              name="events"
              value="Night Party"
              type="radio"
            />
          </div>
          <div className={classes.inp}>
            <label>Proposals</label>
            <input
              onChange={getCheckedBox}
              checked={props.checked}
              name="events"
              value="Proposals"
              type="radio"
            />
          </div>
          <div className={classes.inp}>
            <label>Weddings</label>
            <input
              onChange={getCheckedBox}
              checked={props.checked}
              name="events"
              value="Weddings"
              type="radio"
            />
          </div>
          <div className={classes.inp}>
            <label>Other</label>
            <input
              onChange={getCheckedBox}
              name="events"
              value="Other"
              type="radio"
            />
          </div>
        </div>
        <div className={classes.des}>
          <h4>Descriptions </h4>
          <textarea className={classes.desInput} type="text" />
        </div>
        <button className={classes.sendBtn}>Send</button>
      </div>
    </div>
  );
}

export default ContactUs;
