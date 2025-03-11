---
layout: post
title: Ingredient Search 
search_exclude: true
permalink: san_diego/ingredientsearch/
menu: nav/san_diego.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<title>Ingredient Search</title>
    
<style>
        body {
            font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
            margin: 0;
            padding: 0;
            background-color: rgb(71, 172, 255);
        }
        h2 {
            text-align: center;
            color: #333;
            margin-top: 30px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-top: 40px;
        }
        .filter-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        .filter-container input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            flex: 1;
        }
        .ingredient-list {
            list-style-type: none;
            padding: 0;
        }
        .ingredient-item {
            background-color: rgb(71, 172, 255);
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .ingredient-item img {
            width: 50px; /* Adjust size as needed */
            height: 50px;
            border-radius: 8px;
        }
        .no-results {
            text-align: center;
            color: #888;
            font-size: 18px;
            padding: 10px;
            background-color: rgb(0, 0, 0);
            border-radius: 8px;
        }
</style>

<body>

<div class="container">
    <h2>Ingredient Search</h2>

<div class="filter-container">
        <input type="text" id="ingredientSearch" placeholder="Enter ingredient (e.g., apple)" oninput="searchIngredients()">
        <input type="text" id="excludeIngredients" placeholder="Exclude ingredient (comma separated)" oninput="searchIngredients()">
    </div>

<ul id="ingredientList" class="ingredient-list">
        <li class="no-results">No ingredients found</li>
    </ul>
</div>

<script>
    const apiKey = '604b7a3a43354378ac49da4bb18925da'; // Replace with your API key

    function searchIngredients() {
        const ingredientSearch = document.getElementById("ingredientSearch").value.trim();
        const excludeText = document.getElementById("excludeIngredients").value.trim();
        const excludeList = excludeText ? excludeText.toLowerCase().split(',') : [];

        if (ingredientSearch === "" && excludeText === "") {
            document.getElementById("ingredientList").innerHTML = `<li class="no-results">Please enter an ingredient to search</li>`;
            return;
        }

        const url = new URL('https://api.spoonacular.com/food/ingredients/search');
        const params = {
            apiKey: apiKey,
            query: ingredientSearch,
            number: 10  // Limit number of results
        };

        Object.keys(params).forEach(key => {
            if (params[key]) {
                url.searchParams.append(key, params[key]);
            }
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    let ingredients = data.results;

                    // Filter out excluded ingredients
                    ingredients = ingredients.filter(ingredient =>
                        !excludeList.some(exclude => ingredient.name.toLowerCase().includes(exclude.trim()))
                    );

                    displayIngredients(ingredients);
                } else {
                    console.log("No data found or API response error");
                    displayIngredients([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayIngredients([]);
            });
    }

    function displayIngredients(ingredients) {
        const ingredientList = document.getElementById('ingredientList');
        ingredientList.innerHTML = ''; // Clear previous results

        if (ingredients.length === 0) {
            const noResultsItem = document.createElement('li');
            noResultsItem.classList.add('no-results');
            noResultsItem.textContent = 'No ingredients found';
            ingredientList.appendChild(noResultsItem);
            return;
        }

        ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('li');
            ingredientItem.classList.add('ingredient-item');

            // If image is available, add the image to the ingredient item
            const imageSrc = ingredient.image ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` : '';
            ingredientItem.innerHTML = `
                ${imageSrc ? `<img src="${imageSrc}" alt="${ingredient.name} image">` : ''}
                <strong>${ingredient.name}</strong>
            `;
            ingredientList.appendChild(ingredientItem);
        });
    }
</script>

</body>