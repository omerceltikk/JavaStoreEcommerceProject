import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("orders/getOrders" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        categories: [],
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

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;