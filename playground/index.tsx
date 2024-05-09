import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../src/main";

const App = () => {
    // const [isOpen, setIsOpen] = React.useState(false);

    const accountsList = [
        {
            loginid: "id1",
            icon: "icon1",
            title: "title1",
            isVirtual: true,
            isEu: true,
        },
        {
            loginid: "id2",
            icon: "icon2",
            title: "title2",
            isVirtual: true,
            isEu: false,
        },
        {
            loginid: "id3",
            icon: "icon3",
            title: "title3",
            isVirtual: false,
            isEu: false,
        },
        {
            loginid: "id4",
            icon: "icon4",
            title: "title4",
            isVirtual: true,
            isEu: true,
        },
        {
            loginid: "id5",
            icon: "icon5",
            title: "title5",
            isVirtual: false,
            isEu: true,
        },
    ]

    return (
        <Header>
            <Header.RightWrapper>
                <Header.AccountSwitcher accounts={accountsList}/>
            </Header.RightWrapper>
        </Header>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
