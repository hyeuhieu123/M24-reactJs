import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/B1";
import randomReducer from "./reducers/B2";
import changeStatus from "./reducers/B3";
import changeRow from "./reducers/B4";
import menuReducer from "./reducers/B5";
import languageReducer from "./reducers/B6";
import listUserReducer from "./reducers/B7";

export const store = configureStore({
  reducer: {
    counts: countReducer,
    random: randomReducer,
    change: changeStatus,
    changes: changeRow,
    menu: menuReducer,
    language: languageReducer,
    list: listUserReducer,
  },
});
