---
layout: post 
title: Africa
search_exclude: true
permalink: /create_and_compete/home
menu: nav/create_and_compete.html
---
<html>
<style>
body {
  background: linear-gradient(to bottom,rgb(108, 221, 100),rgb(6, 117, 0));
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
  background: linear-gradient(to bottom right,rgb(86, 170, 94),rgb(45, 87, 38)); /* Gradient background for a modern look */
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
  border: 5px solid rgb(255, 255, 255);
  transition: transform 0.4s ease; /* Smooth zoom effect */
}
img:hover {
  transform: scale(1.05); /* Zoom image slightly on hover */
}
.button {
  background-color: rgb(244, 236, 253); /* Matching purple shade */
  color: rgb(45, 87, 38);
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

<body>
<div class="myDiv">
  <h2 style="
    color: white;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 2.5em; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 20px;">Welcome to Africa!</h2>
  <p style="
    color: #FCDBFF;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 25px; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 10px;">Explore a vast and diverse continent with a rich history, vibrant culture, and stunning landscapes. From the dynamic urban centers of Nigeria to the scenic landscapes of Morocco, discover some of the restaurants and cuisines in Africa!</p>
</div>
<center>
  <img src="{{site.baseurl}}/images/createandcompete/african.jpg" alt= "Africa" width="500" height="500">
</center>

</body>
</html>
