import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("categories/getCategories", async () => {
    const res = FetchGetMethod("basket") ;
    return res;
});

export const basketsSlice = createSlice({
    name: "baskets",
    initialState: {
        baskets: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.baskets = action.payload;
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

export const {} = basketsSlice.actions;

export default basketsSlice.reducer;
