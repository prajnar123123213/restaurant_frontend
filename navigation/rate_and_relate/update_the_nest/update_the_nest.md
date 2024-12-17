---
toc: true
layout: post
title: Recipe Upload 
description:
permalink: /rate_and_relate/update_the_nest/
menu: nav/rate_and_relate.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>African Recipe Upload and Comments</title>
    <style>
        /* General styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #ffecec; /* Light red background */
            color: #7a0a0a; /* Dark red text */
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        h1 {
            color: #d9534f; /* Vibrant red */
            font-family: 'Comic Sans MS', cursive;
            font-size: 2.8em;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #f8d7da; /* Soft red background for container */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }
        input[type="file"], input[type="text"], textarea, button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
            border: 1px solid #d9534f; /* Red borders */
            border-radius: 4px;
        }
        button {
            background-color: #d9534f; /* Vibrant red button */
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #c9302c; /* Darker red */
        }
        /* Brighter red upload area */
        .upload-area {
            background-color: #f44236; /* Brighter red for the upload area */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .recipe-post {
            margin-top: 20px;
            background-color: #fff3f3; /* Light red background for posts */
            padding: 15px;
            border: 1px solid #d9534f;
            border-radius: 8px;
        }
        .recipe-post img {
            max-width: 100%;
            border-radius: 8px;
        }
        .comments, .general-comments {
            margin-top: 15px;
            text-align: left;
        }
        .comment, .general-comment {
            margin: 5px 0;
            padding: 8px;
            background-color: #fce4e4; /* Light red for comments */
            border-radius: 4px;
        }
        /* General comments section */
        .general-comments {
            margin-top: 30px;
            background-color: #7a0a0a; /* Dark red background */
            color: #ffffff; /* White text */
            padding: 20px;
            border-radius: 8px;
        }
        .general-comments h2 {
            margin-bottom: 15px;
            font-size: 1.5em;
        }
        .general-comment {
            background-color: #c9302c; /* Slightly lighter dark red for individual comments */
        }
    </style>
</head>
<body>
    <h1>Upload Your Recipe and Comments</h1>
    <div class="container">
        <!-- Form to upload an image and description -->
        <div class="upload-area">
            <form id="uploadForm">
                <label for="imageUpload">Upload Recipe Image:</label>
                <input type="file" id="imageUpload" accept="image/*" required>
                <label for="description">Recipe Description:</label>
                <input type="text" id="description" placeholder="Write a description for the recipe..." required>
                <button type="button" onclick="uploadRecipe()">Upload Recipe</button>
            </form>
        </div>
        <!-- Display uploaded posts -->
        <div id="postsContainer"></div>
    </div>
    <!-- General comments section -->
    <div class="general-comments">
        <h2>General Comments</h2>
        <textarea id="generalCommentInput" placeholder="Write your comment here..."></textarea>
        <button onclick="addGeneralComment()">Post Comment</button>
        <div id="generalCommentsContainer">
            <!-- General comments will appear here -->
        </div>
    </div>
    <script>
        const posts = []; // Array to hold posts with images and descriptions
        const generalComments = []; // Array to hold general comments
        // Function to handle uploading a recipe
        function uploadRecipe() {
            const imageInput = document.getElementById('imageUpload');
            const descriptionInput = document.getElementById('description');
            const postsContainer = document.getElementById('postsContainer');
            // Check if an image and description were provided
            if (imageInput.files.length === 0 || descriptionInput.value.trim() === '') {
                alert('Please upload an image and provide a description.');
                return;
            }
            // Create a FileReader to display the uploaded image
            const file = imageInput.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result; // Base64 image URL
                const description = descriptionInput.value;
                // Create a new post
                const post = {
                    imageUrl,
                    description,
                    comments: []
                };
                posts.push(post);
                // Clear the form
                imageInput.value = '';
                descriptionInput.value = '';
                // Display the updated posts
                renderPosts(postsContainer);
            };
            reader.readAsDataURL(file);
        }
        // Function to render posts with images, descriptions, and comments
        function renderPosts(container) {
            container.innerHTML = ''; // Clear previous content
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('recipe-post');
                // Create HTML for the post
                postElement.innerHTML = `
                    <img src="${post.imageUrl}" alt="Recipe Image">
                    <p><strong>Description:</strong> ${post.description}</p>
                    <div class="comments" id="comments-${index}">
                        <h4>Comments:</h4>
                        ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
                        <textarea id="commentInput-${index}" placeholder="Write a comment..."></textarea>
                        <button onclick="addComment(${index})">Add Comment</button>
                    </div>
                `;
                container.appendChild(postElement);
            });
        }
        // Function to add a comment to a specific post
        function addComment(postIndex) {
            const commentInput = document.getElementById(`commentInput-${postIndex}`);
            const commentText = commentInput.value.trim();
            if (commentText !== '') {
                posts[postIndex].comments.push(commentText);
                commentInput.value = ''; // Clear input field
                renderPosts(document.getElementById('postsContainer')); // Re-render posts
            } else {
                alert('Please enter a valid comment.');
            }
        }
        // Function to add a general comment
        function addGeneralComment() {
            const commentInput = document.getElementById('generalCommentInput');
            const commentText = commentInput.value.trim();
            const commentsContainer = document.getElementById('generalCommentsContainer');
            if (commentText !== '') {
                generalComments.push(commentText);
                commentInput.value = ''; // Clear input field
                renderGeneralComments(commentsContainer);
            } else {
                alert('Please enter a valid comment.');
            }
        }
        // Function to render general comments
        function renderGeneralComments(container) {
            container.innerHTML = ''; // Clear previous content
            generalComments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('general-comment');
                commentElement.textContent = comment;
                container.appendChild(commentElement);
            });
        }
    </script>
</body>