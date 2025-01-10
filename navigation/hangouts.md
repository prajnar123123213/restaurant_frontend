---
layout: post
title:  Explore 🗺️
search_exclude: true
permalink: /hangouts/
menu: nav/create_and_compete.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---
<center>
<h1 style="
    color: #FCDBFF;
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 3.5em; /* Adjusted size for emphasis */
    text-align: center; /* Centered text */
    margin-top: 3.5em
">
    Welcome to Asia!
</h1>
</center>

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

<h1 style="
    color: #E8293C; /* Red */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 50px; /* Adjusted size for emphasis */
">
    China
</h1>

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
        <h4>West Lake Restaurant</h4>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599679.4665856264!2d108.3245561875!3d28.228208999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34274bc5287ebbc5%3A0xbaae0193648be35d!2z6KW_5rmW5qW8!5e0!3m2!1sen!2sus!4v1734114976449!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="restaurant-item">
        <h4>Silk Road Cuisine</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14454107.199510708!2d100.31973386609324!3d27.81485653954242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34274a2c4efc96b9%3A0x7a80fae9c5385bc1!2sXinjiang%20the%20Silk%20Road%20Roasted%20Mutton!5e0!3m2!1sen!2sus!4v1734115339626!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

<h1 style="
    color: #FF8000; /* Orange */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 50px; /* Adjusted size for emphasis */
">
    India
</h1>
<div class="restaurant-row">
    <div class="restaurant-item">
<h4 style="
    color: #826b64 !important;"> Indian Accent</h4>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57397489.5483493!2d3.4100973999999593!3d28.59183360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0xfd133b52e7612c26!2sIndian%20Accent!5e0!3m2!1sen!2sus!4v1734115500662!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
    </div>
</div>
<h1 style="
    color: #FFFFF; /* White */
    font-family: 'Comic Sans MS', 'Brush Script MT', cursive; /* Fun and playful font */
    font-size: 50px; /* Adjusted size for emphasis */
">
    Japan
</h1>
<h4 style="
    color: #826b64 !important;"> Hakumaru </h4>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54813371.056550846!2d169.0606994!3d33.01583080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf7006d81e431%3A0x9b0f38033fb61b12!2sHakumaru!5e0!3m2!1sen!2sus!4v1734374940022!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<h1>Access data from our Flask server using JavaScript</h1>

<p>This code extracts data "live" from a local Web Server with JavaScript fetch.  Additionally, it formats the data into a table.</p>


<table id="demo" class="table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Location</th>
      </tr>
  </thead>
  <tbody id="chinaResult">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let chinaResultContainer = document.getElementById("chinaResult");
  
  // prepare URL
  chinaUrl = "http://127.0.0.1:8887/api/chinese";

  // set options for cross origin header request
  let chinaOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(chinaUrl, chinaOptions)
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
          for (const row of data.chinese) {
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
            chinaResultContainer.appendChild(tr);
          }
      })
  })
</script>

<!-- HTML table fragment for page -->
<table id="demo" class="table">
  <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Residence</th>
      </tr>
  </thead>
  <tbody id="chinaresult">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let chinaresultContainer = document.getElementById("chinaresult");
  
  // prepare URL
  url = "http://127.0.0.1:5001/api/data";

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
          for (const row of data) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const firstname = document.createElement("td");
            const lastname = document.createElement("td");
            const residence = document.createElement("td");
            // data is specific to the API
            firstname.innerHTML = row.FirstName; 
            lastname.innerHTML = row.LastName; 
            residence.innerHTML = row.Residence; 
            // this builds each td into tr
            tr.appendChild(firstname);
            tr.appendChild(lastname);
            tr.appendChild(residence);
            // add HTML to container
            chinaresultContainer.appendChild(tr);
          }
      })
  })
  
</script>

<a href='{{site.baseurl}}/