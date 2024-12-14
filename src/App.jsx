import { useState, useEffect } from "react";
import Home from "./components/Home";
import Doors from "./components/Doors";
import "./assets/styles/HomeDoors.css";

function App() {
    const [days, setDays] = useState([]);

    function saveDaysToLocalStorage(openedDays) {
        localStorage.setItem("days", JSON.stringify(openedDays));
    }

    function updateDays(day) {
        const openedDays = [...days, day];
        setDays(openedDays);
        saveDaysToLocalStorage(openedDays);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let storedDays = localStorage.getItem("days");
        if (!storedDays) {
            return;
        }

        storedDays = JSON.parse(storedDays);
        setDays(storedDays);
    }, []);

    return (
        <>
        <Home />
        <Doors updateDays={updateDays} days={days}/>
        </>
    )
}

export default App
