console.log("populatePopup linked")

// Function to dynamically display items based on the day in December
function displayAdventItem() {
    const today = new Date();
    const day = today.getMonth() === 11 ? today.getDate() : null; // Only use days in December

    if (!day || day < 1 || day > 24) {
        document.getElementById('display-items').innerHTML = "<p>No advent content for today!</p>";
        return;
    }

    const item = items[day.toString()];
    const displayDiv = document.getElementById('display-items');
    displayDiv.innerHTML = ""; // Clear previous content

    if (item.type === "recipe") {
        displayDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image[0]}" alt="${item.name}" style="width:100%;height:auto;">
            <h3>Ingredients:</h3>
            <ul>
                ${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                ${item.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
    } else if (item.type === "trivia") {
        displayDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.details}</p>
        `;
    } else if (item.type === "quiz") {
        displayDiv.innerHTML = `
            <h2>${item.question}</h2>
            <ul>
                ${item.answers.map(answer => `<li>${answer.text}</li>`).join('')}
            </ul>
        `;
    }
}

// Call the function to display items when the page loads
document.addEventListener('DOMContentLoaded', displayAdventItem);

