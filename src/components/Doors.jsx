import React from 'react';
import "../assets/styles/surprise.css";

const Doors = ({ updateDays, days, onOpenPopup }) => {

    const today = new Date();
    const currentDay = today.getDate();

    const handleClick = (event, day) => {
        const button = event.target;

         if(day <= currentDay) {
            onOpenPopup(day);
        }

        if(button.dataset.clicked === "false" && day <= currentDay) {
            button.dataset.clicked = "true";
            updateDays(day);
            button.classList.add("opened");
        }
    }

    const daysOfMonth = [...Array(24).keys()].map(i => i + 1);

    return (
        <div className="doors">
            {daysOfMonth.map(day => {
                const isOpened = days.includes(day);

                return (
                    <button key={day} 
                    onClick={(event) => handleClick(event, day)} 
                    className={`door ${isOpened ? 'opened' : ''} ${day <= currentDay ? 'active' : ''}`} 
                    data-clicked={isOpened ? "true" : "false"}> 
                    {day <= currentDay ? "" : "🔒"}
                    {day} 
                    </button>
                )
            })}
        </div>
    )
}

export default Doors;