import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./enrollmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
