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

    }

    /**
     * Recipe lists
     */
    const recipes = {
        recipe1: {
            name: "Panettone",
            ingredients: [
                "500g all-purpose flour",
                "100g sugar",
                "10g dry yeast",
                "150ml milk, warm",
                "4 eggs",
                "150g butter, softened",
                "100g raisins",
                "100g candied orange peel",
                "1 tsp vanilla extract",
                "Pinch of salt"
            ],
            instructions: [
                "In a small bowl, dissolve the yeast in warm milk and let it sit for about 10 minutes until frothy.",
                "In a large mixing bowl, combine flour, sugar, and salt. Add the yeast mixture, eggs, softened butter, and vanilla extract. Mix until combined, then knead for about 10 minutes until the dough is smooth and elastic.",
                "Gently fold in the raisins and candied orange peel until evenly distributed. Cover the bowl with a clean cloth and let the dough rise in a warm place until doubled in size, about 1.5–2 hours.",
                "Punch down the dough and shape it into a round ball. Place it into a panettone mold or a tall, round baking pan. Cover and let it rise again for another hour.",
                "Preheat your oven to 180°C (350°F). Bake the panettone for 35–40 minutes, or until golden brown and a skewer inserted into the center comes out clean.",
                "Allow the panettone to cool completely before slicing and serving."
            ],
            image: [
                "assets/images/pexels-tatianeherder-10530448.jpg"
            ]
        },
        recipe2: {
            name: "Lebkuchen",
            ingredients: [
                "250g honey",
                "100g sugar",
                "100g butter",
                "400g flour",
                "2 tsp baking powder",
                "2 tsp ground cinnamon",
                "1 tsp ground cloves",
                "1 tsp ground ginger",
                "1 egg",
                "100g chopped almonds",
                "Optional: icing sugar or chocolate glaze"
            ],
            instructions: [
                "In a saucepan, combine honey, sugar, and butter. Heat over low heat, stirring until everything is melted and combined. Let the mixture cool to room temperature.",
                "In a large bowl, sift together flour, baking powder, cinnamon, cloves, and ginger. Add the cooled honey mixture, egg, and chopped almonds. Mix until a dough forms.",
                "Wrap the dough in plastic wrap and refrigerate for at least 2 hours, or overnight for best results.",
                "Preheat the oven to 180°C (350°F). Roll out the dough on a floured surface to about 1cm thickness and cut into shapes using cookie cutters.",
                "Place the cookies on a baking sheet lined with parchment paper and bake for 10–12 minutes. Let them cool completely before glazing with icing or melted chocolate, if desired."
            ],
            image: [
                "assets/images/pexels-leefinvrede-29543318.jpg"
            ]
        },
        recipe3: {
            name: "Bibingka",
            ingredients: [
                "2 cups rice flour",
                "1 cup coconut milk",
                "3/4 cup sugar",
                "2 tsp baking powder",
                "2 eggs",
                "1/4 cup butter, melted",
                "Banana leaves (optional)",
                "Grated cheese and salted egg for topping"
            ],
            instructions: [
                "Preheat your oven to 180°C (350°F). If using banana leaves, soften them by briefly heating them over an open flame or dipping them in boiling water. Line a round baking pan with the banana leaves.",
                "In a mixing bowl, whisk together rice flour, sugar, and baking powder. Add the coconut milk, eggs, and melted butter, and stir until the batter is smooth and well combined.",
                "Pour the batter into the prepared baking pan. Arrange slices of salted egg and grated cheese on top of the batter.",
                "Bake in the preheated oven for 20–25 minutes, or until the top is golden brown and a toothpick inserted into the center comes out clean.",
                "Let the bibingka cool slightly before serving. It’s best enjoyed warm with additional butter or grated coconut, if desired."
            ],
            image: [
                "assets/images/bibinka.jpg"
            ]
        },
        recipe4: {
            name: "Irish Coffee",
            ingredients: [
                "1 cup hot brewed coffee",
                "1 shot (30ml) Irish whiskey",
                "1 tsp brown sugar",
                "Whipped cream"
            ],
            instructions: [
                "Brew a strong cup of coffee and pour it into a heatproof mug, leaving some room at the top.",
                "Stir in the brown sugar until fully dissolved. Adjust the sweetness to your taste.",
                "Add a shot of Irish whiskey to the coffee and stir gently to combine.",
                "Top with a generous layer of whipped cream. Pour it over the back of a spoon to help it float on top.",
                "Serve immediately and enjoy while hot."
            ],
            image: [
                "assets/images/pexels-matreding-10725922.jpg"
            ]
        },
        recipe5: {
            name: "Eggnog",
            ingredients: [
                "4 large eggs",
                "1/2 cup sugar",
                "2 cups whole milk",
                "1 cup heavy cream",
                "1/2 cup rum or bourbon (optional)",
                "1 tsp vanilla extract",
                "Nutmeg for garnish"
            ],
            instructions: [
                "In a medium saucepan, whisk together the eggs and sugar until smooth and pale.",
                "Slowly add the milk while whisking continuously to avoid lumps. Heat the mixture over medium-low heat, stirring constantly, until it thickens slightly and coats the back of a spoon. Do not let it boil.",
                "Remove the saucepan from heat and stir in the heavy cream, vanilla extract, and rum or bourbon if using.",
                "Transfer the eggnog to a pitcher and refrigerate for at least 2 hours, or until thoroughly chilled.",
                "Serve in glasses, topped with a sprinkle of freshly grated nutmeg."
            ],
            image: [
                "assets/images/pexels-jill-wellington-1638660-3309793.jpg"
            ]
        },
        recipe6: {
            name: "Hot Chocolate",
            ingredients: [
                "2 cups milk",
                "1/4 cup cocoa powder",
                "1/4 cup sugar",
                "1/2 cup dark chocolate, chopped",
                "1 tsp vanilla extract",
                "Whipped cream or marshmallows for topping"
            ],
            instructions: [
                "In a medium saucepan, combine milk, cocoa powder, and sugar. Whisk until well mixed and heat over medium heat until the mixture is warm, but not boiling.",
                "Add the chopped dark chocolate and stir until it is completely melted and the mixture is smooth.",
                "Remove from heat and stir in the vanilla extract.",
                "Pour the hot chocolate into mugs and top with whipped cream or marshmallows. Serve immediately."
            ],
            image: [
                "assets/images/pexels-pixabay-33156.jpg"
            ]
        }
    };

})
