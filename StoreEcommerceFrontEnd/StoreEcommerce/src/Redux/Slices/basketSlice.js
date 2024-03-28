import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("baskets/getBaskets" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basketData: [],
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

export const {} = basketSlice.actions;

export default basketSlice.reducer;