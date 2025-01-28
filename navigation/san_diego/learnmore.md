---
layout: post
title: Learn More 
search_exclude: true
permalink: san_diego/learnmore/
menu: nav/san_diego.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>San Diego Restaurant Finder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffe4e1; /* Very light pink */
            color: #880e4f; /* Deep magenta for text */
            margin: 20px;
        }
        h1 {
            color: #d81b60; /* Vibrant pink for the header */
            font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
            font-size: 3.5em;
            text-align: center;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffebee; /* Soft pink for the container */
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        select, button {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            font-size: 16px;
            border: 2px solid #f48fb1; /* Strong pink border */
            border-radius: 6px;
        }
        select {
            background-color: #fce4ec; /* Very light pink dropdown */
            color: #880e4f; /* Deep magenta for dropdown text */
        }
        button {
            background-color: #d81b60; /* Vibrant pink button */
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #ad1457; /* Darker pink on hover */
        }
        .restaurant-output {
            margin-top: 20px;
            padding: 20px;
            background-color: #ffe4e1; /* Very light pink output section */
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            color: #880e4f; /* Deep magenta text */
        }
        img {
            border-radius: 8px;
            margin-top: 10px;
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>San Diego Restaurant Finder</h1>
    <div class="container">
        <form id="restaurantForm">
            <label for="foodType">Choose a Type of Food:</label>
            <select id="foodType">
                <option value="Pizza">Pizza</option>
                <option value="Taco">Taco</option>
                <option value="Sushi">Sushi</option>
                <option value="Curry">Curry</option>
                <option value="Noodles">Noodles</option>
            </select>
            <button type="button" onclick="getRestaurant()">Find a Restaurant</button>
        </form>
        <div id="restaurantOutput" class="restaurant-output">
            <!-- Restaurant output will be displayed here -->
        </div>
    </div>
    <script>
        const API_KEY = 'e956342f5c504b1685b5f81826a61c9b'; // Replace with your Spoonacular API key
        const BASE_URL = 'https://api.spoonacular.com/food/menuItems/search'; // Provided API base URL
        async function getRestaurant() {
            const foodType = document.getElementById("foodType").value;
            // Build the API URL
            const url = `${BASE_URL}?apiKey=${API_KEY}&query=${encodeURIComponent(foodType)}&number=5`;
            try {
                // Fetch restaurants from the API
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                // Get a random restaurant from the results
                const restaurants = data.menuItems;
                if (restaurants.length === 0) {
                    throw new Error('No restaurants found for the selected food type.');
                }
                const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
                // Display the restaurant
                const output = document.getElementById("restaurantOutput");
                output.innerHTML = `
                    <h3>Recommended ${foodType} Restaurant:</h3>
                    <p><strong>${randomRestaurant.title}</strong></p>
                    <img src="${randomRestaurant.image}" alt="${randomRestaurant.title}" />
                `;
            } catch (error) {
                // Display error message
                const output = document.getElementById("restaurantOutput");
                output.innerHTML = `<p style="color: red;">${error.message}</p>`;
            }
        }
    </script>
</body>
