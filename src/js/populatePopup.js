// Fetch the JSON file
fetch("../src/surprises.json")
    .then(response => response.json())
    .then(data => {
        // Populate the Advent calendar
        populateCalendar(data);
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

// Function to populate the calendar with days
function populateCalendar(data) {
    const calendarContainer = document.getElementById('calendar');
    for (let day = 1; day <= 24; day++) {
        const dayButton = document.createElement('div');
        dayButton.classList.add('day');
        dayButton.textContent = day;  // Display the day number
        dayButton.onclick = () => showPopup(day, data[day]);
        calendarContainer.appendChild(dayButton);
    }
}

// Function to show the popup with the surprise for the clicked day
function showPopup(day, surpriseData) {
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = ''; // Clear any previous content

    // Check if the type is 'recipe' or 'trivia' and display accordingly
    if (surpriseData.type === "recipe") {
        // Recipe name
        const nameElement = document.createElement('h3');
        nameElement.textContent = surpriseData.name || 'No name provided';
        popupContent.appendChild(nameElement);

        //recipe image
        const imageElement = document.createElement('img');
        imageElement.src = surpriseData.image[0];
        imageElement.alt = surpriseData.name;
        imageElement.style.maxWidth = "100%";
        popupContent.appendChild(imageElement);

        //recipe ingredients
        const ingredientsElement = document.createElement('h4');
        ingredientsElement.textContent = 'Ingredients:';
        popupContent.appendChild(ingredientsElement);

        const ingredientsList = document.createElement('ul');
        surpriseData.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        popupContent.appendChild(ingredientsList);

        //recipe instructions
        const instructionsElement = document.createElement('h4');
        instructionsElement.textContent = 'Instructions:';
        popupContent.appendChild(instructionsElement);

        const instructionsList = document.createElement('ol');
        surpriseData.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });
        popupContent.appendChild(instructionsList);


    } else if (surpriseData.type === "trivia") {
        // display the trivia details
        const nameElement = document.createElement('h3');
        nameElement.textContent = surpriseData.name || 'No name provided';
        popupContent.appendChild(nameElement);

        const detailsElement = document.createElement('p');
        detailsElement.textContent = surpriseData.details ? surpriseData.details[0] : 'No details available';
        popupContent.appendChild(detailsElement);
    } else {
        // Handle unexpected type (if needed)
        popupContent.innerHTML = '<p>Content not available for this day.</p>';
    }

    // Show the popup
    const popup = document.getElementById('popup');
    popup.classList.add('active');
}