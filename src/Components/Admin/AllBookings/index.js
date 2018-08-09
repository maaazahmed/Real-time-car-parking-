import React, { Component } from 'react';
import './index.css';
import { connect } from "react-redux"
import * as firebase from "firebase"
import Header from "../../AppBar/index"
import { AllBookings, deleteAllbooking } from "../../../store/action/action"
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import history from "../../../History"

let database = firebase.database().ref("/")
class AllParkins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUserID: "",
            endTime: ""
        }
    }


    componentWillMount() {
        let checkAouth = localStorage.getItem("token")
        if (checkAouth == null) {
            history.push("/logIn");
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUserID: user.uid })
            }
        });
        database.child("parking-time/").on("child_added", (snap) => {
            let obj = snap.val()
            obj.id = snap.key
            this.props.AllBookings(obj)
        })
    }


    deleteParking(data, indexNum) {
        let slots = {
            active: false,
            areaName: "Parking 1",
            currentUserID: null,
            endTime: null,
            index: data.nodeNumber,
            parkinID: data.parkinID,
            sloteNumber: data.sloteNumber,
            startTime: null,
        }
        let allBooking = this.props.BookingLis.allBooking
        allBooking.splice(indexNum, 1);
        allBooking.slice(0, indexNum).concat(allBooking.slice(indexNum + 1))
        database.child(`parking-time/${data.id}`).remove()
        database.child(`Parkings/${data.parkinID}/bookingArr/${data.nodeNumber}/`).set(slots)
        this.props.deleteAllbooking(allBooking)
    }

    render() {
        return (
            <div>
                <div>
                    <Header heading="Booking" />
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                    {this.props.BookingLis.allBooking.map((newVal, newInd) => {
                        return (
                            <div key={newInd}>
                                <div>
                                    <Card className="slots_button_list">
                                        <CardContent
                                            className="CardContent_class">
                                            <div style={{ display: "flex", alignItems: "center" }} >{newVal.areaName}</div>
                                            <div style={{ display: "flex", alignItems: "center" }} >Slote No {newVal.sloteNumber}</div>
                                            <div style={{ display: "flex", alignItems: "center" }} >{new Date(newVal.startTime).toLocaleString()}</div>
                                            <div style={{ display: "flex", alignItems: "center" }} >To</div>
                                            <div style={{ display: "flex", alignItems: "center" }} >{new Date(newVal.endTime).toLocaleString()}</div>
                                            <div>
                                                <IconButton
                                                    style={{ display: "flex", alignItems: "center" }} onClick={this.deleteParking.bind(this, newVal, newInd)} >
                                                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                    </svg>
                                                </IconButton>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProp = (state) => {
    return ({
        BookingLis: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        AllBookings: (data) => {
            dispatch(AllBookings(data))
        },
        deleteAllbooking: (data) => {
            dispatch(deleteAllbooking(data))
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(AllParkins)

