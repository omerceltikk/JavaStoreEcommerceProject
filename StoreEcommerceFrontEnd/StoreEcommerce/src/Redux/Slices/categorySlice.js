import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("characters/getCharacters" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const categorySlice = createSlice({
    name: "category",
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

export const {} = categorySlice.actions;

export default categorySlice.reducer;