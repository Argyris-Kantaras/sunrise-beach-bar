import { Route, Routes } from "react-router";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Homepage from "./pages/Homepage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.main}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
