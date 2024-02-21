import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../popUp/popUpSlice";
import quizReducer from "../createQuiz/quizSlice";
import dataReducer from "../quizData/quizDataSlice"
// import basketReducer from "../basket/basketSlice";
// import lengthReducer from "../productLength/lengthSlice";
export const store = configureStore({
  reducer: {
    popUp: uiReducer,
    createQuiz: quizReducer,
    quizData: dataReducer,
  },
});