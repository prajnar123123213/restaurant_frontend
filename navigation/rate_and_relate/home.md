---
layout: post 
title: South America
search_exclude: true
permalink: /rate_and_relate/home
menu: nav/rate_and_relate.html
---

<html>
<style>
body {
  background: linear-gradient(to bottom, rgb(255, 123, 67), rgb(250, 75, 0)); /* More appealing gradient */
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
  background: linear-gradient(to bottom right, rgb(255, 200, 150), rgb(255, 140, 100)); /* Enhanced gradient */
  text-align: center;
  padding: 30px;
  border-radius: 20px; /* More rounded corners */
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1.5s ease-in-out, glow 2s infinite alternate;
  max-width: 80%;
  margin: 40px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.myDiv:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.4);
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes glow {
  from {
    box-shadow: 0 0 20px rgba(255, 123, 67, 0.7);
  }
  to {
    box-shadow: 0 0 30px rgba(255, 94, 77, 0.9);
  }
}
img {
  border: 5px solid rgb(255, 194, 170);
  transition: transform 0.4s ease;
}
img:hover {
  transform: scale(1.05);
}
.button {
  background-color: rgb(253, 242, 236);
  color: rgb(255, 121, 48);
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.button:hover {
  background-color: rgb(253, 109, 57);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}
</style>

<body>
<div class="myDiv">
  <h2 style="
    color: white;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
    font-size: 2.5em;
    text-align: center;
    margin-top: 20px;">Welcome to South America!</h2>
  <p style="
    color:rgb(252, 250, 248);
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive;
    font-size: 25px;
    text-align: center;
    margin-top: 10px;">Explore a vast and diverse continent with a rich history, vibrant culture, and stunning landscapes. From the lively cities of Brazil to the colorful streets of Peru, discover some of the restaurants and cuisines in South America!</p>
</div>
<br>
<center>
<img src="{{site.baseurl}}/images/createandcompete/southamericaa.jpg" alt="South America" width="500" height="500">
</center>
<div style="text-align: center; margin-top: 20px;">
  <a href="https://prajnar123123213.github.io/restaurant_frontend/share_and_care/revvit/"
    class="button"> Find Restaurants
  </a>
</div>
</body>
</html>
