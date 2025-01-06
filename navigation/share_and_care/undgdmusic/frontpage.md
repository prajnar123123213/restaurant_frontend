---
layout: page
title: Talk About 
description: Share music with others!
permalink: /undgdmusic/
---


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asian Recipes Finder</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #4B0082; /* Purple background */
            margin: 0;
            padding: 0;
            text-align: center;
        }
        h1 {
            color: #dda0dd; /* Light purple */
            font-family: 'Comic Sans MS', cursive;
            font-size: 3em;
            margin: 20px 0;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #5A2A7D; /* Darker purple */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        select, button, input {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            font-size: 1em;
        }
        button {
            background-color: #dda0dd;
            color: #4B0082;
            font-weight: bold;
            cursor: pointer;
        }
        button:hover {
            background-color: #eeccff;
        }
        .output {
            margin-top: 20px;
            padding: 20px;
            background-color: #8A2BE2; /* Medium purple */
            border-radius: 8px;
            color: #fff;
        }
        .food-image {
            max-width: 100%;
            border-radius: 8px;
            margin-top: 15px;
        }
        .chat-box {
            margin-top: 20px;
            background-color: #6A1B9A;
            border-radius: 10px;
            padding: 10px;
        }
        .chat-messages {
            text-align: left;
            text-color:
            height: 150px;
            overflow-y: auto;
            background-color: #FFFFFF;
            color: #0000FF;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Asian Recipes Finder</h1>
    <div class="container">
        <label for="country">Choose a Country:</label>
        <select id="country">
            <option value="Japan">Japan</option>
            <option value="India">India</option>
            <option value="China">China</option>
        </select>
        <button onclick="getRecipe()">Get Random Recipe</button>
        <div id="output" class="output">
            <!-- Recipe and image will appear here -->
        </div>
        <div class="chat-box">
            <h3>Chat About This Dish:</h3>
            <div id="chatMessages" class="chat-messages"></div>
            <input type="text" id="chatInput" placeholder="Type your comment...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>
    <script>
        // Predefined Recipes
        const recipes = {
            "Japan": ["Sushi", "Ramen", "Okonomiyaki"],
            "India": ["Butter Chicken", "Biryani", "Masala Dosa"],
            "China": ["Kung Pao Chicken", "Peking Duck", "Sweet and Sour Pork"]
        };
        const unsplashAccessKey = "YOUR_UNSPLASH_API_KEY"; // Replace with your Unsplash API key.
        // Function to get a random recipe and image
        async function getRecipe() {
            const country = document.getElementById("country").value;
            const dishes = recipes[country];
            const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
            // Fetch image from Unsplash
            let imageUrl = "";
            try {
                const response = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(randomDish)}&client_id=${unsplashAccessKey}`);
                const data = await response.json();
                imageUrl = data.urls.small || "https://via.placeholder.com/400x300?text=No+Image";
            } catch {
                imageUrl = "https://via.placeholder.com/400x300?text=Image+Not+Available";
            }
            document.getElementById("output").innerHTML = `
                <h2>${randomDish} (from ${country})</h2>
                <img src="${imageUrl}" alt="${randomDish}" class="food-image">
            `;
        }
        // Simple Chat Functionality
        function sendMessage() {
            const input = document.getElementById("chatInput");
            const message = input.value.trim();
            console.log('Chat Input', message);
            if (message) {
                const chatBox = document.getElementById("chatMessages");
                console.log('chatBox', `<h6>${message}</h6>`);
                chatBox.innerHTML += `<p class="chat-text"><strong>User:</strong> ${message}</p>`;
                input.value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }
    </script>
</body>