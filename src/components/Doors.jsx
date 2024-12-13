import React from 'react';

const Doors = () => {

    const today = new Date();
    const currentDay = today.getDate();

    const handleClick = (event, day) => {
        const button = event.target;

        if(button.dataset.clicked === "false" && day <= currentDay) {
            button.dataset.clicked = "true";
            button.classList.add("opened");
        }

        console.log("You clicked me on day:", day);
    }

    const days = [...Array(24).keys()].map(i => i + 1);

    return (
        <div className="doors">
            {days.map(day => (
                <button key={day} onClick={(event) => handleClick(event, day)} className="door" data-clicked="false">
                    {day}
                </button>
            ))}
        </div>
    )
}

export default Doors;