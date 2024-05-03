import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../src/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Header variant="guest" />
    </React.StrictMode>,
);
