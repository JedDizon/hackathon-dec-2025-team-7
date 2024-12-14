import React from 'react';

const Doors = ({ updateDays, days }) => {

    const today = new Date();
    const currentDay = today.getDate();

    const handleClick = (event, day) => {
        const button = event.target;

        if(button.dataset.clicked === "false" && day <= currentDay) {
            button.dataset.clicked = "true";
            updateDays(day);
            button.classList.add("opened");
        }

        console.log("You clicked me on day:", day);
    }

    const daysOfMonth = [...Array(24).keys()].map(i => i + 1);

    return (
        <div className="doors">
            {daysOfMonth.map(day => {
                const isOpened = days.includes(day);

                return (
                    <button key={day} 
                    onClick={(event) => handleClick(event, day)} 
                    className={`door ${isOpened ? 'opened' : ''}`} 
                    data-clicked={isOpened ? "true" : "false"}> 
                    {day} 
                    </button>
                )
            })}
        </div>
    )
}

export default Doors;