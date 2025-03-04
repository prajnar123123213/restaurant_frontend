---
layout: post
title: Review 
search_exclude: true
permalink: san_diego/reviews/
menu: nav/san_diego.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<div class="main">
    <div class="content">
        <div class="form-container">
            <form id="channelForm">
                <div class="form-inputs">
                    <!-- Changed label -->
                    <input type="text" id="title" name="title" placeholder="Restaurant Name" required>
                </div>
                <div class="form-inputs">
                    <!-- Changed to text box for stars -->
                    <input type="text" id="stars" name="stars" placeholder="How many stars?" required>
                </div>
                <textarea id="textArea" name="textArea" placeholder="Post Here" required></textarea>
                <!-- Added image upload -->
                <div class="form-inputs">
                    <label for="imageUpload" style="margin-right: 10px; color: pink; font-family: 'Comic Sans MS', cursive;">Upload an image:</label>
                    <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
                </div>
                <button type="submit" id="postButton">Post</button>
            </form>
        </div>
        <div id="culinaryposts" class="form-container">
            <table id="channelsTable" border="1">
                <thead>
                <tr>
                    <th>Restaurant Name</th>
                    <th>Review</th>
                </tr>
                </thead>
                <tbody id="channelsTableBody">
                </tbody>
        </table>
        </div>
    <div>
</div>

<style>
    #channelsTable {
        width: 80%; 
        margin: 20px auto;
        border-collapse: collapse;
    }

    #channelsTable th, #channelsTable td {
        padding: 12px;
        text-align: center;
        border: 1px solid;
    }

    #channelsTable th {
        font-weight: bold;
    }

    .main {
        display: flex;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    /* Form Styling */
    .form-container {
        padding: 20px;
        margin-top: 30px;
        background-color:rgb(255, 178, 196); /* Light pink background */
        border-radius: 12px;
        width: calc(100% - 400px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        font-family: 'Comic Sans MS', cursive; /* Fun font */
    }

    .form-inputs {
        display: flex;
        flex-direction: column; /* Stacked layout */
        gap: 10px;
        align-items: flex-start;
    }

    #title, #stars {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ffb6c1; /* Soft pink border */
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(255, 149, 184); /* Light pink field */
        color: #d147a3; /* Deep pink text */
    }

    #textArea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ffb6c1;
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(255, 186, 209);
        color: #d147a3;
        margin-top: 10px;
        resize: none;
        height: 100px;
        font-style: italic; /* Italicized text */
    }

    #imageUpload {
        padding: 5px;
        border-radius: 8px;
        border: 1px solid #ffb6c1;
        font-size: 14px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(252, 182, 205);
        color: #d147a3;
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color: #ff69b4; /* Hot pink button */
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Comic Sans MS', cursive;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.2s ease;
    }

    button[type="submit"]:hover {
        background-color: #d147a3; /* Deeper pink on hover */
    }

    /* Channels Container */
    #culinaryposts {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-top: 20px;
    }

    /* Post Cards Styling */
    .card {
        width: calc(50% - 20px);
        padding-top: 20px;
        padding-bottom: 30px;
        min-width: 300px;
        padding: 20px;
        background-color:rgb(249, 186, 206);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: left;
        font-family: 'Comic Sans MS', cursive;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color:rgb(209, 71, 161);
    }

    .card-description {
        color: #d147a3;
        font-size: 1em;
        margin-top: 10px;
    }
</style>

<!-- <script type="module">
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
    } -->

<script type="module">
    import {pythonURI,fetchOptions } from '../assets/js/api/config.js';
    // Define the API URLUpdate with your correct API URL

    // Function to handle form submission and fetching of channels
    async function handlePostAndFetchChannels() {
        //event.preventDefault();

        console.log("running fetch")

        const title = document.getElementById('title').value;
        const content = document.getElementById('textArea').value;


        try {

            const response = await fetch(apiUrl, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Failed to add channel: ' + response.statusText);
            }

            //fetchChannels();

            const data = await response.json(); // Parse the JSON response
            const channels = data.channels; // Assuming the array is under "channels"

        // Populate the table with the fetched channels
            const tableBody = document.getElementById('channelsTableBody');
            if (!tableBody) {
                console.error('Element with id "channelsTableBody" not found.');
                return;
            }

            tableBody.innerHTML = ''; // Clear the table before adding new rows

            channels.forEach((channel) => {
            const row = document.createElement('tr');

            // Extract and display title and content
            const nameCell = document.createElement('td');
            nameCell.textContent = channel.title || "N/A";

            const reviewCell = document.createElement('td');
            reviewCell.textContent = channel.content?.content || "No review provided";

            row.appendChild(nameCell);
            row.appendChild(reviewCell);

            tableBody.appendChild(row);
        });

            document.getElementById('channelForm').reset();
        } catch (error) {
            console.error('Error adding channel:', error);
            alert('Error adding channel: ' + error.message);
        }
    }

    document.getElementById('channelForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        console.log("button hit")

        const title = document.getElementById('title').value;
        const content = document.getElementById('textArea').value;

        const channelData = {
            name: title,
            attributes: {"content": content}
        };

        try {
            //const response = await fetch(`${pythonURI}/api/channel`, {
            console.log("posting")

            const response = await fetch(`${pythonURI}/api/channel/getdata`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(channelData)
            });

            if (!response.ok) {
                throw new Error('Failed to add channel: ' + response.statusText);
            }

            //fetchChannels();
            document.getElementById('channelForm').reset();
        } catch (error) {
            console.error('Error adding channel:', error);
            alert('Error adding channel: ' + error.message);
        }

        handlePostAndFetchChannels();
    });

    // fetchChannels();
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