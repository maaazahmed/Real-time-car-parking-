import React, { Component } from 'react';
import './index.css';
import { connect } from "react-redux"
import * as firebase from "firebase"
import Header from "../../AppBar/index"
import { AllBookings, currentUserData } from "../../../store/action/action"
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


let database = firebase.database().ref("/")
class AllParkins extends Component {
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             // console.log(user.uid)
    //             database.child(`user/${user.uid}`).on("value", (snapshot) => {
    //                 let user = snapshot.val()
    //                 user.id = snapshot.key
    //                 this.props.currentUserData(user)
    //             })
    //         }
    //     });
    // }
    componentDidMount() {
        database.child("Parkings/").on("child_added", (snap) => {
            let obj = snap.val()
            obj.id = snap.key
            this.props.AllBookings(obj)
            //   console.log(snap.val())

        })
    }
    render() {
        console.log(this.props.BookingLis.allBooking)
        return (
            <div>
                <div>
                    <Header heading="Booking" />
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    {this.props.BookingLis.allBooking.map((val)=>{
                        return(
                             val.bookingArr.map((newVal, newInd)=>{
                                //  console.log(newVal)
                               return(
                                   <div key={newInd}>
                                   {( newVal.active)?
                                <div>
                                  <Card className="slots_button_list">
                                    <CardContent
                                      className="CardContent_class">
                                      <div style={{ display: "flex", alignItems: "center" }} >{newVal.areaName}</div>
                                      <div style={{ display: "flex", alignItems: "center" }} >Slote No {newVal.sloteNumber}</div>
                                      <div>
                                        <IconButton
                                        style={{ display: "flex", alignItems: "center" }} >
                                          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                          </svg>
                                        </IconButton>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                                : null}
                              </div>
                            )
                        })
                    )
                    })}
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
        // currentUserData: (data) => {
        //     dispatch(currentUserData(data))
        // },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(AllParkins)

