import { useState, useEffect } from "react";
import Home from "./components/Home";
import Doors from "./components/Doors";
import Popup from "./components/Popup";
import "./assets/styles/surprise.css";

function App() {
    const [days, setDays] = useState([]);
    const [popupData, setPopupData] = useState(null);
    const [surprises, setSurprises] = useState(null);

    useEffect(() => {
        fetch("/surprises.json")
            .then(response => response.json())
            .then(data => setSurprises(data))
            .catch(error => console.error("Error fetching surprises:", error));
    }, []);

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

    const handleClosePopup = () => {
        setPopupData(null);
    }

    const handleOpenPopup = (day) => {
        if(surprises) {
            setPopupData(surprises[day]);
        }
    }

    return (
        <>
        <Home />
        <Doors updateDays={updateDays} days={days} onOpenPopup={handleOpenPopup}/>
        {popupData && <Popup data={popupData} onClose={handleClosePopup}/>}
        </>
    )
}

export default App
