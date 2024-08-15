const sqlite3 = require('sqlite3')



const db = new sqlite3.Database('./db.sqlite');






     function jsonApi() {
      const apiURL = `https://jsonplaceholder.typicode.com/photos`;

        fetch(apiURL)
        .then(response => response.json())
        .then(json => console.log(json))
      
    }

    jsonApi()