import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("products/getproducts" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
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

export const {} = productsSlice.actions;

export default productsSlice.reducer;