import { Route, Routes } from "react-router";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Homepage from "./pages/Homepage";
import classes from "./App.module.css";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className={classes.main}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
