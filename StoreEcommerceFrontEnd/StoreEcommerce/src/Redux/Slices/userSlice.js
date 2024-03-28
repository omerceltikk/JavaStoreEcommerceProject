import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("users/getUsers" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userData: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: {
        [fetchData.fulfilled]: (state,action) => {
          
        },
        [fetchData.pending]: (state,action) => {
            state.status = "loading";
        },
        [fetchData.rejected]: (state,action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
})

export const {} = usersSlice.actions;

export default usersSlice.reducer;