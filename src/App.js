import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ScrollToTop from "react-scroll-to-top";
import Scrollrender from "./Scrollrender/Scrollrender"
import Login from "./Login/Login";
import Forgetpasword from "./Forgetpassword/Forgetpassword";
import Signup from "./Signup/Signup";
import Newpassword from "./Newpassward/Newpassword";
import Productdetails from "./Productdetails/Productdetails";
import BookingForm from "./BookingForm/BookingForm";
import Aboutus from "./Aboutus/Aboutus";
import Estimate from "./Estimate/Estimate";
import UserDashboard from "./UserDashboard/UserDashboard";



function App() {
  return (
    <div className="App">
      <Router>


        <ScrollToTop />
        <Scrollrender />

        <Switch>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget-password" component={Forgetpasword} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/new-password" component={Newpassword} />
          <Route exact path="/Product-details" component={Productdetails} />
          <Route exact path="/Booking-Form" component={BookingForm} />
          <Route exact path="/About-us" component={Aboutus} />
          <Route exact path="/estimate" component={Estimate} />
          <Route exact path="/Dashboard" component={UserDashboard} />



        </Switch>

      </Router>
    </div>
  );
}

export default App;
