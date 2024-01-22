
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../helper/axiosInstance";
import { useNavigate } from "react-router-dom";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
}
export const createAccount = createAsyncThunk("/signup", async (data) => {
 try {
     const res = axiosInstance.post("/auth/register", data);
     toast.promise(res, {
         loading: "Wait! creating your account",
         success: (data) => {
             console.log(data)
             return data?.data?.msg;
         },
         error: "Failed to create account"
     });
     return (await res).data;
 } catch (error) {
     toast.error(error?.response?.data?.message);
 }
})


const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {},
 // extraReducers: (builder) => {
 //     builder
 //         .addCase(login.fulfilled, (state, action) => {
 //             localStorage.setItem('data', JSON.stringify(action?.payload?.user))
 //             localStorage.setItem('isLoggedIn', true);
 //             localStorage.setItem('role', action?.payload?.user?.role);
 //             state.isLoggedIn = true;
 //             state.data = action?.payload?.user;
 //             state.role = action?.payload?.user?.role;
 //         })
 //         .addCase(logout.fulfilled, (state) => {
 //             localStorage.clear()
 //             state.data = {};
 //             state.isLoggedIn = false
 //             state.role = "";
 //         })
 // }
})

// export const { } = authSlice.actions;
export default authSlice.reducer;