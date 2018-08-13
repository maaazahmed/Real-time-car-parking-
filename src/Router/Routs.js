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

//  const Main = ()=>{
//     let checkAouth = localStorage.getItem("token")
//     if (checkAouth == null) {
//         return history.push("/logIn");
//     }
//     // else{
//     //     return history.push("/Dashboard");
//     // }
//  }




class Routers extends Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>

                        {/* <Route exact path="/" component={Main} /> */}
                        <Route  exact path="/" component={LogIn} />
                        <Route  path="/CreateAccount" component={CreateAccount} />
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
