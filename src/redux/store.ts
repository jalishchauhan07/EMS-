import { configureStore } from "@reduxjs/toolkit";

import examReducer from "./reducer";

export const store = configureStore({
  reducer: {
    quizSlice: examReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
