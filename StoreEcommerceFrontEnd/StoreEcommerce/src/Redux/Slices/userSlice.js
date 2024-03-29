import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("categories/getCategories", async () => {
    const res = FetchGetMethod("auth") ;
    return res;
});

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.users = action.payload;
            })
            .addCase(fetchData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
