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
        <div id="culinaryposts"></div>
    <div>
</div>


<fieldset class="rating">
  <input type="radio" id="1star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
  <input type="radio" id="1star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
  <input type="radio" id="1star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
  <input type="radio" id="1star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
  <input type="radio" id="1star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
  <input type="radio" id="1star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
  <input type="radio" id="1star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
  <input type="radio" id="1star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
  <input type="radio" id="1star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
  <input type="radio" id="1starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
  
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
        background-color:rgb(192, 75, 25); /* Reddish brown background */
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
        border: 1px solid rgb(206, 187, 179); /* Beige border */
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(210, 136, 105); /* tan field */
        color:rgb(112, 45, 16); /* Dark brown text */
    }

    #textArea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid rgb(206, 187, 179);
        font-size: 16px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(206, 187, 179);
        color:rgb(192, 75, 25);
        margin-top: 10px;
        resize: none;
        height: 100px;
        font-style: italic; /* Italicized text */
    }

    #imageUpload {
        padding: 5px;
        border-radius: 8px;
        border: 1px rgb(210, 136, 105);
        font-size: 14px;
        font-family: 'Comic Sans MS', cursive;
        background-color:rgb(206, 187, 179);
        color:rgb(192, 75, 25);
    }

    button[type="submit"] {
        align-self: flex-start;
        padding: 10px 20px;
        background-color:rgb(192, 75, 25); /* Reddish brown button */
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
        background-color:rgb(141, 53, 15); /* Dark brown on hover */
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
        min-width: 300px;
        padding: 20px;
        background-color:rgb(206, 187, 179);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        text-align: left;
        font-family: 'Comic Sans MS', cursive;
    }

    .card-title {
        font-size: 1.2em;
        font-weight: bold;
        color: rgb(192, 75, 25);
    }

    .card-description {
        color:rgb(192, 75, 25);
        font-size: 1em;
        margin-top: 10px;
    }
</style>

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
