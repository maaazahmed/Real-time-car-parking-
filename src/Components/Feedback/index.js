import React, { Component } from 'react';
import './index.css';
import Header from "../AppBar/index"
import firebase from "firebase";
// import { UserList, deleteUser } from "../../../store/action/action"
// import history from "../../../History"
import { connect } from "react-redux"
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


let database = firebase.database().ref("/")
class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            feedbackVal: ""
        }
    }

    onChangeHandler(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUser: user })
                database.child(`user/${user.uid}`).on("value", (snap) => {
                    let obj = snap.val()
                    obj.id = snap.key
                    this.setState({ currentUser: obj })

                })
            }
        });
    }

    submitFeedback() {
        if (this.state.feedbackVal !== "") {
            let obj = {
                feedback: this.state.feedbackVal,
                username: this.state.currentUser.username,
                currentUserID: this.state.currentUser.id
            }
            database.child("Feedback").push(obj)
        }
        else {
            alert("Please write somthing")
        }
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
                <h1 style={{ textAlign: "center" }} >Feedback</h1>
                <div>
                    <Card className="feedback_card" >
                        <CardContent>
                            <TextField
                                id="full-width"
                                multiline={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Placeholder"
                                fullWidth
                                margin="normal"
                                value={this.state.feedbackVal}
                                name="feedbackVal"
                                style={{overflow:"hidden"}}
                                onChange={this.onChangeHandler.bind(this)}
                            />
                        </CardContent>

                        <CardActions style={{ display: "flex", justifyContent: "center" }} >
                            <Button onClick={this.submitFeedback.bind(this)}
                                variant="contained" color="primary">Submit</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return ({
        userLis: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        // UserList: (data) => {
        //     dispatch(UserList(data))
        // },


    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Feedback)

