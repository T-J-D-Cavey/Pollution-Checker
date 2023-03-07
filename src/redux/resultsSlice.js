import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to retrive air pollution score based on nearest station to user IP address:



const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        score: null,
        zone: null,
        location: {
            lat: null,
            long: null
        },
        status: null
    },
    reducers: {
        changeZone: (state, action) => {
            state.zone = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getResults.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getResults.fulfilled, (state, action) => {
                state.score = action.payload.aqi;
                state.location = action.payload.location;
                state.status = 'success';
            })
            .addCase(getResults.rejected, (state) => {
                state.status = 'failed';
            })    
    }
})