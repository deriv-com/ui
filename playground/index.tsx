import React from "react";
import ReactDOM from "react-dom/client";
import {
    LegacyFullscreen1pxIcon,
    LegacyHandleMoreIcon,
} from "@deriv/quill-icons";
import { Header } from "../src/main";
import { Text } from "../src/main";

const App = () => (
    <div style={{ margin: "50px", display: "flex" }}>
        <Header.MenuItem
            as="button"
            leftComponent={<LegacyFullscreen1pxIcon width={16} height={16} />}
            rightComponent={<LegacyHandleMoreIcon width={16} height={16} />}
        >
            <span style={{ padding: "8px 16px" }}>
                <Text size="md">Home</Text>
            </span>
        </Header.MenuItem>
    </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
