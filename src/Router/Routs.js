import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import {
    CreateAccount,
    LogIn,
    Dashboard,
    ViweBooking,
    AdminComponent,
    AllParkins,
    Users,
    Feedback,
    UserFeedback
} from "../Components/index"
import history from "../History"




class Routers extends Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>
                        <Route exact path="/CreateAccount" component={CreateAccount} />
                        <Route  path="/logIn" component={LogIn} />
                        <Route  path="/Dashboard" component={Dashboard} />
                        <Route  path="/ViweBooking" component={ViweBooking} />
                        <Route  path="/Admin" component={AdminComponent} />
                        <Route  path="/AllParkins" component={AllParkins} />
                        <Route  path="/Users" component={Users} />
                        <Route  path="/Feedback" component={Feedback} />
                        <Route  path="/UserFeedback" component={UserFeedback} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routers;
