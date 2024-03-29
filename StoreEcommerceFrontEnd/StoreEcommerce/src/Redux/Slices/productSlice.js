import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("categories/getCategories", async () => {
    const res = FetchGetMethod("products") ;
    return res;
});

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.products = action.payload;
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

export const {} = productsSlice.actions;

export default productsSlice.reducer;
