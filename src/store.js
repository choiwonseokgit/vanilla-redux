import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//       state.unshift({ text: action.payload.text, id: action.payload.id });
//     },
//     [deleteToDo]: (state, action) =>
//       state.filter((toDo) => toDo.id !== action.payload),
//   });

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.unshift({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action) => {
//       return state.filter((toDo) => toDo.id !== action.payload);
//     });
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload.text, id: action.payload.id });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
