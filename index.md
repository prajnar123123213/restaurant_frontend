---
layout: post
title: Restaurant Reviews
search_exclude: true
hide: true
menu: nav/home.html
---


<style>

  .button {
    display: inline-block;
    color: white !important;
    padding: 20px 40px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 
    border: none; 
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
    animation: fadeIn 1.5s ease-in-out; 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 15px;
    }
    .button button {
    background: inherit;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

}

</style>

<h2> Explore our various restaurants and recipes from all over the globe! From San Diego to Asia, you can share the details of your vast tourist journey, or your advice for local restaurants within the comfort of your home. </h2>

<h3 style="
    text-align: center;"
    >
Choose where to start your culinary journey... </h3>
<br>

<div class="button-container">
<a href="https://prajnar123123213.github.io/restaurant_frontend/create_and_compete/home" class="button" style="background-color:rgb(108, 221, 100);">
    Africa
</a>

<a href="https://prajnar123123213.github.io/restaurant_frontend/share_and_care/home" class="button" style="background-color:rgb(219, 75, 75);">
    Asia
</a>

<a href="https://prajnar123123213.github.io/restaurant_frontend/rate_and_relate/home" class="button" style="background-color:rgb(255, 123, 67);">
    South America
</a>

<a href="https://prajnar123123213.github.io/restaurant_frontend/san_diego/home" class="button" style="background-color:rgb(70, 163, 255);">
    San Diego 😎
</a>
</div>

<html>
<head>
    <title>Recipe Search</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #1e1e2e;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #f8c291;
        }
        .container {
            background: #2a2a3a;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            margin: auto;
        }
        .diet-options {
            margin: 10px 0;
            color: #ffbe76;
        }
        .diet-options label {
            display: block;
            margin: 5px 0;
        }
        input[type="text"] {
            width: 80%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #555;
            border-radius: 5px;
            background: #3b3b4f;
            color: white;
        }
        button {
            margin-top: 10px;
            padding: 10px 15px;
            background-color: #ff6b81;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover {
            background-color: #ff4757;
        }
        #results {
            margin-top: 20px;
            text-align: left;
            max-width: 400px;
            margin: auto;
            background: #3b3b4f;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            color: #dcdde1;
        }
    </style>
</head>
<body>
    <h1>Search for a Recipe Below</h1>
<style>
    h1 {
        font-family: 'Comic Sans MS', cursive, sans-serif;
        color: #ff6b81;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(45deg, #ff6b81, #f8c291, #ffb3ba);
        -webkit-background-clip: text;
        color: transparent;
        letter-spacing: 1px;
        margin-bottom: 20px;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
        transition: all 1s ease;
    }
    h1:hover {
        color: #ff4757;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
        transform: scale(1.05);
    }
</style>
    <div class="container">
        <div class="diet-options">Select a diet:</div>
        <div class="diet-options">
            <label><input type="checkbox" id="glutenFree" value="gluten free"> Gluten Free</label>
            <label><input type="checkbox" id="keto" value="keto"> Keto</label>
            <label><input type="checkbox" id="lowCarb" value="low carb"> Low Carb</label>
        </div>
        <input type="text" id="searchBox" placeholder="Enter a dish...">
        <button onclick="searchRecipe()">Search</button>
    </div>
    <div id="results"></div>
</body>
    <script>
        async function searchRecipe() {
            const query = document.getElementById("searchBox").value;
            let diet = [];
            if (document.getElementById("glutenFree").checked) diet.push("gluten free");
            if (document.getElementById("keto").checked) diet.push("keto");
            if (document.getElementById("lowCarb").checked) diet.push("low carb");
      //      
            const dietParam = diet.length > 0 ? `&diet=${encodeURIComponent(diet.join(","))}` : "";
            const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${encodeURIComponent(query)}${dietParam}&number=10`;
      //     
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "7ef291b2famshc94a4514b87d83bp18644djsn23a03d26ccb0",
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                }
            };
      //      
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                displayResults(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
      //  
        function displayResults(results) {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            results.forEach(recipe => {
                const recipeElement = document.createElement("div");
                recipeElement.innerHTML = `<h3>${recipe.title}</h3><img src="${recipe.image}" alt="${recipe.title}" width="200">`;
                resultsDiv.appendChild(recipeElement);
            });
        }
    </script>
</body>
</html>