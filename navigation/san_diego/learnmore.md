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
        .restaurant-output {
            margin-top: 20px;
            padding: 20px;
            background-color: #96a66c;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <h1 style="
        color: #d2b48c; /* Light brown (Tan) */
        font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
        font-size: 3.5em; /* Adjusted size for emphasis */
    ">San Diego Restaurant Finder</h1>
    <div class="container">
        <form id="restaurantForm">
            <label for="type">What type of food do you like?</label>
            <select id="type">
                <option value="Mexican">Mexican</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="American">American</option>
                <option value="Indian">Indian</option>
            </select>
            <button type="button" onclick="getRestaurant()">Find a Restaurant</button>
        </form>
        <div id="restaurantOutput" class="restaurant-output">
            <!-- Restaurant output will be displayed here -->
        </div>
    </div>
    <script>
        const restaurants = {
            "Mexican": [
                "Lucha Libre Taco Shop - Known for its creative tacos.",
                "Humberto's Taco Shop - Great for classic Mexican dishes.",
                "Puesto - Famous for artisan tacos and margaritas."
            ],
            "Italian": [
                "Buona Forchetta - Renowned for its authentic Italian pizzas.",
                "Civico 1845 - A modern take on classic Italian cuisine.",
                "Filippi's Pizza Grotto - A local favorite for pizza and pasta."
            ],
            "Japanese": [
                "Nobu San Diego - High-end sushi and Japanese dishes.",
                "Sushi Ota - A sushi lover's paradise.",
                "Tajima Ramen - Known for its delicious ramen bowls."
            ],
            "American": [
                "Hash House A Go Go - Famous for its oversized portions.",
                "Phil's BBQ - A must-visit for barbecue lovers.",
                "The Mission - A great spot for classic American brunch."
            ],
            "Indian": [
                "Curryosity - Modern twists on Indian classics.",
                "Ashoka The Great - Traditional Indian dishes in a cozy setting.",
                "Punjabi Tandoor - Authentic Indian food with bold flavors."
            ]
        };
        function getRestaurant() {
            const type = document.getElementById("type").value;
            // Fetch a random restaurant based on the selected type
            const typeRestaurants = restaurants[type];
            const randomRestaurant = typeRestaurants[Math.floor(Math.random() * typeRestaurants.length)];
            // Display the restaurant
            const output = document.getElementById("restaurantOutput");
            output.innerHTML = `<h3>Recommended ${type} Restaurant in San Diego:</h3><p>${randomRestaurant}</p>`;
        }
    </script>
</body>

