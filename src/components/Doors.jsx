import React from 'react';
import "../assets/styles/HomeDoors.css";

const Doors = () => {
    const handleClick = (day) => {
        console.log("You clicked me on day:", day);
    }

    const days = [...Array(24).keys()].map(i => i + 1);

    return (
        <div className="doors">
            {days.map(day => (
                <button key={day} onClick={() => handleClick(day)} className='door'>
                    {day}
                </button>
            ))}
        </div>
    )
}

export default Doors;