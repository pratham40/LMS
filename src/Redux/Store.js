import {configureStore} from "@reduxjs/toolkit"

import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import lectureSliceReducer from "./Slices/LectureSlice"
import razorpaySliceReducer from "./Slices/RazorPaySlice"

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        courses:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer
    },
    devTools:true
})

export default store