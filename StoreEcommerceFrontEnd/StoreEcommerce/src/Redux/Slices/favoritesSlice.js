import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("categories/getCategories", async () => {
    const res = FetchGetMethod("favorites") ;
    return res;
});

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.favorites = action.payload;
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

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
