import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/NavComponent";
import Body from "./components/BodyComponent";
import Filter from "./components/FilterComponent";

const App = () => (
    <div className="app">
        <Nav />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);