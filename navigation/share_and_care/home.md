---
layout: post 
title: Asia
search_exclude: true
permalink: /share_and_care/home
menu: nav/share_and_care.html
---

<html>
<head>
<style>
.myDiv {
  border: 5px white;
  background-color: rgb(196, 143, 215);
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  animation: fadeIn 1.5s ease-in-out;
}
img {
  border: 5px solid rgb(234, 181, 236);
  transition: transform 0.4s ease; /* Smooth zoom effect */
}
img:hover {
  transform: scale(1.05); /* Zoom image slightly on hover */
}
.button {
  background-color: rgb(244, 236, 253); /* Matching purple shade */
  color: rgb(88, 49, 118);
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
  background-color: rgb(214, 200, 233); /* Slightly darker purple for hover effect */
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
</head>
<body>

<div class="myDiv">
  <h2 style="
    color: white;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 2.5em; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 20px;">Welcome to Asia!</h2>
  <p style="
    color: #FCDBFF;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 25px; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 10px;">Explore a vast diverse continent with a rich history, vibrant culture, and breathtaking landscapes. From the bright cities of China to the bustling streets of India, explore some of the restaurants and cuisines in Asia!</p>
</div>

<center>
  <img src="{{site.baseurl}}/images/createandcompete/china.jpeg" alt="China" width="500" height="500">
</center>

<div style="text-align: center; margin-top: 20px;">
  <a href="https://prajnar123123213.github.io/restaurant_frontend/share_and_care/revvit/"
    class="button"> Find Restaurants
  </a>
</div>

</body>
</html>
