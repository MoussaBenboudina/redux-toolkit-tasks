import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/CardsSlice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
