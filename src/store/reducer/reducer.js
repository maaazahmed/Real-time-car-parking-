import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    isLoader: false,
    areaName: "",
    parkinID: "",
    allBooking: [],
    slots: [],
    mySlots: [],
    activeArr: [],
    currentUser: {},
    parkingList: [],
    sselectedData: {},
    isRegisterError: "",
    userLst: [],
    parkingTime: [
        // {
        //     active:false,
        //     sloteNumber: " slots[index].sloteNumber",
        //     areaName: " slots[index].areaName",
        //     parkinID: "slots[index].parkinID",
        //     nodeNumber: "index",
        //     endTime: "slots[index].endTime",
        //     startTime: "slots[index].startTime",
        //     currentUserID: "slots[index].currentUserID",
        // }
    ]
}
// DELETE_SLOT:"DELETE_SLOT",


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.IS_SIGN_LODER:
            return ({
                ...state,
                isLoader: action.payload
            })
        case ActionTypes.IS_REGISTER_ERROR:
            return ({
                ...state,
                isRegisterError: action.payload
            })
        case ActionTypes.PARKING_LIST:
            return ({
                ...state,
                parkingList: [...state.parkingList, action.payload]
            })

        case ActionTypes.PARKING_ID:
            return ({
                ...state,
                parkinID: action.payload
            })
        case ActionTypes.SLOTS_:
            return ({
                ...state,
                slots: action.payload
            })

        case ActionTypes.SELECTED_DATA:
            return ({
                ...state,
                sselectedData: action.payload
            })
        case ActionTypes.MY_SLOTS:
            return ({
                ...state,
                mySlots: [...state.mySlots, action.payload]
            })

            case ActionTypes.DELETE_SLOT:
            return ({
                ...state,
                mySlots: [...action.payload]
            })
            case ActionTypes.DELETE_BOOKINGs:
            return ({
                ...state,
                allBooking: [...action.payload]
            })


        case ActionTypes.AREA_NAME:
            return ({
                ...state,
                areaName: action.payload
            })
        case ActionTypes.EMPTY_PARKING_LIST:
            return ({
                ...state,
                mySlots: []
            })

        case ActionTypes.EMPTY_PARKING_SELECT:
            return ({
                ...state,
                parkingList: []
            })
        case ActionTypes.CURRENT_USER:
            return ({
                ...state,
                currentUser: action.payload
            })

        case ActionTypes.ALL_BOOKING:
            return ({
                ...state,
                allBooking: [...state.allBooking, action.payload]
            })

        case ActionTypes.USER_LIST:
            return ({
                ...state,
                userLst: [...state.userLst, action.payload]
            })


        case ActionTypes.EMPTY_STATE:
            return ({
                state: []
            })

        case ActionTypes.PARKING_TIME:
            return ({
                ...state,
                parkingTime: [...state.parkingTime, action.payload]
            })
            case ActionTypes.EMPTY_ALL_BOOKING_LIST:
            return ({
                ...state,
                allBooking: []
            })
        default:
            return state;
    }

}