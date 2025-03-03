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
</head>
<body>
    <h1>Search for a Recipe Below</h1>
    <div> select a diet </div>
    <div>
        <label><input type="checkbox" id="glutenFree" value="gluten free"> Gluten Free</label>
        <label><input type="checkbox" id="keto" value="keto"> Keto</label>
        <label><input type="checkbox" id="lowCarb" value="low carb"> Low Carb</label>
    </div>
    <input type="text" id="searchBox" placeholder="Enter a dish:">
    <button onclick="searchRecipe()">Search</button>
    <div id="results"></div>
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