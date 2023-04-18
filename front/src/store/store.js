import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../pages/map/mapSlice";
const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
