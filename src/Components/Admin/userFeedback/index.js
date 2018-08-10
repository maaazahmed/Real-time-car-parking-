import React, { Component } from 'react';
import './index.css';
import Header from "../../AppBar/index"
import firebase from "firebase";
import { connect } from "react-redux"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { FeedbackAction, FeedbackActionEmpty, EmptyParkingList } from "../../../store/action/action"
import Typography from '@material-ui/core/Typography';

// this.props.EmptyParkingList()

let database = firebase.database().ref("/")
class UserFeedback extends Component {
    constructor() {
        super()
        this.state = {
            currentUserID: "",
            feedbackVal: ""
        }
    }



    componentWillMount() {
        database.child("Feedback").on("child_added", (snap) => {
            let obj = snap.val()
            obj.id = snap.key
            console.log(obj)
            this.props.FeedbackAction(obj)
        })
    }

    componentWillUnmount() {
        this.props.FeedbackActionEmpty()
    }





    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 style={{ textAlign: "center", color: "#3f51b5" }} >Feedbacks</h1>
                {this.props.feedList.feedback.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <Card className="user_feedback_card" >
                                <CardContent>
                                    <div className="username-div" >
                                        {val.username}
                                    </div>

                                    <Typography component="p">
                                        {val.feedback}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions style={{ justifyContent: "flex-end" }} >
                                    <Button color="secondary" >
                                        Delete
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                    )
                })}

            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return ({
        feedList: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        FeedbackAction: (data) => {
            dispatch(FeedbackAction(data))
        },

        FeedbackActionEmpty: () => {
            dispatch(FeedbackActionEmpty())
        },
        EmptyParkingList: () => {
            dispatch(EmptyParkingList())
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(UserFeedback)

