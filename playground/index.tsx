import React from "react";
import ReactDOM from "react-dom/client";
import { Drawer, Button } from "../src/main";

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleCloseDrawer = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Drawer
                width="300px"
                isOpen={isOpen}
                onCloseDrawer={handleCloseDrawer}
            >
                <Drawer.Header onCloseDrawer={handleCloseDrawer}>
                    Menu
                </Drawer.Header>
                <Drawer.Content className="custom-content">this is the ss</Drawer.Content>
                <Drawer.Footer className="custom-footer">Footer</Drawer.Footer>
            </Drawer>
            <Button size="sm" onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</Button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
