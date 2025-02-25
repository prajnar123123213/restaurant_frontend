---
layout: post
title: San Diego 
search_exclude: true
permalink: /san_diego/home
menu: nav/san_diego.html
---
<html>
<style>
body {
  background: linear-gradient(to bottom,rgb(70, 163, 255),rgb(0, 85, 255));
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
}
.site-header {
  background-color: black;
  color: white;
}
.myDiv {
  border: 5px solid white;
  background: linear-gradient(to bottom right,rgb(180, 215, 248),rgb(71, 172, 255)); /* Gradient background for a modern look */
  text-align: center;
  padding: 30px;
  border-radius: 15px; /* Rounded corners for a softer look */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Deeper shadow for more depth */
  animation: fadeIn 1.5s ease-in-out;
  max-width: 80%;
  margin: 40px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
}
.myDiv:hover {
  transform: scale(1.03); /* Slightly enlarges the box on hover */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* More pronounced shadow effect */
}
img {
  border: 5px solid rgb(170, 223, 255);
  transition: transform 0.4s ease; /* Smooth zoom effect */
}
img:hover {
  transform: scale(1.05); /* Zoom image slightly on hover */
}
.button {
  background-color: rgb(204, 229, 255); /* Matching purple shade */
  color: rgb(51, 170, 255);
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for hover effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.button:hover {
  background-color: rgb(200, 227, 255); /* Slightly darker purple for hover effect */
  color: white; /* Change text color on hover */
  transform: translateY(-5px); /* Button lifts slightly on hover */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
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

<body>
<div class="myDiv">
  <h2 style="
    color: white;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 2.5em; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 20px;">Welcome to San Diego!</h2>
  <p style="
    color:rgb(219, 238, 255);
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 25px; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 10px;">Discover the amazing city of San Diego, full of rich history, vibrant culture, and beautiful scenery. From the bustling downtown areas to the relaxing coastal spots, check out some of the best restaurants and cuisines the city has to offer!</p>
</div>
<center>
    <img src="{{site.baseurl}}/images/createandcompete/sandiegoo.jpg" alt="San Diego" width="500" height="500">
</center>

</body>
</html>