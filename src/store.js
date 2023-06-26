

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Slicer/slicer.jsx";

const reducer = {
  todos: todosReducer
};

const store = configureStore({
  reducer
});

export default store;