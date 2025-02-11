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
<a href="{{site.baseurl}}/create_and_compete/home/" class="button" style="background-color:rgb(108, 221, 100);">
    Africa
</a>

<a href="{{site.baseurl}}/share_and_care/home/" class="button" style="background-color:rgb(219, 75, 75);">
    Asia
</a>

<a href="{{site.baseurl}}/rate_and_relate/home/" class="button" style="background-color:rgb(255, 123, 67);">
    South America
</a>

<a href="{{site.baseurl}}/san_diego/home/" class="button" style="background-color:rgb(70, 163, 255);">
    San Diego 😎
</a>
</div>