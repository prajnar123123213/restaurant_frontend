---
layout: post
title: Learn 🤔
search_exclude: true
permalink: /create_and_compete/zoominguess
menu: nav/create_and_compete.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---
<center>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>African Recipes Finder</title>
</center>
 <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #a69c6c;
        color: #96a66c;
        margin: 20px;
    }
    h1 {
        color: #2c3e50;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #a69c6c;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    select, button {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .recipe-output {
        margin-top: 20px;
        padding: 20px;
        background-color: #96a66c;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>
<body>
    <h1 style="
    color: #d2b48c; /* Light brown (Tan) */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 3.5em; /* Adjusted size for emphasis */
">African Recipes Finder</h1>
    <div class="container">
        <form id="recipeForm">
            <label for="country">Choose a Country in Africa:</label>
            <select id="country">
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Kenya">Kenya</option>
                <option value="Ghana">Ghana</option>
            </select>
            <label for="type">Sweet or Savory?</label>
            <select id="type">
                <option value="sweet">Sweet</option>
                <option value="savory">Savory</option>
            </select>
            <button type="button" onclick="getRecipe()">Get Random Recipe</button>
        </form>
        <div id="recipeOutput" class="recipe-output">
            <!-- Recipe output will be displayed here -->
        </div>
    </div>
 <script>
        const API_KEY = 'e956342f5c504b1685b5f81826a61c9b'; // Replace with your Spoonacular API key
        const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
        async function getRecipe() {
            const country = document.getElementById("country").value;
            const type = document.getElementById("type").value;
            // Map country and type to search parameters
            const cuisine = country; // Assuming Spoonacular supports cuisine as country name
            const query = type === 'sweet' ? 'dessert' : 'main course'; // Map 'sweet' to desserts and 'savory' to main courses
            // Build the API URL
            const url = `${BASE_URL}?apiKey=${API_KEY}&cuisine=${encodeURIComponent(cuisine)}&type=${encodeURIComponent(query)}&number=5`;
            try {
                // Fetch recipes from the API
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                // Get a random recipe from the results
                const recipes = data.results;
                if (recipes.length === 0) {
                    throw new Error('No recipes found for the selected country and type.');
                }
                const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
                // Display the recipe
                const output = document.getElementById("recipeOutput");
                output.innerHTML = `
                    <h3>Random Recipe from ${country} (${type}):</h3>
                    <p><strong>${randomRecipe.title}</strong></p>
                    <img src="${randomRecipe.image}" alt="${randomRecipe.title}" style="max-width: 100%; height: auto;" />
                `;
            } catch (error) {
                // Display error message
                const output = document.getElementById("recipeOutput");
                output.innerHTML = `<p style="color: red;">${error.message}</p>`;
            }
        }
</script>

