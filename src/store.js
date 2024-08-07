import { combineReducers, legacy_createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const persistConfig = {
  key: "toDo",
  storage: storage,
};
const allReducer = combineReducers({
  reducer,
});

const store = legacy_createStore(persistReducer(persistConfig, allReducer));

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
