---
layout: post
title:  Explore 🗺️
search_exclude: true
permalink: /create_and_compete/elevatorpitch
menu: nav/create_and_compete.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<!-- HTML table fragment for page -->
 <style>
    /* Table container styles */
    table {
      width: 80%;
      margin: 20px auto;
      border-collapse: collapse;
      background-color:rgb(115, 110, 215); /* Brown background */
      color: #F4E1D2; /* Light sand text color */
      font-family: "Ubuntu", sans-serif; /* African-inspired font */
      font-size: 16px;
      border: 2px solidrgb(95, 115, 203); /* Dark brown border */
    }

    /* Table header styles */
    th {
      background-color:rgb(181, 80, 116); /* Darker brown for header */
      color: #F4E1D2; /* Light text */
      padding: 10px;
      text-align: center;
      border: 2px solidrgb(179, 65, 70);
    }

    /* Table body styles */
    td {
      padding: 10px;
      text-align: center;
      border: 1px solidrgb(118, 112, 198); /* Border for table cells */
    }

    /* Zebra stripes effect */
    tr:nth-child(even) {
      background-color:rgb(212, 154, 231); /* Medium brown for even rows */
    }

    tr:nth-child(odd) {
      background-color:rgb(19, 79, 139); /* Base brown for odd rows */
    }

    /* Hover effect */
    tr:hover {
      background-color:rgb(140, 173, 210); /* Sand color */
      color:rgb(167, 187, 183); /* Dark brown text */
    }
</style>

<center>
<h1 style="
    color:rgb(140, 148, 210); /* Light brown (Tan) */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 3.5em; /* Adjusted size for emphasis */
">
    South Africa
</h1>
</center>

<table id="demo" class="table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Location</th>
      </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let resultContainer = document.getElementById("result");
  
  // prepare URL
  url = "http://127.0.0.1:8887/api/restaurant";

  // set options for cross origin header request
  let options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
          console.error(response.status);
          return;
      }
      // valid response will contain json data
      response.json().then(data => {
          console.log(data);
          for (const row of data.restaurant) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const location = document.createElement("td");
            // data is specific to the API
            name.innerHTML = row.name;
            location.innerHTML = row.location;
            // this builds each td into tr
            tr.appendChild(name);
            tr.appendChild(location);
            // add HTML to container
            resultContainer.appendChild(tr);
          }
      })
  })
</script>

<style>
    .restaurant-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
    }

    .restaurant-item {
        width: 48%; 
        text-align: center;
    }

    .restaurant-item iframe {
        width: 100%;
        height: 350px;
        border: 0;
        margin-bottom: 10px;
    }

    .restaurant-item h4 {
        font-size: 1.5em;
        font-weight: bold;
        color: #826b64;
    }
</style>

<div class="restaurant-row">
    <div class="restaurant-item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5765.424877727608!2d28.033269416976754!3d-26.144375219692705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c9228422c2f%3A0x1ee2b0ec486639cd!2sMarble%20Restaurant!5e0!3m2!1sen!2sus!4v1733297404940!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="restaurant-item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57296.714149379346!2d28.25950275266904!3d-26.162675800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953df37fc184a3%3A0xf76b8a604e73d5fd!2sPiatto%20Farrarmere!5e0!3m2!1sen!2sus!4v1733297665327!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>

 <style>
    /* Table container styles */
    table {
      width: 80%;
      margin: 20px auto;
      border-collapse: collapse;
      background-color:rgb(19, 95, 139); /* Brown background */
      color:rgb(234, 210, 244); /* Light sand text color */
      font-family: "Ubuntu", sans-serif; /* African-inspired font */
      font-size: 16px;
      border: 2px solidrgb(35, 31, 59); /* Dark brown border */
    }

    /* Table header styles */
    th {
      background-color:rgb(111, 132, 202); /* Darker brown for header */
      color: #F4E1D2; /* Light text */
      padding: 10px;
      text-align: center;
      border: 2px solidrgb(19, 117, 139);
    }

    /* Table body styles */
    td {
      padding: 10px;
      text-align: center;
      border: 1px solid #5E2C04; /* Border for table cells */
    }

    /* Zebra stripes effect */
    tr:nth-child(even) {
      background-color:rgb(176, 33, 76); /* Medium brown for even rows */
    }

    tr:nth-child(odd) {
      background-color:rgb(37, 67, 69); /* Base brown for odd rows */
    }

    /* Hover effect */
    tr:hover {
      background-color:rgb(55, 42, 100); /* Sand color */
      color:rgb(45, 103, 83); /* Dark brown text */
    }
</style>

<center>
<h1 style="
    color:rgb(207, 138, 175); /* Light brown (Tan) */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 3.5em; /* Adjusted size for emphasis */
">
    Nigeria
</h1>
</center>

<table id="demo" class="table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Location</th>
      </tr>
  </thead>
  <tbody id="foodResult">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let foodResultContainer = document.getElementById("foodResult");
  
  // prepare URL
  foodUrl = "http://127.0.0.1:8887/api/food";

  // set options for cross origin header request
  let foodOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(foodUrl, foodOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
          console.error(response.status);
          return;
      }
      // valid response will contain json data
      response.json().then(data => {
          console.log(data);
          for (const row of data.food) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const location = document.createElement("td");
            // data is specific to the API
            name.innerHTML = row.name;
            location.innerHTML = row.location;
            // this builds each td into tr
            tr.appendChild(name);
            tr.appendChild(location);
            // add HTML to container
            foodResultContainer.appendChild(tr);
          }
      })
  })
</script>


<style>
    .restaurant-link {
        text-decoration: none;
        color: inherit; /* Keeps the same text color */
    }

    .restaurant-link:hover {
        text-decoration: underline;
        color: #d2691e; /* Dark orange for hover effect */
    }
</style>

<style>
    .restaurant-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
    }

    .restaurant-item {
        width: 30%;
        text-align: center;
    }

    .restaurant-item iframe {
        width: 100%;
        height: 350px;
        border: 0;
        margin-bottom: 10px;
    }

    .restaurant-item h4 {
        font-size: 1.5em;
        font-weight: bold;
        color: #826b64;
    }
</style>

<div class="restaurant-row">
    <div class="restaurant-item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112504.19526011754!2d7.386501752052531!3d9.084231247056183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a49284b1ac9%3A0x73b8df7c92ae2735!2sKilimanjaro%20Restaurant!5e0!3m2!1sen!2sus!4v1733297961979!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="restaurant-item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126518.07227419206!2d8.54178903416977!3d7.716398900000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105083236a0711fb%3A0xd7313e9c4f8599c7!2sMcFestine&#39;s!5e0!3m2!1sen!2sus!4v1733298034662!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="restaurant-item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31200.738318289295!2d6.639778524061299!3d12.17411975034274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b15caad3c23925%3A0x47383348b3d7a2d!2sUnity%20Restaurant!5e0!3m2!1sen!2sus!4v1733298580750!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>

<center>
<h1 style="
    color:rgb(99, 168, 208); /* Light brown (Tan) */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 3.5em; /* Adjusted size for emphasis */
">
    Ethiopia
</h1>
</center>

<table id="demo" class="table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Location</th>
      </tr>
  </thead>
  <tbody id="mealResult">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let mealResultContainer = document.getElementById("mealResult");
  
  // prepare URL
  mealUrl = "http://127.0.0.1:8887/api/meal";

  // set options for cross origin header request
  let mealOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(mealUrl, mealOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
          console.error(response.status);
          return;
      }
      // valid response will contain json data
      response.json().then(data => {
          console.log(data);
          for (const row of data.meal) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const location = document.createElement("td");
            // data is specific to the API
            name.innerHTML = row.name;
            location.innerHTML = row.location;
            // this builds each td into tr
            tr.appendChild(name);
            tr.appendChild(location);
            // add HTML to container
            mealResultContainer.appendChild(tr);
          }
      })
  })
</script>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4035058.949857512!2d34.59405017677945!3d9.019237200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85af81997095%3A0xb157cd963137f231!2sMesti%20Restaurant!5e0!3m2!1sen!2sus!4v1733297824900!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<style>
    .restaurant-link {
        text-decoration: none;
        color: inherit; /* Keeps the same text color */
    }

    .restaurant-link:hover {
        text-decoration: underline;
        color: #d2691e; /* Dark orange for hover effect */
    }
</style>
