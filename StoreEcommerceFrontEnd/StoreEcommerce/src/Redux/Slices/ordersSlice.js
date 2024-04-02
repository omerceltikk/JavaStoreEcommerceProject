import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrdersData = createAsyncThunk("orders/getOrders", async () => {
    const res = FetchGetMethod("orders") ;
    return res;
});

export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrdersData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.orders = action.payload;
            })
            .addCase(fetchOrdersData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchOrdersData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
