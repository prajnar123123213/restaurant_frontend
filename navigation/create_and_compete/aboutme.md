---
layout: post 
title: About the Team! 
search_exclude: true
permalink: /create_and_compete/aboutme
menu: nav/create_and_compete.html
author: Mirabelle, Arshia, Prajna, Claire, Zoe, Sanya
---

<!-- HTML table fragment for page -->
<table id="demo" class="table">
  <thead>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
      </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let resultContainer = document.getElementById("result");
  
  // prepare URL;

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
          for (const row of data.students) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const age = document.createElement("td");
            const role = document.createElement("td");
            // data is specific to the API
            name.innerHTML = row.name;
            age.innerHTML = row.age;
            role.innerHTML = row.role; 
            // this builds each td into tr
            tr.appendChild(name);
            tr.appendChild(age);
            tr.appendChild(role);
            // add HTML to container
            resultContainer.appendChild(tr);
          }
      })
  })
</script>

## Arshia Deb Roy 
- As the scrum master, 