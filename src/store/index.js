import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import settingsReducer from "./settings/settingsSlice"
 const store = configureStore({
  reducer: {
    auth: authReducer, 
     settings: settingsReducer,
  },
});

export default store;

