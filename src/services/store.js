import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import rootReducer from "./rootReducer";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
export default store;
