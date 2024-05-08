import React from "react";
import ReactDOM from "react-dom/client";
import { Button, ContextMenu } from "../src/main";

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Button
                style={{ position: "relative" }}
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                Toggle Drawer
            </Button>

            <ContextMenu
                onClickOutside={() => setIsOpen(false)}
                isOpen={isOpen}
                style={{ position: "absolute", top: 40, left: 0 }}
            >
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </ContextMenu>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
