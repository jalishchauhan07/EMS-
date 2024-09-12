import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchQuestions: any = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=3");
    const data = await response.json();
    return data;
  }
);
const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  status: "idle",
  error: null,
  correct: 0,
  incorrect: 0,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    correctAns(state) {
      state.correct += 1;
    },
    incorrectAns(state) {
      state.incorrect += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { nextQuestion, previousQuestion, correctAns, incorrectAns } =
  quizSlice.actions;

export default quizSlice.reducer;
