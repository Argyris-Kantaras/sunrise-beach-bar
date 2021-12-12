import { Link } from "react-router-dom";
import classes from "./EventItem.module.css";
const openContactPage = function () {
  window.location.href = "/contact-us";
};

function EventsItem(props) {
  return (
    <div className={classes.eventItem}>
      <h6 className={classes.title}>{props.title}</h6>
      <img className={classes.image} src={props.image} />
      <button onClick={openContactPage} className={classes.chooseBtn}>
        I want it
      </button>
      <div className={classes.text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default EventsItem;

{
}
