import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Task 1" },
  { id: 2, text: "Task 2" },
];
export const cardsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.find((todo) => todo.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTask, editTask } = cardsSlice.actions;

export default cardsSlice.reducer;
