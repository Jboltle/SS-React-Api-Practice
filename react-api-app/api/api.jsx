
const sqlite3 = require('sqlite3')




export const apiData = async () => {

  const apiURL = `https://jsonplaceholder.typicode.com/photos`;
       
       await fetch(apiURL)
       .then(response => response.json())
       .then(json => {
      for (let i in json)
         console.log(json)
      }
    )

}


export const apiTitle = async () => {

  const apiURL = `https://jsonplaceholder.typicode.com/photos`;
       
       await fetch(apiURL)
       .then(response => response.json())
       .then(json => {
      for (let i in json)
         console.log(json[i].title)
      }
    )

}
   export   const apiID = async () =>{

       const apiURL = `https://jsonplaceholder.typicode.com/photos`;
       
       await fetch(apiURL)
       .then(response => response.json())
       .then(json => {
      for (let i in json)
         console.log(json[i].id)
      }
    )

      
  }
     export const apiImageURL = async () =>{

       const apiURL = `https://jsonplaceholder.typicode.com/photos`;
       
       await fetch(apiURL)
       .then(response => response.json())
       .then(json => {
      for (let i in json)
         return (json[i].url)
      }
    )

      
  }
      
  
      

/*
const DATABASE = 'database.db'

const db = new sqlite3.Database(DATABASE);
db.run(`CREATE TABLE data (
    
  
  )`)*/