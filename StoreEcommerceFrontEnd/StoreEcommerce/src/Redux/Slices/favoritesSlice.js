import { createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("favorites/getFavorites" , async () => {
    const res = "helpers fetch";
    // console.log(res.data);
    return  res.data;
})

export const favoritesSlice = createSlice({
    name: "favorites",
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

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;