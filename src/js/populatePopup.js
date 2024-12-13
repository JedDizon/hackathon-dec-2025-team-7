document.addEventListener("DOMContentLoaded", () => {

    // Global references to HTML elements
    let recipeTitle = document.getElementById("specific-recipe");
    let recipeIngredients = document.getElementById("recipe-ingredients");
    let recipeInstructions = document.getElementById("recipe-instructions");

    // Button event listener
    const recipeButton = document.getElementById("show-recipe");
    recipeButton.addEventListener("click", () => {
        displayRecipe('recipe1');
    });



    /**
     * Display Recipe Title
     */
    function loadRecipeTitle(title) {
        recipeTitle.textContent = title;
    }

    /**
     * Display Recipe Ingredients list
     */
    function loadRecipeIngredients(ingredients) {
        recipeIngredients.innerHTML = ""; // Clear previous content
        ingredients.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            recipeIngredients.appendChild(li);
        });
    }

    /**
     * Display Recipe Instructions
     */
    function loadRecipeInstructions(instructions) {
        recipeInstructions.innerHTML = ""; // Clear previous content
        instructions.forEach((step, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${step}`;
            recipeInstructions.appendChild(li);
        });
    }



    /**
     * Display the Specific Recipe
     */
    function displayRecipe(recipeKey) {
        const recipe = recipes[recipeKey]; // Get the recipe by key
        if (!recipe) {
            console.error(`Recipe "${recipeKey}" not found.`);
            recipeTitle.textContent = "Recipe Not Found!";
            return;
        }
        loadRecipeTitle(recipe.name); // Load title
        loadRecipeIngredients(recipe.ingredients); // Load ingredients
        loadRecipeInstructions(recipe.instructions); // Load instructions

        //Load image
        const recipeImage = document.getElementById("recipe-image");
        if (recipe.image) {
            recipeImage.src = recipe.image;
            recipeImage.style.display = "block";
        } else {
            recipeImage.style.display = "none";
        }

        //Remove & add hidden class
        const hiddenRemoval = document.getElementById("recipe-section")
        hiddenRemoval.classList.remove("hidden"); //remove hidden class to show recipe
        const hiddenAddition = document.getElementById("show-recipe")
        hiddenAddition.classList.add("hidden"); //add hidden class to remove button after clicked by user

    }

})
