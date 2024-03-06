import React from "react";
import ReactDOM from "react-dom/client";
import { Dialog } from "../lib/components/Dialog";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Dialog/>
        <div className="theme--light"></div>
    </React.StrictMode>,
);
