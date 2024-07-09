import { createSlice } from "@reduxjs/toolkit";
import { IUserAuth } from "../../utils/Types/interface";

const INITIAL_STATE: IUserAuth = {
    authDetails: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        getAuthDetail: (state, action) => {
            state.authDetails = action.payload;
        }
    },
});

export const { getAuthDetail } = authSlice.actions;
export default authSlice.reducer;