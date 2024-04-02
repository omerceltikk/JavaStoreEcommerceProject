import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchGetMethod } from "../FetchServices";

export const fetchFavoritesData = createAsyncThunk("favorites/getFavorites", async () => {
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
            .addCase(fetchFavoritesData.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.favorites = action.payload;
            })
            .addCase(fetchFavoritesData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchFavoritesData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
