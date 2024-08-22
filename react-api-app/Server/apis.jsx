const sqlite3 = require('sqlite3');
const express = require('express');

const app = express();
const port = 3000;

const apiURL = 'https://jsonplaceholder.typicode.com/photos';

let data;
const fetchData = async () => {
  try {
    const response = await fetch(apiURL);
    data = await response.json(); 
    console.log('Data fetched and cached.', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData(); 


app.get('/', (req, res) => {

    res.send(data);
  
})

const apiTitle = (data) => {
  try {
    const titles = data.map(item => item.title);
    titles.forEach(title => console.log(title));
    return titles;
  } catch (error) {
    console.error('Error fetching titles:', error);
  }
};

const apiID = (data) => {
  try {
    const ids = data.map(item => item.id);
    ids.forEach(id => console.log(id));
    return ids;
  } catch (error) {
    console.error('Error fetching IDs:', error);
  }
};

const apiImageURL = (data) => {
    const urls = data.map(item => item.url);
    return urls
};
const apiImageURLID = () => {

  const searchString = '/600/'; // The substring to search for
  const startIndex = url.indexOf(searchString) + searchString.length; // Calculate start index dynamically
  const id = url.slice(startIndex); // Extract everything from startIndex to the end
  const ids = urls.map(url=> apiImageURLID(url))
}


app.get('/title', (req, res) => {
  if (data) {
    const titles = apiTitle(data);
    res.send(titles);
  } else {
    res.status(500).send('Error fetching data');
  }
});


app.get('/id', (req, res) => {
  if (data) {
    const ids = apiID(data);
    res.send(ids);
  } else {
    res.status(500).send('Error fetching data');
  }
});


app.get('/image-url', (req, res) => {
  

    const apiImageUrl = apiImageURL(data);
    res.send(apiImageURL.urls);


  app.get('/image-url/id' ,(req, res) => {
    const apiImageURL = apiImageURLID(data);
    res.send(apiImageURL.ids)
  })

});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
