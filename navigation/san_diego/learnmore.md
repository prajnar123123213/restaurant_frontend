---
layout: post
title: Learn More 
search_exclude: true
permalink: san_diego/learnmore/
menu: nav/san_diego.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<html lang="en">
  <meta charset="UTF-8" />
  <title>Recipe Suggestion App</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      margin: auto;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      color: #333;
    }

    label, select, button {
      display: block;
      width: 100%;
      margin-top: 15px;
      font-size: 16px;
      color: #333; 
    }

    button {
      padding: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }

    #output {
      margin-top: 20px;
      font-weight: bold;
      text-align: center;
      color: #333;
    }

    select {
      padding: 10px;
      font-size: 16px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  </style>

  <div class="container">
    <h1>Recipe Suggestion App</h1>
    <label for="flavor">Choose a flavor:</label>
    <select id="flavor">
      <option value="sweet">Sweet</option>
      <option value="savory">Savory</option>
      <option value="spicy">Spicy</option>
    </select>
    <label for="type">Choose a type:</label>
    <select id="type">
      <option value="main">Main Course</option>
      <option value="snack">Snack</option>
    </select>
    <button id="suggestBtn">Suggest Recipe</button>
    <div id="output"></div>
  </div>

  <script>
    
    const recipes = [
      { name: "Chocolate Cake", flavor: "sweet", type: "snack" },
      { name: "Apple Pie", flavor: "sweet", type: "snack" },
      { name: "Grilled Cheese Sandwich", flavor: "savory", type: "snack" },
      { name: "Beef Stew", flavor: "savory", type: "main" },
      { name: "Spicy Tofu Stir-Fry", flavor: "spicy", type: "main" },
      { name: "Hot Wings", flavor: "spicy", type: "snack" },
      { name: "Sweet and Sour Chicken", flavor: "sweet", type: "main" },
      { name: "Spicy Chili", flavor: "spicy", type: "main" },
      { name: "Savory Pancakes", flavor: "savory", type: "main" }
    ];

    
    function suggestRecipe(flavor, type) {
      const filtered = recipes.filter(
        (recipe) => recipe.flavor === flavor && recipe.type === type
      );

      if (filtered.length > 0) {
        const randomIndex = Math.floor(Math.random() * filtered.length);
        return filtered[randomIndex].name;
      } else {
        return "No recipes found for that combination.";
      }
    }

    
    document.getElementById("suggestBtn").addEventListener("click", () => {
      const flavor = document.getElementById("flavor").value;
      const type = document.getElementById("type").value;
      const result = suggestRecipe(flavor, type);
      document.getElementById("output").textContent = `Suggested Recipe: ${result}`;
    });
  </script>
</html>

hi everyone 
