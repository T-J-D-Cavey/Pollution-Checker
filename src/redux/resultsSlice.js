import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to retrive air pollution score based on nearest station to user IP address:
export const getScore = createAsyncThunk(
    'results/getResults',
    async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const result = {
            aqi: [data.data.aqi],
            location: [data.data.city.name],
            url: [data.data.city.url]
        };
        return result;
    }
)


const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        score: null,
        zone: null,
        location: null,
        link: null,
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
                state.link = action.payload.url;
                state.status = 'success';
            })
            .addCase(getResults.rejected, (state) => {
                state.status = 'failed';
            })    
    }
})