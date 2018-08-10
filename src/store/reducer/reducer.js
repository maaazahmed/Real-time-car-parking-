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
    parkingTime: [],
    feedback: []
}

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

        case ActionTypes.USER_FEEDBACK:
            return ({
                ...state,
                feedback: [...state.feedback, action.payload]
            })

        case ActionTypes.DELETE_SLOT:
            return ({
                ...state,
                mySlots: [...action.payload]
            })
        case ActionTypes.USER_FEEDBACK_EMPTY:
            return ({
                ...state,
                feedback: []
            })
        case ActionTypes.DELETE_BOOKINGs:
            return ({
                ...state,
                allBooking: [...action.payload]
            })

        case ActionTypes.DELETE_USER:
            return ({
                ...state,
                userLst: [...action.payload]
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

        case ActionTypes.PARKING_TIME_EMPTY:
            return ({
                ...state,
                parkingTime: []
            })

        case ActionTypes.EMPTY_USER_LIST:
            return ({
                ...state,
                userLst: []
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