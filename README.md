# Pollution Checker - How clean is the air today?

Check air quality and pollution near you with this 'Pollution checker' web app: *URL to be added here*. 

## What is this project?

This app uses the World Air Quality Index (WAQI) API to check the levels of local air pollution and provides health implications based on the results. The appearance of the app will vary depending on the local air quality at that time. 

This is a portfolio project intended to showcase front end web development skills.

## How to use the Pollution Checker?

When you visit the site, you should be presented with a header and a button. Click or tap on this button and the app will make a call to an API that uses the geo-location of your IP address to find the nearest air quality station to you. 

Based on the results of this, you'll be taken to a screen that shows you the air quality index (score), and health implications based on this score.

You'll also see links to other resources that explain what the WAQI is, what air pollution is, and a global campaign page called 'Action for clearn air'.

## Why was this project made?

This project was made in order to showcase and reinforce learnings of how React components and Redux state management work together, working with a third party API and providing a function for users.

It's not perfectly written and could be refactored in a number of places. The focus was to keep all 'state' within the redux store, to make the appearance dynamic based on the current local air quality (based on the results of the API response), and to be fast performing.

## What is this project made with?

- React
- Redux
- NPM
- Javascript
- CSS
- VSCode
- Git & Github

### Any call outs on the structure or function of the app?

#### When does the call to the API get made?

There hasn't been a 'loading' page created for this app. Despite createAsyncThunk and CreateSlice redux functions allowing a pending state, the call to the WAQI API is made when the '/' homepage is rendered. As a result, the app state 'extra reducers' will either be set to 'failed' or 'fullfilled' by the time the user clicks on the button to request the results.

#### How do the dynamic styles work based on the results of the API?

I created an array which lists all the options for air quality, including AQI, level, implications and associated colour. I then set the 'zone' state based on the results to a number between 0-5. This correlates to the index of the array that is assocated with that air quality range. I then apply a dynamic className to the div container of the results component. I apply all of the styles using this class to target that element and its decendants. 

## What license do you have?

MIT License

Copyright (c) 2023 Tim Cavey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
