import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: {
    name: "",
    date: "",
    time: "",
    truechoice: 0,
    questions: [
      {
        question: "",
        choices: [
          {
            choice: "",
            isTrue: false,
          },
        ],
      },
    ],
    previousQuestions: [], // Önceki soruları içeren dizi
    prizes: [
      {
        rank: "",
        prize: "",
      },
    ],
    sponsors: [
      {
        name: "",
        photo: "",
        prize: "",
      },
    ],
    previousSponsors: [], // Önceki sponsorları içeren dizi
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizDataByKey: (state, action) => {
      const { key, value } = action.payload;
      state.quiz[key] = value;
    },
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      // Önceki soruları ekleyin
      state.quiz.previousQuestions.push(state.quiz.questions);
      state.quiz.questions.push(newQuestion);
    },
    addSponsors: (state, action) => {
      const newSponsor = action.payload;
      // Önceki sponsorları ekleyin
      state.quiz.previousSponsors.push([state.quiz.sponsors]);
      state.quiz.sponsors.push(newSponsor);
    },
    
  },
});

export const { setQuizDataByKey, addQuestion,addSponsors } = quizSlice.actions;
export default quizSlice.reducer;