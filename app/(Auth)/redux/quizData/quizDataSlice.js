import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    isInit: false,
    question: null,
    options: [],
    answer: '',
    countDown: 0,
    selectedOptions: '',
    isWaiting: 0,
    isGameOver: 0,
};

export const dataslice = createSlice({
    name: "quizData",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setIsInit: (state, action) => {
            state.isInit = action.payload;
        },
        setQuestion: (state, action) => {
            state.question = action.payload;
        },
        setOptions: (state, action) => {
            state.options = action.payload;
        },
        setAnswer: (state, action) => {
            state.trueAnswer = action.payload;
        },
        setCountDown: (state, action) => {
            state.countDown = action.payload;
        },
        setSelectedOptions: (state, action) => {
            state.selectedOptions = action.payload;
        },
        setIsWaiting: (state, action) => {
            state.isWaiting = action.payload;
        },
        setGameOver: (state,action)=>{
            state.isGameOver = action.payload;
        }

    },
});

export const {
    setUsername,
    setIsInit,
    setQuestion,
    setOptions,
    setAnswer,
    setCountDown,
    setSelectedOptions,
    setIsWaiting,
    setGameOver,

} = dataslice.actions;
export default dataslice.reducer;