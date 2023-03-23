import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import rootReducer from "./rootReducer";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);
export default store;
