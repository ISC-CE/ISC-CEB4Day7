/*
Concept Tutorial:
In JavaScript, asynchronous operations like fetch should be handled with 'await' 
in an 'async' function to ensure they complete before the code proceeds.
*/

// Corrected Code:
async function fetchData() {
    let response = await fetch('https://api.example.com/data');  // Added await
    let data = await response.json();  // Added await
    console.log(data);
  }
  fetchData();
  