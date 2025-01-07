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

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("culinaryposts");

    async function fetchUser() {
        const response = await fetch(`${pythonURI}/api/user`, fetchOptions);
        const user = await response.json();
        console.log(user);
        return user;
    }

    const user = fetchUser();

    async function fetchChannels() {
        try {
            const groupName = 'Culinary Posts';
            const responseData = {
                group_name: groupName,
            };
            // add filter to get only messages from this channel
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responseData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            container.innerHTML = "";

            channels.forEach(channel => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h3");
                title.classList.add("card-title");
                title.textContent = channel.name;

                const description = document.createElement("p");
                description.classList.add("card-description");
                description.textContent = channel.attributes["content"];

                card.appendChild(title);
                card.appendChild(description);

                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }

    document.getElementById('channelForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('textArea').value;
        const group_id = 13;

        const channelData = {
            name: title,
            group_id: group_id,
            attributes: {"content": content}
        };

        try {
            const response = await fetch(`${pythonURI}/api/channel`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(channelData)
            });

            if (!response.ok) {
                throw new Error('Failed to add channel: ' + response.statusText);
            }

            fetchChannels();
            document.getElementById('channelForm').reset();
        } catch (error) {
            console.error('Error adding channel:', error);
            alert('Error adding channel: ' + error.message);
        }
    });

    fetchChannels();
</script>

<script>
/**
 * Calculate new latitude and longitude from a starting point, distance, and bearing.
 * @param {number} lat - Latitude of the starting point (in degrees).
 * @param {number} lon - Longitude of the starting point (in degrees).
 * @param {number} distance - Distance to travel (in kilometers).
 * @param {number} bearing - Direction of travel (in degrees from North).
 * @returns {object} - Object with new latitude and longitude.
 */
function calculateNewCoordinates(lat, lon, distance, bearing) {
    const R = 6371; // Earth's radius in kilometers

    // Convert latitude, longitude, and bearing to radians
    const latRad = (lat * Math.PI) / 180;
    const lonRad = (lon * Math.PI) / 180;
    const bearingRad = (bearing * Math.PI) / 180;

    // Calculate new latitude
    const newLatRad = Math.asin(
        Math.sin(latRad) * Math.cos(distance / R) +
        Math.cos(latRad) * Math.sin(distance / R) * Math.cos(bearingRad)
    );

    // Calculate new longitude
    const newLonRad = lonRad + Math.atan2(
        Math.sin(bearingRad) * Math.sin(distance / R) * Math.cos(latRad),
        Math.cos(distance / R) - Math.sin(latRad) * Math.sin(newLatRad)
    );

    // Convert back to degrees
    const newLat = (newLatRad * 180) / Math.PI;
    const newLon = (newLonRad * 180) / Math.PI;

    return {
        latitude: newLat,
        longitude: newLon
    };
}

// Example Usage
const startPoint = { latitude: 37.7749, longitude: -122.4194 }; // San Francisco
const distance = 50; // 50 kilometers
const bearing = 45; // 45 degrees (Northeast)

const newPoint = calculateNewCoordinates(
    startPoint.latitude,
    startPoint.longitude,
    distance,
    bearing
);

console.log(`New Coordinates: Latitude = ${newPoint.latitude}, Longitude = ${newPoint.longitude}`);
</script>
