import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {toast} from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosInstance"

const initialState={
    courseData:[]
}

export const getAllCourses=createAsyncThunk("/course/get",async () => {
    try {
        
        const response = axiosInstance.get("/courses")
        toast.promise(response,{
            loading:'Fetching Courses',
            success:"Courses Loaded SuccessFully",
            error:'Failed to fetch courses'
        })

        return (await response).data.courses
    } catch (error) {

        toast.error(error?.response?.data?.message)

    }
})

const courseSlice=createSlice({
    name:'courses',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{

    }
})

export default courseSlice.reducer
