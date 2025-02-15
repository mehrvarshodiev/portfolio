import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import themeReducer from "./feature/theme/themeSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
