import React from "react";
import ReactDOM from "react-dom/client";
import { RouteManager } from "./src/routes/RouteManager";
import { Provider } from "react-redux";
import store from "./src/services/store";


const App = () => {
  return (
    <Provider store={store}>
      <RouteManager />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
