---
layout: post
title: Reviews
search_exclude: true
permalink: rate_and_relate/instabox
menu: nav/rate_and_relate.html
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
                <button type="submit">Post</button>
            </form>
        </div>
        <div id="sandiego"></div>
    <div>
</div>

<!--style changed to match font colors-->
<style> 
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
        background-color:rgb(247, 217, 118); /* Light pink background */
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
        border: 1px solid rgb(227, 184, 90); /* Soft Yellow border */
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(255, 231, 170); /* Light yellow field */
        color:rgb(255, 146, 63); /* Deep orange text */
    }

    #textArea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgb(255, 188, 110);
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(244, 215, 165);
        color:rgb(255, 141, 66);
        margin-top: 10px;
        resize: none;
        height: 100px;
        font-style: italic; /* Italicized text */
    }

    #imageUpload {
        padding: 5px;
        border-radius: 8px;
        border: 1px solid rgb(255, 208, 166);
        font-size: 14px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(255, 214, 143);
        color:rgb(250, 141, 17);
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color:rgb(252, 167, 69); /* Orange button */
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
        background-color:rgb(255, 147, 39); /* Deeper orange on hover */
    }

    /* Channels Container */
    #sandiego {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-top: 20px;
    }

    /* Post Cards Styling */
    .card {
        width: calc(50% - 20px);
        min-width: 300px;
        padding: 20px;
        background-color:rgb(253, 213, 153);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: left;
        font-family: 'Comic Sans MS', cursive;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color:rgb(233, 134, 63);
    }

    .card-description {
        color:rgb(239, 133, 46);
        font-size: 1em;
        margin-top: 10px;
    }
</style>

<script type="module">
    import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
    const container = document.getElementById("sandiego");

    async function fetchUser() {
        const response = await fetch(`${pythonURI}/api/user`, fetchOptions);
        const user = await response.json();
        console.log(user);
        return user;
    }

    const user = fetchUser();

    async function fetchChannels() {
        try {
            const groupName = 'Sandiego';
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
        const group_id = 35;

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