import React from "react";
import ReactDOM from "react-dom/client";
import { Body, Footer, Header } from "./src/components";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
